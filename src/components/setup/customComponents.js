import React, { useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { useGlobalDataStore } from "../../state";
import ImportCharacter from "../importChar";
import Presets from "./presets";
import Palette from "../../constants/palette";

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
  const [presetSet, setPreset] = useState(false);
  const { setImage, setSmIcon, img, icon, gender } = useGlobalDataStore();

  const onUploadImage = () => {
    getFile(imgId, setImage);
    setPreset(false);
  };
  const onUploadIcon = () => {
    getFile(iconId, setSmIcon);
    setPreset(false);
  };
  const selectPreset = (index) => {
    setPreset(index);
    setImage(Presets[gender][index].img);
    setSmIcon(Presets[gender][index].icon);
  };

  return (
    <>
      <InputFlexWrap>
        Presets:
        {Presets[gender] &&
          Presets[gender].map((option, index) => (
            <PresetImg
              onClick={() => selectPreset(index)}
              src={option.icon}
              alt={"preset" + index}
              selected={index === presetSet}
            />
          ))}
      </InputFlexWrap>
      <InputFlexWrap>
        <StyledLabel>Large Character Image:</StyledLabel>
        <StyledInput type="file" id={imgId} />
        <NameButton onClick={onUploadImage}>Accept</NameButton>
      </InputFlexWrap>
      <InfoText>
        {
          "Upload a large image for your Character, portrait is the best choice, also .png`s can have a transparent background, GIMP is a good free option for removing an image`s background"
        }
      </InfoText>
      <InputFlexWrap>
        <StyledLabel>Small Character Icon:</StyledLabel>
        <StyledInput type="file" id={iconId} />
        <NameButton onClick={onUploadIcon}>Accept</NameButton>
      </InputFlexWrap>
      <InfoText>
        {
          "Upload a small icon for your Character, stick to around 120x120px & square."
        }
      </InfoText>
      <InputFlexWrap>Applied Images:</InputFlexWrap>
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
      <InputFlexWrap>
        Ensure images are applied by hitting 'Accept', if it worked you'll see
        them above.
      </InputFlexWrap>
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
const PresetImg = styled.img`
  max-height: 100px;
  margin: 0 32px;
  cursor: pointer;
  border: 2px solid ${(p) => (p.selected ? Palette.dark : "transparent")};
  border-radius: 3px;

  &:hover {
    opacity: 0.8;
  }
`;
