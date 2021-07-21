import styled from "styled-components";
import { white, darkBlue } from "./color";

export const Card = styled.div`
  height: 330px;
  width: 270px;
  cursor: pointer;
  border-radius: 5px;

  background: ${(props) => (props.theme === "light" ? white : darkBlue)};
  box-shadow: 0 0 10px
    ${(props) =>
      props.theme === "light" ? "hsl(0,0%,90%)" : "hsl(207, 26%, 13%)"};
`;

export const CardImage = styled.div`
  img {
    height: 150px;
    width: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  h4 {
    margin-top: 0;
    font-size: 18px;
  }
  div {
    margin-top: 5px;
    font-size: 14px;
    display: flex;
    align-items: center;
    p {
      margin: 0;
      font-weight: 600;
    }
  }
`;
