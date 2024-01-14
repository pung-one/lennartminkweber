import styled from "styled-components";

type Props = {
  leftSection: React.ReactNode;
  rightSection: React.ReactNode;
};

export default function SubLayout({ leftSection, rightSection }: Props) {
  return (
    <FlexContainer>
      <LeftSection>{leftSection}</LeftSection>

      <RightSection>{rightSection}</RightSection>
    </FlexContainer>
  );
}

const FlexContainer = styled.article`
  position: relative;
  display: flex;
  flex: 1;
`;

const LeftSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
`;

const RightSection = styled.div`
  position: relative;
  display: flex;
  flex: 1;
`;
