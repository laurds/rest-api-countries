import styled from "styled-components";
import { white, darkBlue, darkGray, veryLightGray } from "./color";

export const StartPage = styled.div`
  padding: 0 clamp(1rem, 6vw, 4rem) 1.7rem;
`;

export const UserInputFields = styled.div`
  margin: 1.5rem 0;

  select {
    height: 40px;
    padding: 0 1rem;
    border-radius: 5px;
    border: none;
    outline: none;
    background: ${(props) => (props.theme === "light" ? white : darkBlue)};
    color: ${(props) => props.theme === "dark" && veryLightGray};
    box-shadow: 0 0 10px
      ${(props) =>
        props.theme === "light" ? "hsl(0,0%,90%)" : "hsl(207, 26%, 13%)"};
  }

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 2.5rem 0;
  }
`;

export const SearchInput = styled.div`
  height: 40px;
  width: auto;
  margin-bottom: 2rem;
  padding: 0 1rem;
  background: ${(props) => (props.theme === "light" ? white : darkBlue)};
  box-shadow: 0 0 10px
    ${(props) =>
      props.theme === "light" ? "hsl(0,0%,90%)" : "hsl(207, 26%, 13%)"};
  border-radius: 5px;

  display: flex;
  align-items: center;

  svg {
    color: ${(props) => props.theme === "light" && darkGray};
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    margin-left: 10px;
    background: ${(props) => (props.theme === "light" ? white : darkBlue)};
    color: ${(props) => props.theme === "dark" && veryLightGray};

    &::placeholder {
      color: ${(props) => props.theme === "dark" && veryLightGray};
    }
  }

  @media (min-width: 700px) {
    min-width: 400px;
    margin-bottom: 0;
  }
`;

export const CardContainer = styled.div`
  width: 100%;

  display: grid;
  row-gap: 3rem;
  justify-content: center;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, auto);
    column-gap: 3rem;
  }

  @media (min-width: 1024px) {
    column-gap: 3.3rem;
    grid-template-columns: repeat(3, auto);
  }
  @media (min-width: 1440px) {
    grid-gap: 4rem;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  }
`;
