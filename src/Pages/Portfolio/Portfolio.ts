import styled from "styled-components";

export const PortfolioSectionWrapper = styled.section`
  margin-top: 8rem;
  padding: 6rem 0;
`;

export const PortfolioContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  padding: 3rem 0;
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

export const PortfolioCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 400px;
  color: var(--primary-purple);

  @media screen and (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;
export const PortfolioCardImage = styled.img`
  height: auto;
  width: 100%;
`;

export const PortfolioCardTitle = styled.h3`
  font-size: 3rem;
  margin: 2rem 0;
`;
export const PortfolioCardCategory = styled.p`
  font-size: 1.6rem;
`;
