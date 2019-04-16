import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 80px;
  padding: 0 20px;
  margin: 0 240px;
`;

const Section = styled.div`
  display: flex;
  max-height: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const MenuWrapper = styled.ul`
  flex-grow: 0;
`;

const Menu = styled(Link)`
  position: relative;
  display: inline-block;
  height: 100%;
  margin-left: 2rem;
  box-shadow: none;
  color: #0a0a0a;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0;
  text-transform: none;
  transition: all 0.2s ease;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    color: #f73832;
  }
`;

const SearchIcon = styled.a`
  margin-left: auto;
  box-shadow: none;
  color: #000;
  font-family: 'NotoSansKR', sans-serif;
  font-size: 17.5px;
  letter-spacing: 0.05px;
`;

const Navbar = () => (
  <Container>
    <Section />
    <Section>
      <MenuWrapper>
        <Menu to="/about">ABOUT</Menu>
        <Menu to="/subscription">SUBSCRIPTION</Menu>
        <Menu to="/contact">CONTACT</Menu>
      </MenuWrapper>
    </Section>
    <Section>
      <SearchIcon href="#search">
        <i className="fas fa-search" />
      </SearchIcon>
    </Section>
  </Container>
);

export default Navbar;