import React from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import { observer } from "mobx-react-lite";

const BuySkills = observer(() => {
  const {
    isWoman,
    gender,
    choiceSelection,
    updateChoiceSelection,
    powerPoints,
    changePowerPoints,
    penisSize,
    adjPenisSize,
    breastSize,
    adjBreastSize,
    vaginaSize,
    adjVaginaSize,
    anusSize,
    adjAnusSize,
    throatSize,
    adjThroatSize,
    changeSeductionProwess,
    changeGrapplingProwess,
    changeTongueProwess,
    changeTouchProwess,
    changeCockProwess,
    changeVaginaProwess,
    changeAnusProwess,
    // resistance
    changeTouchResistance,
    changeBreastResistance,
    changeMouthResistance,
    changeCockResistance,
    changeVaginaResistance,
    changeAnusResistance,
    adjOrgasmLimit
  } = useGlobalDataStore();
  const BuyOptions = [
    {
      name: "Bigger Cock",
      description: `It's a biggun`,
      select() {
        adjPenisSize(1);
      },
      unselect() {
        adjPenisSize(-1);
      },
      isChoosable: penisSize < 5 && !isWoman,
      cost: 5
    },
    {
      name: "Much Bigger Cock",
      description: `It's scarily big, be careful with it!`,
      select() {
        adjPenisSize(2);
      },
      unselect() {
        adjPenisSize(-2);
      },
      isChoosable: penisSize < 4 && !isWoman,
      cost: 15
    },
    {
      name: "Nympho",
      description: `Sex addict, can keep going, increases orgasm limit.`,
      select() {
        adjOrgasmLimit(1);
      },
      unselect() {
        adjOrgasmLimit(-1);
      },
      isChoosable: true,
      cost: 10
    },
    {
      name: "Size Queen",
      description: `Bigger anus and pussy.`,
      select() {
        adjVaginaSize(1);
        adjAnusSize(1);
      },
      unselect() {
        adjVaginaSize(-1);
        adjAnusSize(-1);
      },
      isChoosable: vaginaSize < 5 && anusSize < 5 && gender !== 'male',
      cost: 10
    },
    {
      name: "Sword Swallower",
      description: `Bigger throat.`,
      select() {
        adjThroatSize(2);
      },
      unselect() {
        adjThroatSize(-2);
      },
      isChoosable: throatSize < 4,
      cost: 10
    },
    {
      name: "Huge Breasts",
      description: `Big ol' tittys.`,
      select() {
        adjBreastSize(2);
      },
      unselect() {
        adjBreastSize(-2);
      },
      isChoosable: breastSize < 4,
      cost: 10
    },
    {
      name: "Seducer",
      description: `Unreasonably alluring.`,
      select() {
        changeSeductionProwess(20);
      },
      unselect() {
        changeSeductionProwess(-20);
      },
      isChoosable: true,
      cost: 10
    },
    {
      name: "Wrestler",
      description: `Seasoned grappler.`,
      select() {
        changeGrapplingProwess(10);
      },
      unselect() {
        changeGrapplingProwess(-10);
      },
      isChoosable: true,
      cost: 10
    },
    {
      name: "Seasoned Lovemaker",
      description: `Know how to please with tounge & touch.`,
      select() {
        changeTongueProwess(10);
        changeTouchProwess(10);
      },
      unselect() {
        changeTongueProwess(-10);
        changeTouchProwess(-10);
      },
      isChoosable: true,
      cost: 10
    },
    {
      name: "Cockmaster",
      description: `Fluent in the ways of ${gender === 'female' ? 'Strapon fucking' : 'cockbending'}.`,
      select() {
        changeCockProwess(10);
      },
      unselect() {
        changeCockProwess(-10);
      },
      isChoosable: true,
      cost: 5
    },
    {
      name: "Cowgirl",
      description: `Ride like the best of 'em. Additional prowess with back holes.`,
      select() {
        changeVaginaProwess(10);
        changeAnusProwess(10);
      },
      unselect() {
        changeVaginaProwess(-10);
        changeAnusProwess(-10);
      },
      isChoosable: isWoman,
      cost: 10
    },
    {
      name: "Sexual Endurance",
      description: `Resistance breaking from tongues & touching.`,
      select() {
        changeTouchResistance(10);
        changeMouthResistance(10);
      },
      unselect() {
        changeVaginaProwess(-10);
        changeMouthResistance(-10);
      },
      isChoosable: true,
      cost: 10
    },
    {
      name: "Resistive Breasts",
      description: `Your breasts are less sensitive to touch.`,
      select() {
        changeBreastResistance(15);
      },
      unselect() {
        changeBreastResistance(-15);
      },
      isChoosable: isWoman,
      cost: 5
    },
    {
      name: "Driller",
      description: `Your can hammer with your cock for longer.`,
      select() {
        changeCockResistance(5);
      },
      unselect() {
        changeCockResistance(-5);
      },
      isChoosable: gender !== 'female',
      cost: 5
    },
    {
      name: "Hungry little pussy",
      description: `Your pussy can take a lot more pleasure.`,
      select() {
        changeVaginaResistance(10);
      },
      unselect() {
        changeVaginaResistance(-10);
      },
      isChoosable: isWoman,
      cost: 5
    },
    {
      name: "Hungry little Anus",
      description: `Your arse can take a lot more pleasure.`,
      select() {
        changeAnusResistance(10);
      },
      unselect() {
        changeAnusResistance(-10);
      },
      isChoosable: true,
      cost: 5
    }
  ];

  return (
    <Wrapper>
      <SkillsOptions>
        <SelectionsWrapper>
          {BuyOptions.map((option, index) => {
            const onPress = () => {
              const newArr = choiceSelection.slice(0);
              if (choiceSelection[index]) {
                newArr[index] = false;
                option.unselect();
                changePowerPoints(option.cost);
              } else {
                if (powerPoints >= option.cost) {
                  newArr[index] = true;
                  option.select();
                  changePowerPoints(-1 * option.cost);
                } else {
                  window.alert("You cannot afford this.");
                }
              }
              updateChoiceSelection(newArr);
            };

            return (
              (option.isChoosable || choiceSelection[index]) && (
                <SelectionBox selected={choiceSelection[index]} onClick={onPress}>
                  <BuyImg src={option.img} alt={option.name} />
                  <Title>{option.name}</Title>
                  <Text>{option.description}</Text>
                  <Text notAfford={powerPoints < option.cost}>
                    Cost: {option.cost}
                  </Text>
                </SelectionBox>
              )
            );
          })}
        </SelectionsWrapper>
      </SkillsOptions>
      <FloatingPointsWrap>
        <FloatingPoints>{powerPoints} Points left</FloatingPoints>
      </FloatingPointsWrap>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
`;
const SkillsOptions = styled.div`
  flex-grow: 5;
`;
const FloatingPointsWrap = styled.div`
  position: relative;
  flex: 0 1 100px;
  border-left: 2px solid black;
  padding-left: 12px;
`;
const FloatingPoints = styled.div`
  position: fixed;
`;
const SelectionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const SelectionBox = styled.div`
  padding: 8px;
  border: 2px solid ${({ selected }) => (selected ? "orange" : "black")};
  border-radius: 8px;
  margin: 16px;
  cursor: pointer;
  0 1 200px;
`;
const BuyImg = styled.img`
  max-height: 180px;
`;
const Title = styled.h4`
  text-decoration: none;
`;
const Text = styled.p`
  line-height: 1.6;
  color: ${({ notAfford }) => (notAfford ? "darkred" : "inherit")};
`;

export default BuySkills;
