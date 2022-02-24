import styled from "styled-components";
import { css } from "styled-components";


const Button = styled.button`
  margin: 0 35px;
  width: 40%;
  min-width: 200px;
  height: 50px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  ${props => props.primary && css`
    background-color: hsl(231, 69%, 60%);
    color: white
  `}

  ${props => props.secondary && css`
    background-color: hsl(0, 0%, 100%);
    color: hsl(0, 0%, 0%);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  `}
`

export default Button;