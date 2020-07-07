import React from "react";
import styled from "styled-components";

import RoomHeader from "../roomHeader";
import GoBack from "../back";
import { useGlobalDataStore } from "../../state";
import { observer } from "mobx-react-lite";
import { MdTitleMiddle, SmlrText } from "../text";

export const ShopOptions = {
  onaholetrainer: {
    title: "Onahole Trainer",
    description: "Improves Cock training at Training Centre",
    cost: 80,
  },
  grapplingmatt: {
    title: "Grappling Map",
    description: "Improves Grappling training at Training Centre",
    cost: 50,
  },
  licenceA: {
    title: "Licence A",
    description: "Decreases price of fucking Losers",
    cost: 30,
  },
  licenceB: {
    title: "Licence B",
    reqItems: ["licenceA"],
    description: "Further decreases price of fucking Losers",
    cost: 60,
  },
  licenceC: {
    title: "Licence C",
    reqItems: ["licenceB"],
    description: "Even further decreases price of fucking Losers",
    cost: 90,
  },
  licencePro: {
    title: "Licence Pro",
    reqItems: ["licenceC"],
    description: "Allows losers to be bought as a sex slave",
    cost: 120,
  },
};

export const ShopOptionsKeys = Object.keys(ShopOptions);

const LeaguePointsShop = observer(() => {
  const {
    changeLeaguePoints,
    leaguePoints,
    boughtItems,
    addBoughtItem,
  } = useGlobalDataStore();
  const BuyOption = (cost, id) => {
    changeLeaguePoints(cost * -1);
    addBoughtItem(id);
  };

  return (
    <>
      <RoomHeader title="League Point Shop">
        <GoBack />
      </RoomHeader>
      <MdTitleMiddle>
        You have {leaguePoints} League Points available
      </MdTitleMiddle>
      <FlexWrapWrap>
        {ShopOptionsKeys.map((key) => {
          const { cost, title, description, reqItems } = ShopOptions[key];
          const alreadyOwn = boughtItems.includes(key);
          let metRequirements = true;
          reqItems &&
            reqItems.forEach((req) => {
              if (!boughtItems.includes(req)) {
                metRequirements = false;
              }
            });

          return (
            !alreadyOwn &&
            metRequirements && (
              <OptionBox
                onClick={
                  cost <= leaguePoints ? () => BuyOption(cost, key) : null
                }
                key={key}
              >
                <MdTitleMiddle>{title}</MdTitleMiddle>
                <SmlrText>{description}</SmlrText>
                <SmlrText>
                  [<CostText isRed={cost > leaguePoints}>{cost}</CostText>{" "}
                  Credits]
                </SmlrText>
              </OptionBox>
            )
          );
        })}
      </FlexWrapWrap>

      <MdTitleMiddleMarginTop>
        You have already purchased:
      </MdTitleMiddleMarginTop>
      <FlexWrapWrap>
        {boughtItems.map((idKey) => {
          const { title, description } = ShopOptions[idKey];

          return (
            <OptionBoxBought key={idKey}>
              <MdTitleMiddle>{title}</MdTitleMiddle>
              <SmlrText>{description}</SmlrText>
            </OptionBoxBought>
          );
        })}
      </FlexWrapWrap>
    </>
  );
});

const FlexWrapWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const OptionBox = styled.div`
  padding: 16px;
  background: #b95959;
  border: 2px solid darkred;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 16px 20px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #da8f8f;
  }
`;
const OptionBoxBought = styled(OptionBox)`
  border-radius: 10px;
  color: #652525;
`;
const MdTitleMiddleMarginTop = styled(MdTitleMiddle)`
  margin-top: 30px;
`;
const CostText = styled.span`
  ${(p) => p.isRed && "color: darkred;"}
`;

export default LeaguePointsShop;
