import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Icon from "../Icon";
import Logo from "../Logo";
import MobileMenu from "../MobileMenu";
import SuperHeader from "../SuperHeader";
import UnstyledButton from "../UnstyledButton";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <DeskopMainHeader>
          <Side>
            <Logo />
          </Side>
          <Nav>
            <NavLink href="/sale">A Venda</NavLink>
            <NavLink href="/new">Novos Lançamentos </NavLink>
            <NavLink href="/men">Homens</NavLink>
            <NavLink href="/women">Mulheres</NavLink>
            <NavLink href="/kids">Crianças</NavLink>
            <NavLink href="/collections">Coleções</NavLink>
          </Nav>
          <Side />
        </DeskopMainHeader>
        <MobileMainHeader>
          <Logo />
          <Actions>
            <UnstyledButton>
              <Icon id="shopping-bag" strokeWidth={2} />
            </UnstyledButton>
            <UnstyledButton>
              <Icon id="search" strokeWidth={2} />
            </UnstyledButton>
            <UnstyledButton>
              <Icon
                id="menu"
                strokeWidth={2}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              />
            </UnstyledButton>
          </Actions>
        </MobileMainHeader>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow-x: auto;

  @media ${QUERIES.tabledAndDown} {
    border-top: 4px solid var(--color-gray-900);
    padding: 18px 16px;
  }
`;

const DeskopMainHeader = styled.div`
  display: flex;
  align-items: baseline;
  width: 100%;

  @media ${QUERIES.tabledAndDown} {
    display: none;
  }
`;

const MobileMainHeader = styled.div`
  width: 100%;
  display: none;
  align-items: center;
  justify-content: space-between;
  @media ${QUERIES.tabledAndDown} {
    display: flex;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 15vw - 8rem, 3rem);
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  white-space: nowrap;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export default Header;
