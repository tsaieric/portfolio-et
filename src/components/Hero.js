import React from "react";
import styled from "styled-components";
import Video from "../assets/videos/techVid1080p.mp4";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Hero({ data }) {
  const portraitImg = getImage(data.gatsbyImageData);

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInLine />
      </HeroBg>
      <HeroWrapper>
        <HeroItems imgStart={false}>
          <Column1>
            <TextWrapper>
              <TopLine>Hi, I'm Eric Tsai</TopLine>
              <Heading>A Software Engineer</Heading>
              <Subtitle>
                Dedicated to creating unforgettable experiences through
                interactive media and games.
              </Subtitle>
              <Paragraph>
                I believe in lifelong learning and growth. With 8+ years of
                experience at Google Stadia/YouTube, Alexa Auto, and more, I'm
                always improving my programming, game development and design
                skills. I love using my expertise & passion to make unique & fun
                experiences.
              </Paragraph>
            </TextWrapper>
          </Column1>
          <Column2>
              <HeroGatsbyImage image={portraitImg} alt="Portrait" />
          </Column2>
        </HeroItems>
      </HeroWrapper>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  /* color: white; */

  //added as part of infowrapper attempt
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

const Column1 = styled.div`
  /* margin-bottom: 15px; */
  padding: 0 15px;
  grid-area: col1;
`;
const Column2 = styled.div`
  /* margin-bottom: 15px; */
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
const TopLine = styled.p`
  color: #d2d2fa;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: lightgoldenrodyellow;
  @media screen and (max-width: 480px) {
    font-size: 33px;
  }
`;
const Subtitle = styled.p`
  max-width: 480px;
  margin-bottom: 20px;
  font-size: 22px;
  line-height: 1.2;
  font-weight: 400;
  color: #d2d2fa;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
const Paragraph = styled.p`
  max-width: 480px;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 300;
  color: whitesmoke;
  @media screen and (max-width: 480px) {
    font-size: 17px;
  }
`;

const HeroGatsbyImage = styled(GatsbyImage)`
  position:relative;
  left: 50%;
  transform: translate(-50%, 0%);
  max-width: 420px;
  width: 100%;
  height: auto;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 100px;
  opacity: 0.95;
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  /* opacity: 0.38; */
`;

const HeroWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: calc(100vh - 80px);
  width: 100%;
  /* max-width: 1100px; */
  max-height: 100%;
  margin-right: auto;
  margin-left: auto;
  /* padding: 0rem calc((100vw-1300px) / 2); */
  padding: 0 12px;
  justify-content: center;
`;

const HeroItems = styled.div`
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
