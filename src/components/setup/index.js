import React, { useState } from "react";
import styled from "styled-components";
import Images from "./choiceImages";
import { useGlobalDataStore } from "../../state";
import { observer } from "mobx-react-lite";
import { SetName, SetupImg } from "./customComponents";
import BuyComponent from "./buyComponent";
import Complete from "./complete";
import {
  gender,
  bodyShape,
  raceType,
  colors,
  skinColor,
} from "../../constants";

// move between pages, trigger events display choices, finish
const Setup = () => {
  const [page, setPage] = useState(0);
  const changePageNext = () => {
    if (page < SetupPages.length - 1) {
      setPage(page + 1);
    }
  };
  const changePageBack = () => {
    if (page >= 1) {
      setPage(page - 1);
    }
  };

  const {
    setGender,
    setBodyShape,
    setEyeColor,
    setHairColor,
    setSkinColor,
    adjPenisSize,
    adjBreastSize,
    adjVaginaSize,
    adjAnusSize,
    adjThroatSize,
    changeSeductionProwess,
    changeGrapplingProwess,
  } = useGlobalDataStore();

  const SetupPages = [
    {
      title: "Name & Gender",
      component: <SetName />,
      selections: [
        {
          name: "Male",
          img: Images.gender.male,
          details: "Be a Male, strong grappler.",
          onSelect: () => {
            changeGrapplingProwess(15);
            setGender(gender.male);
          },
          onUnSel: () => changeGrapplingProwess(-15),
        },
        {
          name: "Female",
          img: Images.gender.female,
          details: "Be a Female",
          onSelect: () => setGender(gender.female),
        },
        {
          name: "Futanari",
          img: Images.gender.futanari,
          details: "Be a Futa",
          onSelect: () => setGender(gender.futanari),
        },
      ],
    },
    {
      title: "Set Icon & Image",
      component: <SetupImg />,
    },
    {
      title: "Body Type",
      selections: [
        {
          name: "Petite",
          img: Images.bodyShape.petite,
          details: "very small, tight frame",
          onSelect: () => {
            setBodyShape(bodyShape.petite);
            adjPenisSize(-2);
            adjBreastSize(-2);
            adjVaginaSize(-2);
            adjAnusSize(-2);
            adjThroatSize(-2);
          },
          onUnSel: () => {
            adjPenisSize(2);
            adjBreastSize(2);
            adjVaginaSize(2);
            adjAnusSize(2);
            adjThroatSize(2);
          },
        },
        {
          name: "Small",
          img: Images.bodyShape.small,
          details: "A small, youthful frame",
          onSelect: () => {
            setBodyShape(bodyShape.small);
            adjPenisSize(-1);
            adjBreastSize(-1);
            adjVaginaSize(-1);
            adjAnusSize(-1);
            adjThroatSize(-2);
            changeSeductionProwess(5);
          },
          onUnSel: () => {
            adjPenisSize(1);
            adjBreastSize(1);
            adjVaginaSize(1);
            adjAnusSize(1);
            adjThroatSize(2);
            changeSeductionProwess(-5);
          },
        },
        {
          name: "Medium",
          img: Images.bodyShape.medium,
          details: "Gentle and feminine curves",
          onSelect: () => setBodyShape(bodyShape.medium),
        },
        {
          name: "Chubby",
          img: Images.bodyShape.chubby,
          details: "A soft and plump shape",
          onSelect: () => {
            setBodyShape(bodyShape.chubby);
            adjBreastSize(2);
            adjAnusSize(1);
            adjThroatSize(1);
          },
          onUnSel: () => {
            adjBreastSize(-2);
            adjAnusSize(-1);
            adjThroatSize(-1);
          },
        },
        {
          name: "Buxom",
          img: Images.bodyShape.buxom,
          details:
            "A plump rounded figure with generous breasts, and a thicc arse to match.",
          onSelect: () => {
            setBodyShape(bodyShape.buxom);
            adjBreastSize(3);
            adjAnusSize(2);
            adjVaginaSize(1);
            adjThroatSize(1);
          },
          onUnSel: () => {
            adjBreastSize(-3);
            adjAnusSize(-2);
            adjVaginaSize(-1);
            adjThroatSize(-1);
          },
        },
        {
          name: "Muscular",
          img: Images.bodyShape.muscular,
          details: "Powerful and strong figure",
          onSelect: () => {
            setBodyShape(bodyShape.muscular);
            changeGrapplingProwess(20);
            adjPenisSize(1);
            adjBreastSize(1);
            adjVaginaSize(1);
            adjAnusSize(1);
          },
          onUnSel: () => {
            changeGrapplingProwess(-20);
            adjPenisSize(-1);
            adjBreastSize(-1);
            adjVaginaSize(-1);
            adjAnusSize(-1);
          },
        },
      ],
    },
    {
      title: "Eye Color",
      selections: colors.map((col) => ({
        name: col,
        onSelect: () => setEyeColor(col),
      })),
    },
    {
      title: "Hair Color",
      selections: colors.map((col) => ({
        name: col,
        onSelect: () => setHairColor(col),
      })),
    },
    {
      title: "Skin Color",
      selections: skinColor.map((col) => ({
        name: col,
        onSelect: () => setSkinColor(col),
      })),
    },
    { title: "Buy Skills", component: <BuyComponent /> },
    { title: "Create Character", component: <Complete /> },
  ];

  return (
    <Wrapper>
      <h3>Build your Character</h3>
      <Selections
        {...SetupPages[page]}
        back={changePageBack}
        forward={changePageNext}
        page={page}
        lastPage={SetupPages.length}
      />
    </Wrapper>
  );
};

const Selections = observer(
  ({ title, component, selections, back, forward, page, lastPage }) => {
    const { selectionArr, updateSelectionArr } = useGlobalDataStore();
    const [newPage, setNewPage] = useState(true);
    if (newPage && selections && selectionArr[page] === false) {
      updateSelectionArr(page, 0);
      selections[0].onSelect();
      setNewPage(false);
    }

    return (
      <>
        <SelectionBox>
          <Title>{title}</Title>
          {component}
          {selections && (
            <SelectionsWrapper>
              {selections.map((selection, index) => {
                const selectedIndex = selectionArr[page];

                const OnPress = () => {
                  // option select logic
                  if (index !== selectedIndex) {
                    selectedIndex !== false &&
                      selections[selectedIndex].hasOwnProperty("onUnSel") &&
                      selections[selectedIndex].onUnSel();

                    updateSelectionArr(page, index);
                    selection.onSelect();
                  } else {
                    selections[selectedIndex].onUnSel &&
                      selections[selectedIndex].onUnSel();

                    updateSelectionArr(page, false);
                  }
                };

                return (
                  <SelectBox
                    selected={index === selectedIndex}
                    onClick={OnPress}
                    key={selection.name}
                  >
                    {selection.img && (
                      <SelectionImg alt="img" src={selection.img} />
                    )}
                    <h5>{selection.name}</h5>
                    <SelectionText>{selection.details}</SelectionText>
                  </SelectBox>
                );
              })}
            </SelectionsWrapper>
          )}
        </SelectionBox>
        <BtnWrapper>
          {page !== 0 && <PageBtn onClick={back}>{"<"}</PageBtn>}
          <div>.</div>
          {page !== lastPage - 1 && <PageBtn onClick={forward}>{">"}</PageBtn>}
        </BtnWrapper>
      </>
    );
  }
);

const Wrapper = styled.div`
  height: calc(100% - 64px);
  background: transparent;
  margin: 32px;
`;
const SelectionBox = styled.div`
  color: black;
`;
const Title = styled.h3`
  text-decoration: underline;
`;
const SelectionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const SelectBox = styled.div`
  padding: 16px;
  border: 3px solid ${({ selected }) => (selected ? "orange" : "black")};
  border-radius: 8px;
  margin: 16px;
  cursor: pointer;
`;
const SelectionImg = styled.img`
  height: 320px;
`;
const SelectionText = styled.div`
  max-width: 220px;
`;
const BtnWrapper = styled.div`
  margin: 32px;
  display: flex;
  justify-content: space-between;
`;
const PageBtn = styled.button`
  border: 2px solid grey;
  background: rgba(124, 124, 124, 0.6);
  color: white;
  font-size: 28px;
  padding: 2px 10px;
  border-radius: 4px;
  cursor: pointer;
`;

export default Setup;
