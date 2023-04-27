import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Button } from "../styles/Button";

export default function Navbar({ toggle }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuData {
            title
            link
          }
          title
        }
      }
    }
  `);
  const title = data.site.siteMetadata.title;
  const menuData = data.site.siteMetadata.menuData;

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">{title}</NavLogo>
        <Bars onClick={toggle} />
        <NavMenu>
          {menuData.map((item, idx) => (
            <NavLink to={item.link} key={idx}>
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
        <NavBtn>
          <Button primary="true" round="true" to="/projects">
            Resume
          </Button>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
}

const Nav = styled.nav`
  background: black;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 10;
  font-size: 1.5rem;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  //make navbar sticky
  position: sticky; //relative if don't want
  position: -webkit-sticky; /* Safari */
	top: 0;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  /* @media screen and (max-width: 800px) {
    padding: 0 12px;
  } */
  /* max-width: 1100px; */
`;

const NavLogo = styled(Link)`
  color: lightgoldenrodyellow;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  /* margin-left: 20px; */
  font-weight: 500;
  text-decoration: none;
`;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: whitesmoke;

  @media screen and (max-width: 800px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 85%); //move nav bars icon up/down here
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
