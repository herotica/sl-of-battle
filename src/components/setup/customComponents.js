import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import { observer } from "mobx-react-lite";
import ImportCharacter from "../importChar";

export const SetName = () => {
  const [nameInput, setInput] = useState("");
  const changeName = (evt) => setInput(evt.target.value);
  const { setName } = useGlobalDataStore();
  const updateName = () => {
    setName(nameInput);
    window.alert(`Name set to: ${nameInput}`);
  };

  return (
    <>
      <ImportCharacter />
      <FlexWrapper>
        <StyledLabel>Name:</StyledLabel>
        <StyledInput onChange={changeName} />
        <NameButton onClick={updateName}>Accept</NameButton>
      </FlexWrapper>
    </>
  );
};

const imgId = "uploadImgInput";
const iconId = "uploadIconInput";

export const SetupImg = observer(() => {
  const { setImage, setSmIcon, img, icon } = useGlobalDataStore();

  const onUploadImage = () => {
    getFile(imgId, setImage);
  };
  const onUploadIcon = () => {
    getFile(iconId, setSmIcon);
  };

  return (
    <>
      <InputFlexWrap>
        icons
        <StyledLabel>Character Image:</StyledLabel>
        <StyledInput type="file" id={imgId} />
        <NameButton onClick={onUploadImage}>Accept</NameButton>
      </InputFlexWrap>
      <InfoText>
        {
          "Upload a large image for your Character, portrait is the best choice, also .png`s can have a transparent background, GIMP is a good free option for removing an image`s background"
        }
      </InfoText>
      <InputFlexWrap>
        icons
        <StyledLabel>Character Icon:</StyledLabel>
        <StyledInput type="file" id={iconId} />
        <NameButton onClick={onUploadIcon}>Accept</NameButton>
      </InputFlexWrap>
      <InfoText>
        {
          "Upload a small icon for your Character, stick to around 120x120px & square."
        }
      </InfoText>
      <FlexImgDisplay>
        <div>
          <InfoText>Icon</InfoText>
          <ShowImg src={icon} alt="uploaded icon" />
        </div>
        <div>
          <InfoText>Large Image</InfoText>
          <ShowImg src={img} alt="uploaded img" />
        </div>
      </FlexImgDisplay>
    </>
  );
});

export const getFile = (importElementID, onFileLoad) => {
  var files = document.getElementById(importElementID).files;
  if (files.length <= 0) {
    return false;
  }
  console.warn("imported file:", files);

  var fr = new FileReader();

  fr.onload = function (e) {
    onFileLoad(e.target.result);
  };

  fr.readAsDataURL(files.item(0));
};

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const InputFlexWrap = styled(FlexWrapper)`
  margin: 40px 0 8px;
`;
const FlexImgDisplay = styled(FlexWrapper)`
  justify-content: space-around;
`;
const StyledLabel = styled.label`
  padding: 4px;
  margin-right: 8px;
`;
const StyledInput = styled.input`
  flex-grow: 1;
  padding: 8px 16px;
`;
const NameButton = styled.button`
  border: 1px solid black;
  padding: 8px 16px;
`;
const InfoText = styled.div`
  padding: 8px 32px;
`;
const ShowImg = styled.img`
  max-height: 320px;
`;
