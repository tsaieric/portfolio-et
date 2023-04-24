import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";
import { Link, graphql } from "gatsby";

export default function Projects({ data }) {
  const projects = data.projects.nodes;

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Portfolio</h2>
        <div className={styles.projects}>
          {projects.map((project) => (
            <Link to={"/projects/" + project.frontmatter.link} key={project.id}>
              <div>
                <h3> {project.frontmatter.title} </h3>
                <p> {project.frontmatter.stack} </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

//export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {frontmatter: {order: ASC}}) {
      nodes {
        frontmatter {
          link
          stack
          title
          order
        }
        id
      }
    }
  }
`;
