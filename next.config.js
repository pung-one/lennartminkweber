/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  output: "export",
  images: { unoptimized: true },
};

module.exports = nextConfig;
