import React from "react";
import styled from "styled-components";
import { MdTitle } from "../text";
import Palette from "../../constants/palette";

const Modal = ({ children, title, onHide }) => {
  const stopBubbling = evt => {
    evt.stopPropagation();
    evt.cancelBubble = true;
  };

  return (
    <BgWrapper onClick={onHide}>
      <ModalBox onClick={stopBubbling}>
        <HeaderText>{title}</HeaderText>
        <Delineator />
        {children}
      </ModalBox>
    </BgWrapper>
  );
};

const BgWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  min-height: 280px;
  padding: calc(0.5rem + 1.5vw);
  background: rgba(182, 182, 182, 0.4);
  text-align: centre;
  z-index: 100;
`;
const ModalBox = styled.div`
  border: 2px solid ${Palette.darker};
  margin: calc(1rem + 2vw) auto 0;
  background: linear-gradient(
    to bottom,
    ${Palette.midTransparent},
    ${Palette.lightTransparent}
  );
  padding: calc(1rem + 1.5vw);
  max-width: 560px;
  border-radius: 12px;
`;

const HeaderText = styled(MdTitle)`
  margin-bottom: calc(1rem + 1.5vw);
`;
const Delineator = styled.div`
  background: ${Palette.dark};
  height: 1px;
  margin: calc(0.5rem + 0.6vw) 0;
`;

export default Modal;
