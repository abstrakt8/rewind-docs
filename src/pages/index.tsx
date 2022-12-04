import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Octokit } from "@octokit/rest";

import styles from "./index.module.css";
import UAParser from "ua-parser-js";

function useOSInfo() {
  const uaParser = new UAParser();
  const { name } = uaParser.getOS();
  console.log(name);
  switch (name) {
    case "Windows":
      return { key: "windows", name: "Windows" };
    case "Mac OS":
      return { key: "macos", name: "macOS" };
    default:
      return { key: "linux", name: "Linux" };
  }
}

// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
// </svg>

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  const { key, name } = useOSInfo();
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
            <div className={"flex flex-row gap-1 items-center"}>
              <span>Download for</span>
              <span>{name}</span>
            </div>
          </Link>
          {/*<Link*/}
          {/*  className="button button--secondary button--lg"*/}
          {/*  to="/docs/intro"*/}
          {/*>*/}
          {/*  Docs*/}
          {/*</Link>*/}
        </div>
        <div className={"container showcase"}>
          <h1 className={""}>Missed it? Just Rewind.</h1>
        </div>
      </div>
    </header>
  );
}
function getRewindFileName(os: string, version: string) {
  switch (os) {
    case "windows":
      return `Rewind-Setup-${version}.exe`;
    case "macos":
      return `Rewind-${version}.dmg`;
    case "linux":
      return `Rewind-${version}.AppImage`;
  }
}

export function Example() {
  const { key, name } = useOSInfo();
  const [latestVersion, setLatestVersion] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const latestReleaseGithubLink =
    "https://github.com/abstrakt8/rewind/releases/latest";

  useEffect(() => {
    (async function () {
      const octokit = new Octokit();
      const response = await octokit.request(
        "GET /repos/abstrakt8/rewind/releases/latest",
        {
          owner: "abstrakt8",
          repo: "rewind",
        }
      );
      const { tag_name } = response.data;
      const version = (tag_name as string).substr(1);
      setLatestVersion(version);
    })();
  }, []);
  useEffect(() => {
    const prefix = `https://github.com/abstrakt8/rewind/releases/download/v${latestVersion}`;
    setDownloadLink(`${prefix}/${getRewindFileName(key, latestVersion)}`);
  }, [latestVersion]);

  return (
    <div className="bg-gray-100">
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
          <div className="relative h-full">
            <svg
              className="absolute right-full translate-y-1/3 translate-x-1/4 transform sm:translate-x-1/2 md:translate-y-1/2 lg:translate-x-full"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
              />
            </svg>
            <svg
              className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
              />
            </svg>
          </div>
        </div>

        <div className="relative pt-6 pb-16 sm:pb-16">
          <div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
            <div className="text-center flex flex-col items-center">
              <img
                src={"/img/icon.png"}
                // className={styles.logo}
                className={"w-32"}
                alt={"Rewind Logo"}
              />
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Missed it?</span>
                <span className="block text-gray-600">Just Rewind.</span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                Over 30,000 Downloads already!
              </p>
              <div className={"flex flex-row gap-0.5 cursor-pointer"}>
                <div
                  className={
                    "bg-blue-600 text-white rounded-l py-4 px-8 text-2xl"
                  }
                  onClick={() => window.open(downloadLink)}
                >
                  Download for {name}
                </div>
                <div
                  className={
                    "bg-blue-600 text-white rounded-r py-4 px-1 text-2xl"
                  }
                  onClick={() => window.open(latestReleaseGithubLink)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative pb-24">
          <div className="mx-auto max-w-7xl">
            <video className={"mx-auto max-w-7xl px-4 sm:px-6"} controls>
              <source src={"/showcase.mp4"} type={"video/mp4"} />
            </video>
          </div>
        </div>
      </div>
      {/*<div className="bg-gray-800">*/}
      {/*  <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8"></div>*/}
      {/*</div>*/}
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <Example />
    </Layout>
  );
}
