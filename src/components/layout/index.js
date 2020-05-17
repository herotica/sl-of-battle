import React, { useState } from "react";
import styled from "styled-components";
import Character, { SideBarMain } from "../character";
import Setup from "../setup";

const Layout = () => {
  const [showSidebar, setSidebar] = useState(false);
  const hideSidebar = () => setSidebar(false);
  const expandSidebar = () => setSidebar(true);
  return (
    <Wrapper>
      {showSidebar ? (
        <WideSidebar onClick={hideSidebar}>
          SideBar <SideBarMain />
        </WideSidebar>
      ) : (
        <SmSidebar onClick={expandSidebar}>
          Small
          <Character />
        </SmSidebar>
      )}
      <Main>
        <Setup />
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
`;
const WideSidebar = styled.div`
  flex: 0 0 300px;
  background: darkgrey;
`;
const SmSidebar = styled.div`
  width: 80px;
  background: darkblue;
`;
const Main = styled.div`
  background: lightgrey;
  flex-grow: 1;
  overflow-y: auto;
`;

export default Layout;
