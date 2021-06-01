import React, { useState } from "react";
import { Project, projectData } from "../../Data/Copywrite";
import { Link } from "react-router-dom";

import SectionTitle from "../../shared/SectionTitle";
import FilteringMenu from "./FilteringMenu";
import {
  PortfolioCard,
  PortfolioCardCategory,
  PortfolioCardImage,
  PortfolioCardTitle,
  PortfolioContainer,
  PortfolioGrid,
  PortfolioSectionWrapper,
} from "./Portfolio";

const SectionTitleStyle = {
  color: "var(--primary-purple)",
  marginBottom: "4rem",
};

const allCategories = [
  "All",
  ...new Set(projectData.map((project) => project.category)),
]; //copy all category options into array

const PortfolioSection = () => {
  const [portfolioItem, setPortfolioItem] =
    useState<Array<Project>>(projectData);
  const [filterItem] = useState(allCategories);
  const [selected, setSelected] = useState("");

  const filter = (filter: string) => {
    if (filter === "All") {
      setPortfolioItem(projectData);
      setSelected("");
      return;
    }

    const filteteredData = projectData.filter(
      (portfolio) => portfolio.category === filter
    );

    setSelected(filter);
    setPortfolioItem(filteteredData);
  };

  return (
    <>
      <PortfolioSectionWrapper>
        <SectionTitle style={SectionTitleStyle}>Portfolio</SectionTitle>
        <FilteringMenu
          selected={selected}
          filterItem={filterItem}
          filter={filter}
        />
        <PortfolioContainer>
          <PortfolioGrid>
            {portfolioItem.map((project: Project) => (
              <PortfolioCard key={project.id}>
                <Link to={`/portfolio/${project.id}`}>
                  <PortfolioCardImage src={project.src} alt={project.alt} />
                </Link>
                <PortfolioCardTitle>{project.title}</PortfolioCardTitle>
                <PortfolioCardCategory>
                  {project.category}
                </PortfolioCardCategory>
              </PortfolioCard>
            ))}
          </PortfolioGrid>
        </PortfolioContainer>
      </PortfolioSectionWrapper>
    </>
  );
};

export default PortfolioSection;
