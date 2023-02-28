import React from "react";
import About from "./about";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Index(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Metapage docs and tutorials">
      <main>
        <div>The root thing</div>
      </main>
    </Layout>
  );
}
