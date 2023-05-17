import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      {/* <div> */}
        <Copyright>
          Copyright &copy; {new Date().getFullYear()} erictsai.dev. All rights
          reserved.
          <br />I developed this website from scratch as a fun Gatsby+React
          project, using Jamstack static architecture. I'm new to React and learned 
          a bit to make my own website to avoid relying on Wordpress (what I had before). 
          I only used a few packages for gatsby image optimization and the vertical-timeline. 
          Everything else, I learned using a variety of sources listed below.
        </Copyright>
        <LinkContainer>
          <LinkItem>
            <Link href="https://www.pexels.com">VideoSource</Link>
          </LinkItem>
          <LinkItem>
            <Link href="https://www.svgrepo.com">SvgsSource</Link>
          </LinkItem>
          <LinkItem>
            <Link href="https://www.gatsbyjs.com/docs">
              GatsbyReactKnowledgeSource
            </Link>
          </LinkItem>
          <LinkItem>
            <Link href="https://www.evandromacedo.com/active-nav-links-in-many-routes-with-gatsby-and-styled-components/">
              GatsbyRouterKnowledgeSource
            </Link>
          </LinkItem>
          <LinkItem>
            <Link href="https://stackoverflow.com/questions/66602751/can-html-anchor-tags-ever-be-used-for-internal-links-in-gatsby">
              GatsbyAnchorKnowledgeSource
            </Link>
          </LinkItem>
          <LinkItem>
            <Link href="https://www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A">
              ReactPartialKnowledgeSource
            </Link>
          </LinkItem>
          <LinkItem>
            <Link href="https://github.com/stephane-monnot/react-vertical-timeline">
              ReactVerticalTimelineSource
            </Link>
          </LinkItem>
          <LinkItem>
            <Link href="https://netacci.hashnode.dev/how-to-highlight-active-navigation-on-scroll-in-react">
              ScrollHighlighting
            </Link>
          </LinkItem>
          <LinkItem>
            <Link href="https://www.youtube.com/watch?v=T33NN_pPeNI">
              SimpleScrollAnimation
            </Link>
          </LinkItem>
        </LinkContainer>
      {/* </div> */}
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme: { colors } }) => colors.tertiary};
  padding: 30px;
`;

const Copyright = styled.p`
  text-align: center;
  font-size: 14px;
  max-width: 1200px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  align-content: center;
`;

const LinkItem = styled.div`
  font-size: 12px;
`;

const Link = styled.a`
  color: ${({ theme: { colors } }) => colors.tertiary};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme: { colors } }) => colors.secondary};
  }
`;
