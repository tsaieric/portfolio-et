import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import VideoMp4 from "../assets/videos/techspin1080p.mp4";
import VideoWebm from "../assets/videos/techspin1080p.webm";

export default function Hero() {
  const videoRef = useRef(null);
  useEffect(() => {
    // autoplay does not work on some browsers if video does not have `muted`
    // attribute:
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video#attr-autoplay
    // and react ignores muted attribute:
    // https://github.com/facebook/react/issues/10389

    // videoRef.current.setAttribute("muted", '');
    // videoRef.current.defaultMuted = true;
    // videoRef.current.muted  = true;

    videoRef &&
      videoRef.current
        .play()
        .then(() => {})
        .catch((err) => {
          // Video couldn't play, low power play button showing.
        });
  });

  return (
    <HeroContainer className="home-section hidden" id="hero">
      <HeroBg>
        <VideoBg
          ref={videoRef}
          // autoPlay={true}
          loop={true}
          controls={false}
          playsInline={true}
          muted={true}
        >
          <source src={VideoMp4} type="video/mp4" />
          <source src={VideoWebm} type="video/webm" />
        </VideoBg>
      </HeroBg>
      <HeroWrapper>
        <HeroItems imgStart={false}>
          <TextWrapper>
            <TopLine>Hi, I'm Eric Tsai</TopLine>
            <Heading>A Software Engineer</Heading>
            <Subtitle>
              Dedicated to creating unforgettable experiences through
              interactive media and games
            </Subtitle>
          </TextWrapper>
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
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;

  //added as part of infowrapper attempt
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
  scroll-margin-top: 80px;
`;

const TopLine = styled.p`
  color: ${({ theme: { colors } }) => colors.secondary};
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-size: clamp(0.8rem, 4vw, 1.6em);
`;

const Heading = styled.h1`
  margin-bottom: 20px;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: clamp(3rem, 8vw, 5rem);
`;

const Subtitle = styled.p`
  margin-bottom: 20px;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.secondary};
  font-size: clamp(1.2rem, 5vw, 2.5rem);
`;

// const Paragraph = styled.p`
//   font-weight: 300;
//   color: ${({ theme: { colors } }) => colors.tertiary};
//   font-size: clamp(1.5rem, 3vw, 2rem);
// `;

const TextWrapper = styled.div`
  max-width: 1100px;
  padding-top: 0;
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    padding-top: 20px;
  }
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
`;

const HeroWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: calc(100vh - 80px);
  width: 100%;
  max-height: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 100%;
`;
