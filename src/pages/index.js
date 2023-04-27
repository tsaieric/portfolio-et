import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import { Projects } from "../components/Projects";

export default function Home({ data }) {
  return (
    <Layout>
      <Hero data={data.file.childImageSharp}/>
      <Projects />
    </Layout>
  );
}

export const query = graphql`
  query ProfilePhoto {
    file(relativePath: { eq: "images/cloud1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`;
