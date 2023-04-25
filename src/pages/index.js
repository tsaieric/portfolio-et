import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Hero from "../components/Hero";

export default function Home({ data }) {
  return (
    <Layout>
      <Hero data={data.file.childImageSharp}/>
      <Hero data={data.file.childImageSharp}/>
    </Layout>
  );
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "images/cloud2.jpg" }) {
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
