import React from "react";
import { Project } from "../../Data/Copywrite";
import SectionTitle from "../../shared/SectionTitle";
import { AnchorLink } from "../../shared/Buttons";
import {
  ProjectWrapper,
  ButtonContainer,
  ProjectContainer,
  ProjectContent,
  ProjectContentText,
  ProjectContentTitle,
  ProjectGrid,
  ProjectImage,
  TechList,
  TechListItem,
  LeftContainer,
} from "./ProjectInfoElements";
import NotFound from "../../Errors/NotFound";

interface Props {
  project: Project;
}

const SectionTitleStyle = {
  color: "var(--primary-purple)",
};

const ButtonStyle = {
  fontSize: "1.6rem",
  background: "var(--primary-purple)",
  color: "#fff",

  marginRight: "2rem",
};

const ProjectInfo = ({ project }: Props) => {
  if (!project) return <NotFound />;

  return (
    <>
      <ProjectWrapper>
        <ProjectContainer>
          <SectionTitle style={SectionTitleStyle}>{project.title}</SectionTitle>
          <ProjectGrid>
            <LeftContainer>
              <ProjectImage src={project.src} alt={project.alt} />
              <ButtonContainer>
                {project.site && (
                  <AnchorLink
                    style={ButtonStyle}
                    href={project.site}
                    target="_blank"
                  >
                    Visit Site
                  </AnchorLink>
                )}
                <AnchorLink
                  style={ButtonStyle}
                  href={project.github}
                  target="_blank"
                >
                  Visit Github Repo
                </AnchorLink>
              </ButtonContainer>
            </LeftContainer>
            <ProjectContent>
              <ProjectContentTitle>Description</ProjectContentTitle>
              <ProjectContentText>{project.description}</ProjectContentText>
              <ProjectContentTitle>My Role</ProjectContentTitle>
              <ProjectContentText>{project.role}</ProjectContentText>
              {project.challenges && (
                <>
                  <ProjectContentTitle>Challenges</ProjectContentTitle>
                  <ProjectContentText>{project.challenges}</ProjectContentText>
                </>
              )}

              {project.solution && (
                <>
                  <ProjectContentTitle>My Solution</ProjectContentTitle>
                  <ProjectContentText>{project.solution}</ProjectContentText>
                </>
              )}
              <ProjectContentTitle>Technologies Used</ProjectContentTitle>
              <TechList>
                {project.technology.map((tech) => (
                  <TechListItem key={tech}>{tech}</TechListItem>
                ))}
              </TechList>
            </ProjectContent>
          </ProjectGrid>
        </ProjectContainer>
      </ProjectWrapper>
    </>
  );
};

export default ProjectInfo;
