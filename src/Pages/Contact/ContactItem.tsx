import React from "react";
import styled from "styled-components";

interface Props {
  icon: JSX.Element;
  title: string;
  contact: string;
}

const ContactItemStyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--primary-purple);
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const LeftContent = styled.div`
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  svg {
    font-size: 4rem;
    color: #fff;
  }
`;

const RightContent = styled.div``;

const RightContentTitle = styled.h6`
  color: #fff;
  font-size: 2rem;
  padding-bottom: 0.6rem;
`;

const RightContentText = styled.p`
  padding: 0.2rem 0;
  font-size: 1.6rem;
  color: #fff;
`;

const ContactItem = ({ icon, title, contact }: Props) => {
  return (
    <ContactItemStyled>
      <LeftContent>{icon}</LeftContent>
      <RightContent>
        <RightContentTitle>{title}</RightContentTitle>
        <RightContentText>{contact}</RightContentText>
      </RightContent>
    </ContactItemStyled>
  );
};

export default ContactItem;
