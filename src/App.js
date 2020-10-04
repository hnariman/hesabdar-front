import React from "react";
import styled from "styled-components";
import { Map } from "react-lodash";
import { Icon } from "react-icons-kit";
import { tux } from "react-icons-kit/icomoon";
import { chevronLeft } from "react-icons-kit/oct/chevronLeft";
import { ic_account_box } from "react-icons-kit/md/ic_account_box";

const options = { menu: true };
const toggleMenu = () => ({ ...options, menu: !options.menu });
//const toggleMenu = () => alert("menu toggle");
export const App = () => {
  const menuItems = [
    { title: "one", icon: "home" },
    { title: "two", icon: "home" },
    { title: "three", icon: "home2" },
    { title: "four", icon: "home" },
    { title: "five", icon: "home3" },
  ];
  return (
    <AppContainer>
      <Menu menu={menuItems} />
      <ContentContainer />
    </AppContainer>
  );
};

const Menu = (props) => {
  return (
    <MenuContainer>
      <Icon icon={chevronLeft} size="36" onClick={toggleMenu} />
      {options.menu && (
        <Map
          collection={props.menu}
          iteratee={(i) => (
            <Item>
              <Icon icon={ic_account_box} size="36" />
              <div>{i.title}</div>
            </Item>
          )}
        />
      )}
    </MenuContainer>
  );
};

// Styles
const AppContainer = styled.section`
  display: grid;
  height: 100vh;
  grid-template-areas:
    "menu header header header"
    "menu content content content"
    "menu content content content"
    "menu content content content"
    "menu content content content"
    "menu content content content";
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: min-content repeat(3, 1fr);
`;

const ContentContainer = styled.div`
  grid-area: content;
  background: #448899;
`;

const MenuContainer = styled.ul`
  grid-area: menu;
  margin: 0;
  background: #4242a2;
  color: #fff;
  font-weight: bold;
  font-size: 1.3em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  padding: 1em;
`;

const Item = styled.li`
  text-align: center;
  margin: 0 auto;
  list-style-type: none;
  margin: 0;
  padding: 0;
  :hover {
    opacity: 0.5;
  }
`;
