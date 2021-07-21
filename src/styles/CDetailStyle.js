import styled from "styled-components";
import { white, darkBlue, darkGray, veryLightGray } from "./color";

export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.5rem 1.4rem;
  border-radius: 3px;
  margin: 0.5rem 10px 0 0;
  background: ${(p) => (p.theme === "light" ? white : darkBlue)};
  color: ${(props) => props.theme === "dark" && veryLightGray};
  box-shadow: 0 0 5px
    ${(props) => (props.theme === "light" ? darkGray : "hsl(207, 26%, 13%)")};
`;

export const BackButton = styled(Button)`
  width: 110px;
  display: flex;
  padding: 0.5rem 1.6rem;
  align-items: center;
  justify-content: space-between;
`;
export const CountryFlag = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  @media (min-width: 650px) {
    width: 80%;
    height: 300px;
  }
  @media (min-width: 1024px) {
    width: 40%;
    height: 350px;
  }
  @media (min-width: 1440px) {
    height: 400px;
  }
`;

export const CContent = styled.div`
  @media (min-width: 1024px) {
    width: 55%;
    h2 {
      margin-bottom: 0;
    }
    section {
      display: flex;
      justify-content: space-between;
    }
  }
  @media (min-width: 1440px) {
    width: 50%;
    section {
      width: 80%;
    }
  }
`;

export const CountryDetail = styled.div`
  margin: 3.5rem 0;
  h2 {
    font-size: 1.5rem;
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const CSection = styled.div`
  margin-top: 2rem;
  max-width: 50%;
  p {
    font-size: 14px;
  }
`;
