import React from "react";
import styled from "styled-components";
import Video from "../assets/videos/artExhibitBirds1080p.mp4";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Hero({ data }) {
  const bannerImg = getImage(data.gatsbyImageData);

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInLine />
      </HeroBg>
      <HeroContent>
        <HeroItems imgStart={false}>
          <Column1>
            <TextWrapper>
              {/* <TopLine>ABOUT ME</TopLine> */}
              <Heading>Software Engineer & Developer</Heading>
              <Subtitle>
                Experienced software engineer who likes messing with games and
                interactive media. I have experience in back-end
                engineering, game development & system design from
                Google/Youtube, Amazon, CMU, etc.
              </Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <HeroGatsbyImage image={bannerImg} alt="Banner" />
            </ImgWrap>
          </Column2>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: white;

  //added as part of infowrapper attempt
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;
const TopLine = styled.p`
  color: white;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;
const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: white;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: white;
`;
const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
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

   /* :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }  */
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

const HeroGatsbyImage = styled(GatsbyImage)`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 66px;
  opacity: 1;
`;

const HeroContent = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  /* z-index: 3;
  height: calc(100vh - 80px);
  padding: 0rem calc((100vw-1300px) / 2);
  max-height: 100%; */
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

  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: white;
  line-height: 1.1; */
`;

const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  font-weight: bold;
  padding: 0 1rem;
`;

const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
`;
