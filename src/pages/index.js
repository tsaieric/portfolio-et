import * as React from "react";
import Layout from "../components/layout";
import * as styles from "../styles/home.module.css";
import { Link } from "gatsby";

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Program</h2>
          <h3>Program and Play</h3>
          <p>Software engineer & Streamer</p>
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
