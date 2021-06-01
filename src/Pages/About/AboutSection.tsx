import React from "react";
import styled from "styled-components";
import { AnchorLink, ButtonLink } from "../../shared/Buttons";
import SectionTitle from "../../shared/SectionTitle";

const AboutSectionWrapper = styled.div`
  margin-top: 80px;
  min-height: calc(100vh - 188px);
  height: auto;
`;

const AboutSectionContainer = styled.div`
  padding: 6rem 3rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const AboutSectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;

  padding: 3rem 0;

  @media only screen and (max-width: 978px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const AboutSectionImage = styled.img`
  width: auto;
  height: 400px;
  max-width: 100%;
  padding: 0 3rem;
  @media only screen and (max-width: 978px) {
    margin-bottom: 3rem;
  }
  @media only screen and (max-width: 400px) {
    margin-bottom: 3rem;
    padding: 0;
  }
`;

const AboutSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  max-width: 100%;
`;

const AboutSectionContentTitle = styled.h3`
  color: var(--primary-purple);
  margin-bottom: 2rem;
  font-size: 3rem;
`;

const AboutSectionContentText = styled.p`
  font-size: 1.6rem;
  padding-bottom: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const SectionTitleStyle = {
  color: "var(--primary-purple)",
};

const ButtonStyle = {
  fontSize: "1.6rem",
  background: "var(--primary-purple)",
  color: "#fff",
  marginRight: "2rem",
};

const AboutSection = () => {
  return (
    <>
      <AboutSectionWrapper>
        <AboutSectionContainer>
          <SectionTitle style={SectionTitleStyle}>About Me</SectionTitle>
          <AboutSectionGrid>
            <AboutSectionImage
              src={
                "https://res.cloudinary.com/divqhnxeq/image/upload/v1622577991/Portfolio%20Images/family_kjt0w8.jpg"
              }
              alt="picture of family"
            />
            <AboutSectionContent>
              <AboutSectionContentTitle>
                Hi, I'm Markell Richards!
              </AboutSectionContentTitle>
              <AboutSectionContentText>
                A few years ago while working on my Bachelor's I found my
                passion for programming, particularly in Web and Mobile
                development. I fell in love with the challenge, overcoming it,
                and seeing the end result. In my free time, I enjoy watching
                anime, working out, programming, and spending time with my wife
                and two daughters.
              </AboutSectionContentText>
              <AboutSectionContentText>
                Throughout my journey, I have had opportunities to grow as a
                developer by attending a full-stack developer bootcamp,
                utilizing my STEM education, and working on various projects.
              </AboutSectionContentText>
              <ButtonContainer>
                <ButtonLink to="/contact" style={ButtonStyle}>
                  Hire Me
                </ButtonLink>
                <AnchorLink
                  href="/assets/files/Resume.pdf"
                  type="application/pdf"
                  target="_blank"
                  style={ButtonStyle}
                >
                  Download Resume
                </AnchorLink>
              </ButtonContainer>
            </AboutSectionContent>
          </AboutSectionGrid>
        </AboutSectionContainer>
      </AboutSectionWrapper>
    </>
  );
};

export default AboutSection;
