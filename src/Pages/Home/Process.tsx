import React from "react";
import styled from "styled-components";
import SectionTitle from "../../shared/SectionTitle";
import { processData } from "../../Data/Copywrite";

const ProcessSection = styled.section`
  padding: 6rem 0;
`;

const ProcessContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  padding: 5rem 3rem;
  column-gap: 4rem;

  @media screen and (max-width: 1100px) {
    padding: 3rem;
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 400px;
  max-width: 400px;
  color: var(--primary-purple);
`;
const ProcessCardImage = styled.img`
  height: 150px;
  width: 100%;
`;

const ProcessCardTitle = styled.h3`
  font-size: 2.4rem;
  text-align: center;
  margin: 2rem 0;
`;
const ProcessCardDescription = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;

const SectionTitleStyle = {
  color: "var(--primary-purple)",
};

const Process = () => {
  return (
    <>
      <ProcessSection id="process">
        <SectionTitle style={SectionTitleStyle}>Process</SectionTitle>
        <ProcessContainer>
          <ProcessGrid>
            {processData.map((process) => (
              <ProcessCard key={process.id}>
                <ProcessCardImage src={process.src} alt={process.alt} />
                <ProcessCardTitle>{process.title}</ProcessCardTitle>
                <ProcessCardDescription>
                  {process.summary}
                </ProcessCardDescription>
              </ProcessCard>
            ))}
          </ProcessGrid>
        </ProcessContainer>
      </ProcessSection>
    </>
  );
};

export default Process;
