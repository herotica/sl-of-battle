import React, { useState } from 'react';
import styled from "styled-components";
import Character from "../character";
import Setup from "../setup";

const Layout = () => {
    const [showSidebar, setSidebar] = useState(false);

    return (
        <Wrapper>
            <Sidebar>
                sidebar
                <Character />
            </Sidebar>
            <Main>
                main
                <Setup />
            </Main>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  display: flex;
`
const Sidebar = styled.div`
  width: 300px;
  background: darkgrey;
`
const Main = styled.div`
  background: lightgrey;
  flex-grow: 1;
`


export default Layout;