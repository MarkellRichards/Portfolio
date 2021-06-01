import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const AnchorLink = styled.a`
  text-decoration: none;
  outline: none;
  margin-top: 1.6rem;
  padding: 1.2rem 2.4rem;
  border-radius: 7.5px;
  cursor: pointer;
  border: none;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  color: #fff;
  align-items: center;
  width: fit-content;
  /* box-shadow: 5px 5px 10px  rgba(255, 255, 255, 0.2); */
  transition: 0.2s ease-in-out;
  &:hover {
    background: #f3f3f3;
    color: #000;
    box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const ButtonLink = styled(LinkR)`
  text-decoration: none;
  outline: none;
  margin-top: 1.6rem;
  padding: 1.2rem 2.4rem;
  border-radius: 7.5px;
  cursor: pointer;
  border: none;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  color: #fff;
  align-items: center;
  width: fit-content;
  /* box-shadow: 5px 5px 10px  rgba(255, 255, 255, 0.2); */
  transition: 0.2s ease-in-out;
  &:hover {
    background: #f3f3f3;
    color: #000;
    box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const FormButton = styled.button`
  background: var(--primary-purple);
  color: #fff;
  font-size: 1.8rem;
  text-decoration: none;
  outline: none;
  margin-top: 1.6rem;
  padding: 1.2rem 2.4rem;
  border-radius: 7.5px;
  cursor: pointer;
  border: none;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;

  &:disabled {
    background-color: #333;
    color: #f3f3f3;
    cursor: not-allowed;
  }
`;
