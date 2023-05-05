import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import { Projects } from "../components/Projects";
import About from "../components/About";
import Career from "../components/Career";
import Contact from "../components/Contact";

export default function Home({ data }) {
  return (
    <Layout>
      <Hero data={data.file.childImageSharp} />
      <About data={data.file.childImageSharp} />
      <Projects />
      <Career />
      <Contact />
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
