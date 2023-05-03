import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link, graphql, useStaticQuery } from "gatsby";
import { Button } from "../styles/Button";

export default function Sidebar({ isOpen, toggle }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuData {
            title
            link
          }
        }
      }
    }
  `);
  const menuData = data.site.siteMetadata.menuData;

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <ClosedIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {menuData.map((item, idx) => (
            <SidebarLink to={item.link} key={idx}>
              {item.title}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SidebarBtn>
          <Button primary="true" round="true" to="/resume">
            Resume
          </Button>
        </SidebarBtn>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const ClosedIcon = styled(FaTimes)`
  color: ${({ theme: { colors } }) => colors.tertiary};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: ${({ theme: { colors } }) => colors.tertiary};
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.tertiary};
  cursor: pointer;

  &:hover {
    color: ${({ theme: { colors } }) => colors.secondary}; //#01bf71;
    transition: 0.2s ease-in-out;
  }
`;

const SidebarBtn = styled.div`
  display: flex;
  justify-content: center;
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  padding: 0;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
