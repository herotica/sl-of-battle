import React, { useState } from "react";
import styled from "styled-components";
import Images from "./choiceImages";
import { useGlobalDataStore } from "../../state";
import { gender, bodyShape, raceType } from "../../constants";

// move between pages, trigegr events display choices, finish
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

  const { setGender, setBodyShape, setRace } = useGlobalDataStore();
  const SetupPages = [
    {
      title: "Name & Gender",
      component: "setName",
      selections: [
        {
          name: "Male",
          img: Images.gender.male,
          details: "Be a Male",
          onSelect: () => setGender(gender.male)
        },
        {
          name: "Female",
          img: Images.gender.female,
          details: "Be a Female",
          onSelect: () => setGender(gender.female)
        },
        {
          name: "Futanari",
          img: Images.gender.futanari,
          details: "Be a Futa",
          onSelect: () => setGender(gender.futanari)
        }
      ]
    },
    {
      title: "Body Type",
      selections: [
        {
          name: "Petite",
          details: "very small, tight frame",
          onSelect: () => setBodyShape(bodyShape.petite)
        },
        {
          name: "Small",
          details: "A small youthful frame",
          onSelect: () => setBodyShape(bodyShape.small)
        },
        {
          name: "Medium",
          details: "Gentle and feminine curves",
          onSelect: () => setBodyShape(bodyShape.medium)
        },
        {
          name: "Chubby",
          details: "A soft and plump shape",
          onSelect: () => setBodyShape(bodyShape.chubby)
        },
        {
          name: "Buxom",
          details: "A plump rounded figure with generous breasts",
          onSelect: () => setBodyShape(bodyShape.buxom)
        },
        {
          name: "Muscular",
          details: "Powerful and strong figure",
          onSelect: () => setBodyShape(bodyShape.muscular)
        }
      ]
    },
    {
      title: "Race", // sets height
      selections: [
        {
          name: "Human",
          details: "A normal human",
          onSelect: () => setRace(raceType.human)
        },
        {
          name: "Dwarf",
          details: "A hardy but short dwarf",
          onSelect: () => setRace(raceType.dwarf)
        },
        {
          name: "Orc",
          details: "A powerful Orc",
          onSelect: () => setRace(raceType.orc)
        },
        {
          name: "Elf",
          details: "Lithe and feminine Elf",
          onSelect: () => setRace(raceType.elf)
        },
        {
          name: "Dark Elf",
          details: "A plumper stronger Elf",
          onSelect: () => setRace(raceType.darkelf)
        },
        {
          name: "Gnome",
          details: "Small but intelligent",
          onSelect: () => setRace(raceType.gnome)
        },
        {
          name: "Succubus",
          details: "Wise, alluring & seductive.",
          onSelect: () => setRace(raceType.succubus)
        },
        {
          name: "Fairy",
          details: "Small and graceful.",
          onSelect: () => setRace(raceType.fairy)
        }
      ]
    }
  ];

  return (
    <Wrapper>
      <h3>Build your Character</h3>
      <Selections
        {...SetupPages[page]}
        back={changePageBack}
        forward={changePageNext}
      />
    </Wrapper>
  );
};

const Selections = ({ title, component, selections, back, forward }) => {
  const [selectedIndex, setSelIndex] = useState(false);
  const moveBack = () => {
    setSelIndex(false);
    back();
  };
  const moveForward = () => {
    setSelIndex(false);
    forward();
  };

  return (
    <>
      <SelectionBox>
        <Title>{title}</Title>
        {component}
        <SelectionsWrapper>
          {selections.map((selection, index) => {
            const OnPress = () => {
              if (index !== selectedIndex) {
                setSelIndex(index);
              } else {
                setSelIndex(false);
              }
              selection.onSelect();
            };

            return (
              <SelectBox selected={index === selectedIndex} onClick={OnPress}>
                {selection.img && (
                  <SelectionImg alt="img" src={selection.img} />
                )}
                <h5>{selection.name}</h5>
                <span>{selection.details}</span>
              </SelectBox>
            );
          })}
        </SelectionsWrapper>
      </SelectionBox>
      <BtnWrapper>
        <PageBtn onClick={moveBack}>{"<"}</PageBtn>
        <PageBtn onClick={moveForward}>{">"}</PageBtn>
      </BtnWrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 100%;
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
const BtnWrapper = styled.div`
  margin: 32px;
  display: flex;
  justify-content: space-between;
`;
const PageBtn = styled.button`
  border: 2px solid grey;
  background: none;
  color: white;
`;

export default Setup;
