import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export const Projects = () => {
  const projectsData = useStaticQuery(graphql`
    query {
      projects: allMdx(
        filter: { frontmatter: { category: { eq: "project" } } }
        sort: { frontmatter: { order: ASC } }
      ) {
        nodes {
          frontmatter {
            link
            stack
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
    <ProjectsContainer className="home-section" id="Projects">
      <ProjectsHeading>Projects</ProjectsHeading>
      <ProjectsWrapper>
        {projectsData.projects.nodes.map((project) => (
          <ProjectCard key={project.id}>
            <Link to={"/" + project.frontmatter.link}>
              <ProjectGatsbyImage
                image={getImage(
                  project.frontmatter.img.childImageSharp.gatsbyImageData
                )}
                alt={project.frontmatter.title}
              />
              <ProjectInfo>
                <TitleWrap>
                  <ProjectTitle>{project.frontmatter.title}</ProjectTitle>
                </TitleWrap>
                {/* <StackWrap>
                  <ProjectStack>{"Skills: "+project.frontmatter.stack}</ProjectStack>
                </StackWrap> */}
              </ProjectInfo>
            </Link>
          </ProjectCard>
        ))}
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  margin-top: 80px;
  min-height: 100vh;
  padding: 5rem calc((100vw-1300px) / 2);

  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-margin-top: 80px;
`;

const ProjectsHeading = styled.div`
  margin-top: 30px;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 2rem;
`;

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; //repeat(4, 1fr);
  grid-gap: 20px;
  justify-items: center;
  padding: 0 clamp(0.7rem, 5vw, 6rem);

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }

  max-width: 1300px;
  max-height: 100%;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 300px; //500px;
  position: relative;
  transition: 0.2 ease;
  @media screen and (max-width: 1200px) {
    height: 250px;
  }
`;

const ProjectGatsbyImage = styled(GatsbyImage)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 30px;
  filter: brightness(100%);
  border: 3px solid ${({ theme: { colors } }) => colors.bgHighlight};  /* set the border color here */
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      filter: brightness(120%);
      transform: translateY(-2px);
      transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
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

const TitleWrap = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StackWrap = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ProjectTitle = styled.div`
  font-weight: 400;
  font-size: clamp(1rem, 5vw, 2rem);
  line-height: clamp(1rem, 5vw, 2rem);
  text-align: center;
  color: ${({ theme: { colors } }) => colors.tertiary};
  /* text-shadow: 0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black; */
  text-shadow: 0.08em 0 black, 0 0.08em black, -0.08em 0 black, 0 -0.08em black,
    -0.08em -0.08em black, -0.08em 0.08em black, 0.08em -0.08em black,
    0.08em 0.08em black;
`;

const ProjectStack = styled.div`
  font-weight: 700;
  font-size: clamp(0.6rem, 5vw, 1.5rem);
  line-height: clamp(0.6rem, 5vw, 1.5rem);
  text-align: center;
  color: ${({ theme: { colors } }) => colors.tertiary};
  /* text-shadow: 0 0 5px black, 0 0 5px black, 0 0 5px black, 0 0 5px black; */
  text-shadow: 0.08em 0 black, 0 0.08em black, -0.08em 0 black, 0 -0.08em black,
    -0.08em -0.08em black, -0.08em 0.08em black, 0.08em -0.08em black,
    0.08em 0.08em black;
`;
