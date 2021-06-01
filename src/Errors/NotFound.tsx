import React from "react";
import styled from "styled-components";
import { ButtonLink } from "../shared/Buttons";

const Wrapper = styled.div`
  margin-top: 80px;
  min-height: calc(100vh - 188px);
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageTitle = styled.h1`
  text-align: center;
  font-size: 10rem;
  color: var(--primary-purple);
`;

const ButtonStyle = {
  background: "var(--primary-purple)",
  color: "#fff",
  fontSize: "1.8rem",
};

const NotFound = () => {
  return (
    <Wrapper>
      <PageTitle>404 Page Not Found</PageTitle>
      <ButtonLink to="/" style={ButtonStyle}>
        Return to home page
      </ButtonLink>
    </Wrapper>
  );
};

export default NotFound;
