import React from "react";
import styled from "styled-components";
import { ButtonLink } from "../../shared/Buttons";

const BannerWrapper = styled.section`
  display: flex;
  align-items: flex-end;
  width: 100%;
  position: relative;

  padding: 2rem 7rem 0 7rem;
  background: linear-gradient(
    90deg,
    rgba(6, 6, 59, 1) 0%,
    rgba(97, 40, 127, 1) 50%,
    rgba(254, 109, 66, 1) 100%
  );

  @media screen and (max-width: 1100px) {
    padding: 2rem 3rem 0 3rem;
  }
`;

const BannerGrid = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  width: 100%;
  margin: 0 auto;
  position: relative;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  @media screen and (max-width: 1100px) {
    padding-bottom: 4rem;
  }
`;

const BannerTitle = styled.h3`
  font-size: 3.6rem;
  color: #fff;
  margin-bottom: 2rem;
`;

const BannerParagraph = styled.p`
  font-size: 1.6rem;
  color: #fff;
`;

const BannerImage = styled.img`
  height: auto;
  width: 100%;
  align-self: flex-end;
`;

const ButtonStyle = {
  background: "var(--primary-orange)",
  fontSize: "1.6rem",
};

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerGrid>
        <BannerContent>
          <BannerTitle>
            Have a project in mind? <br /> Let's chat!
          </BannerTitle>
          <BannerParagraph>
            If you're looking to launch a website or mobile application, look no
            further! Send us an email, and we will get back to you within 48
            hours.
          </BannerParagraph>

          <ButtonLink to="/contact" style={ButtonStyle}>
            Let's Chat
          </ButtonLink>
        </BannerContent>
        <BannerImage
          src="https://res.cloudinary.com/divqhnxeq/image/upload/v1622577961/Portfolio%20Images/BannerArt_gncsrl.svg"
          alt=""
        />
      </BannerGrid>
    </BannerWrapper>
  );
};

export default Banner;
