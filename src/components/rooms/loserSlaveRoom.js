import React from "react";
import styled from "styled-components";

import RoomHeader from "../roomHeader";
import GoBack from "../back";
import { useGlobalDataStore } from "../../state";
import { observer } from "mobx-react-lite";
import { MdTitleMiddle } from "../text";

const LeaguePointsShop = observer(() => {
  const { losersBought } = useGlobalDataStore();

  return (
    <>
      <RoomHeader title="Loser Slave Pen">
        <GoBack />

        {console.log(losersBought)}
      </RoomHeader>
      <MdTitleMiddle>Enjoy the fruits of your success</MdTitleMiddle>
      <MdTitleMiddleMarginTop>
        You have Series, {Object.keys(losersBought)}
      </MdTitleMiddleMarginTop>
    </>
  );
});

const FlexWrapWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const SeriesBox = styled.div`
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
const MdTitleMiddleMarginTop = styled(MdTitleMiddle)`
  margin-top: 30px;
`;

export default LeaguePointsShop;
