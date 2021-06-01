import React from "react";
import { pricingData } from "../../../Data/Copywrite";
import { ButtonLink } from "../../../shared/Buttons";
import SectionTitle from "../../../shared/SectionTitle";
import {
  PricingButtonContainer,
  PricingCard,
  PricingCardImage,
  PricingCardTitle,
  PricingContainer,
  PricingGrid,
  PricingList,
  PricingListContainer,
  PricingListItem,
  PricingParagraph,
  PricingSection,
} from "./Pricing";

const ButtonStyle = {
  background: "var(--primary-purple)",
  fontSize: "1.6rem",
};
const SectionTitleStyle = {
  color: "var(--primary-purple)",
};

const Pricing = () => {
  return (
    <>
      <PricingSection id="pricing">
        <SectionTitle style={SectionTitleStyle}>Pricing Plan</SectionTitle>

        <PricingContainer>
          <PricingParagraph>
            Ready to get that application launched? Have a few questions before
            we start? No problem! Send us an email, and we will get back to you
            within 48 hours. We are looking forward to speaking with you!
          </PricingParagraph>
          <PricingGrid>
            {pricingData.map((price) => (
              <PricingCard key={price.id}>
                <PricingCardTitle>{price.title}</PricingCardTitle>
                <PricingCardImage src={price.src} alt={price.alt} />
                <PricingListContainer>
                  <PricingList>
                    {price.features.map((feature) => (
                      <PricingListItem>{feature}</PricingListItem>
                    ))}
                  </PricingList>
                </PricingListContainer>
              </PricingCard>
            ))}
          </PricingGrid>
          <PricingButtonContainer>
            <ButtonLink to="" style={ButtonStyle}>
              Get your free consultation!
            </ButtonLink>
          </PricingButtonContainer>
        </PricingContainer>
      </PricingSection>
    </>
  );
};

export default Pricing;
