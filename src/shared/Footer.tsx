import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

const FooterWrapper = styled.div`
  width: 100%;
  background-color: var(--primary-purple);
  min-height: 108px;
  height: auto;
  padding: 3rem 3rem;
  overflow-y: hidden;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  align-content: center;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  align-items: center;
  color: #fff;
  @media screen and (max-width: 992px) {
    text-align: center;
    padding: 2rem;
  }
`;

const FooterContentText = styled.p`
  font-size: 1.4rem;
  width: 100%;
`;

const FooterList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

const FooterListItem = styled.li`
  padding: 0 0.5rem;
  border-right: 1px solid #fff;
  &:last-child {
    border-right: none;
  }

  @media screen and (max-width: 400px) {
    border-right: none;
    border-bottom: 1px solid #fff;
    &:last-child {
      border-bottom: none;
    }
    padding: 1rem 0;
  }
`;

const FooterListLink = styled(LinkR)`
  text-decoration: none;
  font-size: 1.4rem;
  color: #fff;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContentContainer>
          <FooterContentText>Your personal web developer</FooterContentText>
          <FooterContentText>
            markell.b.richards@gmail.com &#8226; 801.928.6913
          </FooterContentText>
          <FooterContentText>Nashville, TN</FooterContentText>
        </FooterContentContainer>
        <FooterContentContainer>
          <FooterContentText style={{ textAlign: "center" }}>
            &copy; 2021 Markell Richards. All Rights Reserved
          </FooterContentText>
        </FooterContentContainer>
        <FooterContentContainer>
          <FooterList>
            <FooterListItem>
              <FooterListLink to="/portfolio">Portfolio </FooterListLink>
            </FooterListItem>
            <FooterListItem>
              <FooterListLink to="/#services">Services</FooterListLink>
            </FooterListItem>
            <FooterListItem>
              <FooterListLink to="/#process">Process</FooterListLink>
            </FooterListItem>
            <FooterListItem>
              <FooterListLink to="/#pricing">Pricing</FooterListLink>
            </FooterListItem>
            <FooterListItem>
              <FooterListLink to="/about">About</FooterListLink>
            </FooterListItem>
            <FooterListItem>
              <FooterListLink to="/contact">Contact</FooterListLink>
            </FooterListItem>
          </FooterList>
        </FooterContentContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
