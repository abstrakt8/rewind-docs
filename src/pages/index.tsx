import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <img
          src={"/img/icon.png"}
          className={styles.logo}
          alt={"Rewind Logo"}
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg download-button"
            to="https://github.com/abstrakt8/rewind/releases/latest"
          >
            <span>Download for</span>
            <div className={"os-logos"}>
              <img className={"os"} src={"/img/windows.svg"} />
              <img className={"os"} src={"/img/linux.svg"} />
              <img className={"os"} src={"/img/apple.svg"} />
            </div>
          </Link>
          {/*<Link*/}
          {/*  className="button button--secondary button--lg"*/}
          {/*  to="/docs/intro"*/}
          {/*>*/}
          {/*  Docs*/}
          {/*</Link>*/}
        </div>
      </div>
    </header>
  );
}

function Showcase() {
  return (
    <div className={"container showcase"}>
      <h1 className={""}>You missed it? Just Rewind.</h1>
      <img
        src={"/img/showcase.gif"}
        alt={"rewind showcase"}
        className={"box"}
      />
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <Showcase />
        {/*<HomepageFeatures />*/}
      </main>
    </Layout>
  );
}
