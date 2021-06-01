import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 80px;
  min-height: calc(100vh - 188px);
  height: auto;
`;

export const Container = styled.div`
  padding: 6rem 3rem;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 400px) {
    padding: 3rem 0;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  grid-column-gap: 2rem;
  padding: 0;

  @media only screen and (max-width: 978px) {
    grid-template-columns: minmax(0, 1fr);

    .form-button {
      margin-bottom: 3rem;
    }
  }
`;

export const LeftContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
  text-align: center;
`;

export const FormField = styled.div`
  margin-top: 2rem;
  position: relative;
  width: 100%;
  font-size: inherit;
`;

export const FormLabel = styled.label`
  position: absolute;
  left: 20px;
  top: -8px;
  display: inline-block;
  color: var(--primary-purple);
  background-color: #fff;
  padding: 0 0.5rem;
  font-size: 1.6rem;
`;

export const FormInput = styled.input`
  border: 1px solid var(--form-border-color);
  outline: none;
  background: transparent;
  height: 50px;
  padding: 0 1.5rem;
  width: 100%;
`;
export const FormTextArea = styled.textarea`
  background-color: transparent;
  border: 1px solid var(--form-border-color);
  outline: none;
  color: inherit;
  width: 100%;
  padding: 0.8rem 1rem;
  resize: none;
`;

export const FormTitle = styled.h4`
  color: var(--primary-purple);
  padding: 1rem 0;
  font-size: 2rem;
`;

export const RightContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 100%;
`;
