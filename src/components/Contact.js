import React from "react";
import styled from "styled-components";
import WorkIconSvg from "../assets/images/svg/workIcon.svg";

export default function Contact() {
  return (
    <ContactContainer id="contact">
      <ContactWrapper>
      <ContactHeading>Contact</ContactHeading>
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

const ContactContainer = styled.div`
  min-height: 100vh;
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
