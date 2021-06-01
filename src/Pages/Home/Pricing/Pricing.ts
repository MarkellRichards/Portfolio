import styled from "styled-components";

export const PricingSection = styled.section`
  padding: 6rem 0;
`;

export const PricingContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;

  padding: 3rem 0;

  @media screen and (max-width: 1100px) {
    padding: 3rem;
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 750px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const PricingCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 520px;
  width: 100%;
  max-width: 400px;
  background: var(--primary-purple);
  color: #fff;

  &:nth-child(2) {
    background: #fff;
    height: 560px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
    color: var(--primary-purple);
    padding-top: 2rem;
  }

  @media screen and (max-width: 992px) {
    margin-bottom: 2rem;
    &:last-child() {
      margin-bottom: none;
    }

    &:nth-child(2) {
      background: #fff;
      height: 520px;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.6);
      color: var(--primary-purple);
    }
  }
`;
export const PricingCardImage = styled.img`
  height: 150px;
  width: auto;
`;

export const PricingCardTitle = styled.h3`
  font-size: 1.6rem;
  margin: 2rem 0;
`;

export const PricingButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PricingParagraph = styled.p`
  font-size: 1.6rem;
  color: var(--primary-purple);
  text-align: center;
  margin: 0 auto;
  max-width: 600px;
  width: 100%;
`;

export const PricingListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 3rem;
`;

export const PricingList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const PricingListItem = styled.li`
  font-size: 1.6rem;
  padding-bottom: 2.4rem;
  &:last-child {
    padding-bottom: 0;
  }
`;
