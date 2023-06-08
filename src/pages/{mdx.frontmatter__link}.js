// import * as React from "react";
import React, { useLayoutEffect } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ProjectPost({ data, children }) {
  // useEffect(
  //   () =>
  //     // setTimeout(function () {
  //       window.scrollTo(0, 0),
  //     // }, 1),
  //   []
  // );
  useLayoutEffect(() => {
    document.body.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <ProjectContainer>
        <ProjectHeading>{data.mdx.frontmatter.title}</ProjectHeading>
        <ProjectSubheading>{data.mdx.frontmatter.stack}</ProjectSubheading>
        {/* <ProjectGatsbyImage
          image={getImage(
            data.mdx.frontmatter.img.childImageSharp.gatsbyImageData
          )}
          alt={data.mdx.frontmatter.title}
        /> */}
        <TextWrapper>{children}</TextWrapper>
      </ProjectContainer>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        stack
        img {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

const ProjectContainer = styled.div`
  margin-top: 30px;
  min-height: 100vh;
  padding: 5rem calc((100vw-1300px) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectHeading = styled.div`
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 700;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  text-align: center;
  margin-bottom: 0.2rem;
`;
const ProjectSubheading = styled.div`
  color: ${({ theme: { colors } }) => colors.secondary};
  font-weight: 700;
  font-size: clamp(0.8rem, 5vw, 1.5rem);
  text-align: center;
  margin-bottom: 0.2rem;
`;
const TextWrapper = styled.div`
  max-width: 1000px;
  padding-top: 24px;
  padding-bottom: 30px;
  padding-left: 24px;
  padding-right: 24px;
  color: ${({ theme: { colors } }) => colors.tertiary};

  h4 {
    color: ${({ theme: { colors } }) => colors.primary};
  }
  h1,
  h2,
  h3 {
    text-align: center;
  }
`;
const ProjectGatsbyImage = styled(GatsbyImage)`
  height: 100%;
  max-width: 600px;
  position: relative;
  border-radius: 10px;
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  margin: 24px;
`;
