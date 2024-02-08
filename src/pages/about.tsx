import React from 'react';

import clsx from 'clsx';

import Link from '@docusaurus/Link';
import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Metapages Intro
          </Link>
        </div>
      </div>
    </header>
  );
}

// export default function About(): JSX.Element {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`${siteConfig.title}`}
//       description="Metapage docs and tutorials">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }

const About: () => JSX.Element =  () =>  <Redirect to="/docs" />;
export default About;