import React, { useState } from "react";
import styled from "styled-components";
import { ButtonLink } from "../../shared/Buttons";
import SectionTitle from "../../shared/SectionTitle";
import { Project, projectData } from "../../Data/Copywrite";
import { Link } from "react-router-dom";

const ProjectSection = styled.section`
  padding: 6rem 0;
`;

const ProjectContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  padding: 3rem 0;
  column-gap: 4rem;
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

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 400px;
  color: var(--primary-purple);
  @media screen and (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;
const ProjectCardImage = styled.img`
  height: auto;
  width: 100%;
`;

const ProjectCardTitle = styled.h3`
  font-size: 3rem;
  margin: 2rem 0;
`;
const ProjectCardCategory = styled.p`
  font-size: 1.6rem;
`;

const ProjectButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonStyle = {
  background: "var(--primary-purple)",
  fontSize: "1.6rem",
};

const SectionTitleStyle = {
  color: "var(--primary-purple)",
};

const Projects = () => {
  const [portfolioItem] = useState<Array<Project>>(projectData.slice(0, 3));

  return (
    <>
      <ProjectSection id="projects">
        <SectionTitle style={SectionTitleStyle}>Latest Projects</SectionTitle>
        <ProjectContainer>
          <ProjectGrid>
            {portfolioItem.map((project: Project) => (
              <ProjectCard key={project.id}>
                <Link to={`/portfolio/${project.id}`}>
                  <ProjectCardImage src={project.src} alt={project.alt} />
                </Link>
                <ProjectCardTitle>{project.title}</ProjectCardTitle>
                <ProjectCardCategory>{project.category}</ProjectCardCategory>
              </ProjectCard>
            ))}
          </ProjectGrid>
          <ProjectButtonContainer>
            <ButtonLink to="/portfolio" style={ButtonStyle}>
              View all projects
            </ButtonLink>
          </ProjectButtonContainer>
        </ProjectContainer>
      </ProjectSection>
    </>
  );
};

export default Projects;
