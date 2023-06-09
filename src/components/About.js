import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function About({ data }) {
  const portraitImg = getImage(data.gatsbyImageData);
  return (
    <AboutContainer className="home-section hidden" id="About">
      <AboutWrapper>
        <AboutItems imgStart={false}>
          <Column1>
            <TextWrapper>
              <TopLine>
                I believe in lifelong learning and continuous personal growth.
              </TopLine>
              <Heading></Heading>
              <Heading>
                With 8+ years of professional experience at Google Stadia,
                YouTube, Alexa Auto, etc., I've constantly improved my unique
                set of skills in programming, game development and design.
              </Heading>
              <Paragraph>
                I've loved games since I was a kid. Like software
                engineering, gaming made me brainstorm innovative solutions to
                unique problems. Gaming challenged me creatively and mentally,
                sparking my passion for software, hardware, and tech.
                Now, I find myself loving my work in the interactive media space
                because it enables me to combine all my passions where I can
                create similarly engaging experiences.
              </Paragraph>
              {/* <Paragraph>
                I believe in lifelong learning and growth. With 8+ years of
                experience at Google Stadia/YouTube, Alexa Auto, and more, I'm
                always improving my programming, game development and design
                skills. I love using my expertise & passion to make unique & fun
                experiences.
              </Paragraph> */}
            </TextWrapper>
          </Column1>
          <Column2>
            <AboutGatsbyImage image={portraitImg} alt="Portrait" />
          </Column2>
        </AboutItems>
      </AboutWrapper>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }

  scroll-margin-top: 60px;
`;

const TopLine = styled.p`
  color: ${({ theme: { colors } }) => colors.secondary};
  font-size: 16px;
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.primary};
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const Subtitle = styled.p`
  max-width: 480px;
  margin-bottom: 20px;
  font-size: 22px;
  line-height: 1.3;
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.secondary};

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

const Paragraph = styled.p`
  max-width: 480px;
  font-size: 18px;
  line-height: 1.3;
  font-weight: 300;
  color: ${({ theme: { colors } }) => colors.tertiary};
  @media screen and (max-width: 480px) {
    font-size: 17px;
  }
`;

const Column1 = styled.div`
  padding: 0 15px;
  grid-area: col1;
`;

const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    padding-top: 20px;
  }
`;

const AboutGatsbyImage = styled(GatsbyImage)`
  position: relative;
  left: 50%;
  transform: translate(-50%, 0%);
  max-width: 420px;
  width: 100%;
  height: auto;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 80px;
  /* opacity: 0.95; */
`;

const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: calc(100vh - 80px);
  width: 100%;
  max-height: 100%;
  margin-right: auto;
  margin-left: auto;
  //set min-height to fix overlapping on width < 400px
  min-height: 980px;
  /* padding: 0rem calc((100vw-1300px) / 2); */
  padding: 0 12px;
  justify-content: center;
`;

const AboutItems = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
