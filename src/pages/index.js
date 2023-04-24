import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Hero from "../components/Hero";

export default function Home({ data }) {
  // const bannerImg = getImage(data.file.childImageSharp.gatsbyImageData);
  return (
    <Layout>
      <Hero data={data.file.childImageSharp}/>
      {/* <section className={styles.header}>
        <div>
          <h3>Programmer & Developer</h3>
          <p>"Make something wonderful and put it out there" -Steve Jobs</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
      </section> */}
    </Layout>
  );
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "images/selfportrait.jpg" }) {
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
