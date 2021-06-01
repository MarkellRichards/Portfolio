import React from "react";
import styled from "styled-components";
import SectionTitle from "../../shared/SectionTitle";
import { servicesData } from "../../Data/Copywrite";

const ServicesSection = styled.section`
  padding: 6rem 0;
  background-color: var(--primary-purple);
`;

const ServicesContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: none;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  padding: 3rem 3rem;
  column-gap: 4rem;
  row-gap: 4rem;
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

const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 450px;
  max-width: 400px;
  color: #fff;
  overflow: none;
`;
const ServicesCardImage = styled.img`
  height: 300px;
  /* margin: 0 auto; */
  width: auto;
  max-width: 100%;
  border-radius: 20px;

  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
`;

const ServicesCardTitle = styled.h3`
  font-size: 2.4rem;
  text-align: center;
  margin: 2rem 0;
`;
const ServicesCardDescription = styled.p`
  font-size: 1.6rem;
  text-align: center;
`;

const SectionTitleStyle = {
  color: "#fff",
};

const Services = () => {
  return (
    <>
      <ServicesSection id="services">
        <SectionTitle style={SectionTitleStyle}>Services</SectionTitle>
        <ServicesContainer>
          <ServicesGrid>
            {servicesData.map((service) => (
              <ServicesCard key={service.id}>
                <ServicesCardImage src={service.src} alt={service.alt} />
                <ServicesCardTitle>{service.title}</ServicesCardTitle>
                <ServicesCardDescription>
                  {service.summary}
                </ServicesCardDescription>
              </ServicesCard>
            ))}
          </ServicesGrid>
        </ServicesContainer>
      </ServicesSection>
    </>
  );
};

export default Services;
