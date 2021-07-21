import styled from "styled-components";
import { white, darkBlue } from "./color";

export const Headpiece = styled.div`
  background-color: ${(props) => (props.theme === "light" ? white : darkBlue)};
  height: 80px;
  padding: 0 clamp(1rem, 6vw, 4rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 6px -8px ${(props) => (props.theme === "light" ? "hsl(0,0%,90%)" : "hsl(207, 26%, 13%)")};
`;

export const ColorMode = styled.div`
  min-width: 95px;
  width: 20%;
  max-width: 130px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  opacity: 0.8;
  svg {
    transform: rotate(-45deg) scale(-1);
  }
  h4 {
    cursor: pointer;
  }
`;
