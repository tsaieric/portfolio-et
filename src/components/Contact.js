import React from "react";
import styled from "styled-components";
import EmailSvg from "../assets/images/svg/emailIcon.svg";
import LinkedinSvg from "../assets/images/svg/linkedinIcon.svg";

export default function Contact() {
  return (
    <ContactContainer className="home-section hidden" id="Contact">
      <ContactHeading>Contact</ContactHeading>
      <ContactWrapper>
        <ContactItems>
          <Column1>
            <ContactImg>
              <a
                href="mailto: erictsai.dev@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={EmailSvg} alt="emailIcon" />
              </a>
            </ContactImg>
            <ContactText>erictsai.dev@gmail.com</ContactText>
          </Column1>
          <Column2>
            <ContactImg>
              <a
                href="https://www.linkedin.com/in/erictsaidev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={LinkedinSvg} alt="linkedinIcon" />
              </a>
            </ContactImg>
            <ContactText>linkedin.com/in/erictsaidev</ContactText>
          </Column2>
        </ContactItems>
      </ContactWrapper>
    </ContactContainer>
  );
}

const ContactHeading = styled.div`
  margin-top: 30px;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 1rem;
`;
const ContactText = styled.p`
  color: ${({ theme: { colors } }) => colors.secondary};
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
const ContactContainer = styled.div`
  min-height: 66vh;
  padding: 5rem calc((100vw-1300px) / 2);

  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-margin-top: 80px;
  margin-top: 180px;
  @media screen and (max-width: 768px) {
    margin-top: 60px;
  }
`;

const ContactWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 100%;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

const ContactItems = styled.div`
  display: flex;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";
  height: 100%;
  width: auto;
`;

const ContactImg = styled.div`
  height: clamp(8rem, 10vw, 10rem);
  width: clamp(8rem, 10vw, 10rem);
  filter: brightness(90%);
  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      filter: brightness(100%);
      transform: translateY(-5px);
      transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
  }
`;

const Column1 = styled.div`
  padding: 0 calc(100vw / 10);
  padding-top: calc(100vw / 20);
  grid-area: col1;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Column2 = styled.div`
  padding: 0 calc(100vw / 10);
  padding-top: calc(100vw / 20);
  grid-area: col2;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;
