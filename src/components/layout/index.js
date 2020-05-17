import React, { useState } from "react";
import styled from "styled-components";
import Character from "../character";
import Setup from "../setup";

const Layout = () => {
  const [showSidebar, setSidebar] = useState(false);
  const hideSidebar = () => setSidebar(false);
  const expandSidebar = () => setSidebar(true);
  return (
    <Wrapper>
      {showSidebar ? (
        <WideSidebar onClick={expandSidebar}>
          SideBar <Character />
        </WideSidebar>
      ) : (
        <SmSidebar onClick={expandSidebar}>Small</SmSidebar>
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
  width: 300px;
  background: darkgrey;
`;
const SmSidebar = styled.div`
  width: 80px;
  background: darkblue;
`;
const Main = styled.div`
  background: lightgrey;
  flex-grow: 1;
`;

export default Layout;
