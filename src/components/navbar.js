import React, { useEffect, useRef, useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Button } from "../styles/Button";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Navbar({ toggle }) {
  //change navbar to black on scroll
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  //active nav link based on active section
  const [activeSection, setActiveSection] = useState("");
  const observer = useRef(null);

  //useEffect for the above two comments
  useEffect(() => {
    //change navbar to black on scroll
    window.addEventListener("scroll", changeNav);

    //observe when target intersects with root
    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        } 
        entry.target.classList.toggle('show', entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "80px",
        threshold: 0.2,
      }
    );

    //Get all sections where classtype = home-section
    const sections = document.querySelectorAll(".home-section");
    sections.forEach((section) => {
      observer.current.observe(section);
    });

    //Cleanup function to remove observer
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

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
      mainLogoImg: file(relativePath: { eq: "images/logo/logoSquare180.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  `);
  const menuData = data.site.siteMetadata.menuData;
  const mainLogoImg = getImage(
    data.mainLogoImg.childImageSharp.gatsbyImageData
  );

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/">
          <div>
            <NavGatsbyImage image={mainLogoImg} alt="ETLogo" />
          </div>
        </NavLogo>
        <Bars onClick={toggle} />
        <NavMenu>
          {menuData.map((item, idx) => (
            <NavLink
              to={item.link}
              key={idx}
              $isActive={activeSection === item.title}
            >
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
        <NavBtn>
          <Button primary="true" round="true" to="/resume">
            Resume
          </Button>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
}

const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "black" : "transparent")};
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
`;

const NavGatsbyImage = styled(GatsbyImage)`
  max-width: 50px;
  width: 100%;
  height: auto;
  margin-top: 5px;
  filter: brightness(100%);
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      filter: brightness(50%);
      transform: translateY(-2px);
      transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
`;

const NavLogo = styled(Link)`
  color: ${({ theme: { colors } }) => colors.primary};
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
  color: ${({ theme: { colors } }) => colors.tertiary};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  //highlight navlink when scrolled to
  border-bottom: ${(props) =>
    props.$isActive ? `3px solid ${props.theme.colors.primary};` : "0px;"};

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      transform: translateY(-2px);
      transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -88px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: ${({ theme: { colors } }) => colors.tertiary};

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
