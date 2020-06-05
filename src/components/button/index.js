import styled from "styled-components";
import { SmTextCSS } from "../text";
import Palette from "../../constants/palette";

const Button = styled.button`
  cursor: pointer;
  outline: none;
  padding: 8px 16px;
  ${SmTextCSS}
  border: 2px solid ${Palette.darker};
  border-radius: 10px;

  background: ${Palette.mid};
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${Palette.dark};
  }
`;

export default Button;
