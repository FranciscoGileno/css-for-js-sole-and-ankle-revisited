/* eslint-disable no-unused-vars */
import { DialogContent, DialogOverlay } from "@reach/dialog";
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <DialogOverlayWrapper isOpen={isOpen} onDismiss={onDismiss}>
      <DialogContentWrapper>
        <UnstyledButtonWrapper onClick={onDismiss}>
          <Icon id="close" strokeWidth={2} />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </UnstyledButtonWrapper>
        <Nav>
          <a
            href="/sale"
            style={{
              "--textColor": COLORS.secondary,
            }}
          >
            Sale
          </a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Nav>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </DialogContentWrapper>
    </DialogOverlayWrapper>
  );
};

const DialogOverlayWrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(96, 100, 108, 0.8);
`;

const DialogContentWrapper = styled(DialogContent)`
  background-color: ${COLORS.white};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: min(80%, 300px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 32px;
  padding-right: 32px;
`;

const UnstyledButtonWrapper = styled(UnstyledButton)`
  position: absolute;
  top: 28px;
  right: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  flex: 1;
  justify-content: center;

  a {
    color: var(--textColor, ${COLORS.gray[900]});
    text-decoration: none;
    text-transform: uppercase;
    font-size: ${21 / 16}rem;
    font-weight: 600;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 32px;

  a {
    color: var(--textColor, ${COLORS.gray[700]});
    text-decoration: none;
    font-size: ${14 / 16}rem;
    font-weight: 500;
  }
`;

export default MobileMenu;
