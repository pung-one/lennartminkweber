# Use Debian-based image for better native dependencies support
FROM node:20-bullseye-slim AS base

# Disabling Telemetry
ENV NEXT_TELEMETRY_DISABLED 1

# Install necessary system dependencies for Sharp and general build processes
RUN apt-get update && apt-get install -y \
    libc6-dev \
    libglib2.0-dev \
    libvips \
    curl \
    g++ \
    make \
    python3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Dependency installation phase
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# Build phase, using the base image with all dependencies
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image setup
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# Set the path to the global installation of sharp
ENV NEXT_SHARP_PATH /usr/local/lib/node_modules/sharp

# Install sharp globally at the specified version
RUN npm install -g --arch=x64 --platform=linux --libc=glibc sharp@0.33.0-rc.2

# Setup user and group for running the application
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy built artifacts from the builder stage
COPY --from=builder /app/public ./public
RUN mkdir .next && \
    chown nextjs:nodejs .next
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user for security
USER nextjs

# Expose the port the app runs on and set environment variables for runtime
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Command to run the application
CMD ["node", "server.js"]
