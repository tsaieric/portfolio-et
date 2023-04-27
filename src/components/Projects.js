import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const Projects = () => {
  const projectsData = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "project" } } }
        sort: { frontmatter: { order: ASC } }
      ) {
        nodes {
          frontmatter {
            link
            title
            img {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          id
        }
      }
    }
  `);

  return (
    <ProjectsContainer>
      <ProjectsHeading>Projects</ProjectsHeading>
      <ProjectsWrapper>
        {projectsData.projects.nodes.map((project) => (
          <ProjectCard key={project.id}>
            <Link to={"/projects/" + project.frontmatter.link}>
              <ProjectGatsbyImage
                image={getImage(
                  project.frontmatter.img.childImageSharp.gatsbyImageData
                )}
                alt={project.frontmatter.title}
              />
              <ProjectInfo>
                <TextWrap>
                  {/* <ProjectStack>{project.frontmatter.stack}</ProjectStack> */}
                  <ProjectTitle>{project.frontmatter.title}</ProjectTitle>
                </TextWrap>
              </ProjectInfo>
            </Link>
          </ProjectCard>
        ))}
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  margin-top:80px;
  min-height: 100vh;
  padding: 5rem calc((100vw-1300px) / 2);
  color: #fff;
`;
const ProjectsHeading = styled.div`
  color: lightgoldenrodyellow;
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 2rem;
`;

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  justify-items: center;
  padding: 0 clamp(0.7rem, 5vw, 6rem);

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  transition: 0.2 ease;
  @media screen and (max-width: 1200px) {
    height: 388px;
  }
`;
const ProjectGatsbyImage = styled(GatsbyImage)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 20px;
  filter: brightness(80%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`;

const TextWrap = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ProjectTitle = styled.div`
  font-weight: 700;
  font-size: clamp(1rem, 5vw, 2rem);
  line-height: clamp(1rem, 5vw, 2rem);
  text-align: center;
  color: whitesmoke;
  text-shadow: 0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black;
`;