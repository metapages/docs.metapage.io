import clsx from 'clsx';

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Open Source',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Metapages are built on top of open source technologies. You will always be able to run
        your metapages <a href="/blog/metapages-are-deep-time-persistent">forever</a>.
      </>
    ),
  },
  {
    title: 'Focus on Collaboration',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The units of combination and collaboration are websites. By connecting websites together, we 
        can create arbitrarily complex systems, then preserve and share them.
      </>
    ),
  },
  {
    title: 'Storehouse of Shared Knowledge',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The <a href="https://metapage.io">metapage application</a> is a storehouse of shared knowledge and techniques.
        It is the fastest way to iterate on technical ideas, especially when collaborating with others.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
