import React from "react";
import styled from "styled-components";

interface FilterProps {
  active: boolean;
}

interface Props {
  filterItem: Array<string>;
  filter: (category: string) => void;
  selected: string;
}
const FilterItemMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;

const FilterItem = styled.li<FilterProps>`
  border-bottom: ${(props) =>
    props.active ? "2px solid orange" : "2px solid transparent"};
  color: var(--primary-purple);
  cursor: pointer;
  list-style: none;
  margin-right: 2rem;
  font-size: 3.6rem;
  transition: 0.4 ease-in-out;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 400px) {
    font-size: 3rem;
  }
`;

const FilteringMenu = ({ filterItem, filter, selected }: Props) => {
  return (
    <FilterItemMenu>
      {filterItem.map((category, index) => {
        return (
          <FilterItem
            key={index}
            onClick={() => filter(category)}
            active={selected === category}
          >
            {category}
          </FilterItem>
        );
      })}
    </FilterItemMenu>
  );
};

export default FilteringMenu;
