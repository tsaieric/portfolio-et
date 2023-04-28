import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";

export default function resume() {
  return (
    <Layout>
      <ResumeText>resume</ResumeText>
    </Layout>
  );
}

const ResumeText = styled.h1`
  color: lightgoldenrodyellow;
`;
