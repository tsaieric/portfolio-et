import React, { useLayoutEffect } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import PDF from "../assets/eric-tsai-resume.pdf";

export default function Resume({ data }) {
  useLayoutEffect(() => {
    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== "undefined";
    // Manually auto-scroll if it is firefox browser due to 
    // issues with smooth scroll redirect to top in firefox
    if (isFirefox) {
      document.body.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    }
  }, []);

  const resumeImage = getImage(data.file.childImageSharp.gatsbyImageData);

  return (
    <Layout>
      <ResumeContainer>
        <ResumeHeading>Resume</ResumeHeading>
        <ResumeWrapper rel="noopener noreferrer" href={PDF} target="_blank">
          <ResumeGatsbyImage image={resumeImage} alt="Resume Image" />
        </ResumeWrapper>
      </ResumeContainer>
    </Layout>
  );
}
export const query = graphql`
  query {
    file(relativePath: { eq: "images/eric-tsai-resume-jpg.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`;

const ResumeHeading = styled.div`
  margin-top: 30px;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 1rem;
  align-content: center;
`;

const ResumeContainer = styled.div`
  padding: 5rem calc((100vw-1300px) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResumeWrapper = styled.a`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResumeGatsbyImage = styled(GatsbyImage)`
  max-width: 700px;
  width: 100%;
  height: auto;

  filter: brightness(100%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    cursor: pointer;
    filter: brightness(110%);
    transform: translateY(-2px);
  }
`;
