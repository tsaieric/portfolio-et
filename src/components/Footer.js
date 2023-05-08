import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
        <div>
          <Copyright>
            Copyright &copy; {new Date().getFullYear()} erictsai.dev. All rights reserved.
          </Copyright>
          <LinkContainer>
            <LinkItem>
              <Link href="https://www.pexels.com">VideoSource</Link>
            </LinkItem>
            <LinkItem>
              <Link href="https://www.svgrepo.com">SvgsSource</Link>
            </LinkItem>
            <LinkItem>
              <Link href="https://www.evandromacedo.com/active-nav-links-in-many-routes-with-gatsby-and-styled-components/">
                GatsbyRouterKnowledgeSource
              </Link>
            </LinkItem>
            <LinkItem>
              <Link href="https://stackoverflow.com/questions/66602751/can-html-anchor-tags-ever-be-used-for-internal-links-in-gatsby">
                AnchorGatsbyKnowledgeSource
              </Link>
            </LinkItem>
          </LinkContainer>
        </div>

    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.tertiary};
  padding: 30px;
`;

const Copyright = styled.p`
text-align: center;
  font-size: 14px;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  align-content: center;
`;

const LinkItem = styled.text`
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
