import styled from "styled-components";

export const ProjectWrapper = styled.div`
  margin-top: 80px;
`;

export const ProjectContainer = styled.div`
  padding: 3rem 0;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5rem;
  justify-items: center;
  align-items: center;
  padding: 3rem 0;

  @media only screen and (max-width: 978px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 3rem;
`;

export const ProjectContentTitle = styled.h3`
  color: var(--primary-purple);
  margin-bottom: 1rem;
  font-size: 3rem;
`;

export const ProjectContentText = styled.p`
  font-size: 1.6rem;
  padding-bottom: 2rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectImage = styled.img`
  width: auto;
  height: 100%;
  max-width: 100%;
  padding: 0 3rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 4rem;

  @media only screen and (max-width: 978px) {
    margin-bottom: 3rem;
  }
`;

export const TechList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const TechListItem = styled.li`
  font-size: 1.6rem;
  flex: 0 0 50%;
  margin-bottom: 0.7rem;
`;
