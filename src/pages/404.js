import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

export default function NotFound() {
  return (
    <Layout>
      <NotFoundContainer>
        <NotFoundWrapper>
          <NotFoundHeading>404</NotFoundHeading>
          <NotFoundP>Sorry, this page does not exist</NotFoundP>
        </NotFoundWrapper>
      </NotFoundContainer>
    </Layout>
  );
}

const NotFoundHeading = styled.h2`
  margin-top: 30px;
  color: ${({ theme: { colors } }) => colors.primary};
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 1rem;
  align-content: center;
`;

const NotFoundP = styled.p`
  color: ${({ theme: { colors } }) => colors.tertiary};
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 1rem;
  align-content: center;
`;

const NotFoundContainer = styled.div`
  padding: 5rem calc((100vw-1300px) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotFoundWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
