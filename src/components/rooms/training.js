import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import { observer } from "mobx-react-lite";
import { TestStatTrain } from "../../utils/maths";

import Modal from "../modal";
import GoBack from "../back";
import { LgTitle, SmText, SmlrText } from "../text";
import gym from "../../assets/room/gym.jpg";
import TrainingOptions, { ResistanceTraining } from "./data/training";

const Strings = {
  title: "Slut Training",
  explain:
    "Players work their muscles and sex organs here to prepare themselves for battle.",
  modalTitle: "Training Complete",
};

const TrainingGym = () => {
  const [modalOpen, setModal] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [modalIsFail, setModalIsFail] = useState(false);

  const HideModal = () => {
    setModal(false);
    setModalMsg("");
    setModalIsFail(false);
  };
  const OnTry = (isSuccess, skillText) => {
    setModal(true);
    setModalMsg(
      `Your training in ${skillText} has ${
        isSuccess ? "suceeded" : "failed, good luck next time"
      }.`
    );
    setModalIsFail(!isSuccess);
  };

  return (
    <UWrap>
      {modalOpen && (
        <Modal title={Strings.modalTitle} onHide={HideModal}>
          {modalIsFail ? (
            <TrainFailtxt>{modalMsg}</TrainFailtxt>
          ) : (
            <SmText>{modalMsg}</SmText>
          )}
        </Modal>
      )}
      <FlexWrap>
        <LgTitle>{Strings.title}</LgTitle>
        <GoBack />
      </FlexWrap>
      <MainBox>
        <ExplainBox>
          <SmText>{Strings.explain}</SmText>
        </ExplainBox>
        <TrainingOptWrap>
          {TrainingOptions.map((option) => (
            <TrainingActionItem {...option} onTry={OnTry} />
          ))}
          {ResistanceTraining.map((resOption) => (
            <TrainingActionItem {...resOption} onTry={OnTry} resistance />
          ))}
        </TrainingOptWrap>
      </MainBox>
      <FlexWrap>
        <SmText>{Strings.title}</SmText>
        <GoBack />
      </FlexWrap>
    </UWrap>
  );
};

const TrainingActionItem = observer(
  ({
    name,
    description,
    skill,
    onSkillUp,
    cost,
    power,
    reqFemale,
    reqCock,
    onTry,
    resistance,
    upgrade,
    upgradePower,
  }) => {
    const {
      isWoman,
      gender,
      cash,
      changeCash,
      saveChar,
      boughtItems,
      ...CharData
    } = useGlobalDataStore();

    const upgraded = boughtItems.includes(upgrade);
    const onSelect = () => {
      if (cost <= cash) {
        changeCash(-1 * cost);
        //check training
        const effectPower = upgraded ? upgradePower : power;
        const trainResult = TestStatTrain(CharData[skill], effectPower);
        trainResult && CharData[onSkillUp](1);
        onTry(trainResult, name);
        saveChar();
      } else {
        window.alert("You can afford this.");
      }
    };
    const visible = () => {
      if (reqFemale && !isWoman) return false;
      if (reqCock && gender === "female") return false;
      return true;
    };

    return (
      visible() && (
        <TrainingOpt onClick={onSelect} resistance={resistance}>
          <SmText>- {name} -</SmText>
          <SmlrText>{description}</SmlrText>
          <SmText>
            Power Lvl :: {upgraded ? upgradePower : power}
            {upgraded && " - Upg"}
          </SmText>
          <SmText>Training Cost ${cost}</SmText>
        </TrainingOpt>
      )
    );
  }
);

const UWrap = styled.div`
  margin: 32px;
  overflow-y: auto;
`;
const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;
const MainBox = styled.div`
  padding: 32px;
  background-image: url(${gym});
  background-size: cover;
`;
const ExplainBox = styled.div`
  line-height: 1.6;
  border: 2px solid black;
  background: rgba(120, 120, 120, 0.7);
  padding: 16px;
  margin-bottom: 32px;
  color: lightgrey;
`;
const TrainingOptWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const TrainingOpt = styled.div`
  flex: 0 0 240px;
  margin: 8px 12px;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid black;
  color: white;
  background: ${({ resistance }) =>
    resistance ? `rgba(157,2,2, 0.8)` : `rgba(20, 20, 20,0.8)`};
  cursor: pointer;

  &:hover {
    border: 2px solid orange;
  }
`;
const TrainFailtxt = styled.span`
  color: darkred;
`;

export default TrainingGym;
