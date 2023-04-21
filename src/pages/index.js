import * as React from "react";
import Layout from "../components/layout";
import * as styles from "../styles/home.module.css";
import { Link } from "gatsby";

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h3>Programmer & Developer</h3>
          <p>"Make something wonderful and put it out there" -Steve Jobs</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <img
          src="/banner2.jpg"
          alt="site banner"
          style={{ maxWidth: "100%" }}
        />
      </section>
    </Layout>
  );
}
