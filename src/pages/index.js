/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import Plot1 from '../../static/img/plot1.png'
import Plot2 from '../../static/img/plot2.png'
import Plot3 from '../../static/img/plot3.png'
import Plot4 from '../../static/img/plot4.png'
import Plot5 from '../../static/img/plot5.png'


const features = [
  {
    title: <>Reduces human bias</>,
    imageUrl: 'img/take_control.svg',
    description: (
      <>
        <ul>
          <li>Automated hyperparameter optimization with evolutionary algorithms from Facebook's AI library <a href="https://facebookresearch.github.io/nevergrad">Nevergrad</a></li>
          <li>Ridge regression in order to regularize multi-collinearity and prevent overfitting</li>
          <li>Facebook's <a href="https://facebook.github.io/prophet/">Prophet</a> library to automatically decompose the trend, seasonality and holidays patterns</li>
        </ul>
      </>
    ),
  },
  {
    title: <>Aligns with the ground-truth</>,
    imageUrl: 'img/calibrate.svg',
    description: (
      <>
        <ul>
          <li>
            It calibrates models based on ground-truth methodologies (Geo-based, Facebook lift, MTA, etc.)
          </li>
          <li>
            Facebook <a href="https://facebookresearch.github.io/nevergrad">Nevergrad</a>'s multi-objective optimization minimizing the error between MMM prediction and ground-truth
          </li>
        </ul>
      </>
    ),
  },
  {
    title: <>Enables actionable decision making</>,
    imageUrl: 'img/focus_on_what_matters.svg',
    description: (
      <>
        <ul>
          <li>
            Budget allocator using a gradient-based constrained non-linear solver to maximize the outcome by reallocating budgets
          </li>
          <li>
            Enables frequent modeling outcomes due to stronger automation
          </li>
          <li>
            Allows intuitive model comparisons via automatically generated model one-pagers
          </li>
        </ul>
      </>
    ),
  },
  {
    title: <>Private by Design</>,
    imageUrl: 'img/security.svg',
    description: (
      <>
        <ul>
          <li>
            Privacy friendly, with no requirement for PII or Individual log level
            data
          </li>
          <li>Not dependent on Cookies or Pixel data</li>
        </ul>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      <div className='feature-item'>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p className={styles.descriptionSectionText}>{description}</p>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      description={siteConfig.tagline}
    >
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="landing-container">
          <div className="landing-left-section">
            <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
            <p className={clsx('hero__subtitle', styles.heroSubtitle)}>An automated Marketing Mix Modeling (MMM) open source code.</p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--primary button--lg'
                )}
                to={useBaseUrl('docs/quick-start/')}
              >
                Get Started
              </Link>
              <Link
                className={clsx(
                  'button button--secondary button--lg'
                )}
                to={'https://gallery.shinyapps.io/087-crandash/'}
              >
                Try Demo
              </Link>
            </div>
          </div>
          <div className="landing-right-section">
            <img className='p1' src={Plot1}/>
            <img className='p2' src={Plot2}/>
            <img className='p5' src={Plot5}/>
            <img className='p3' src={Plot3}/>
            <img className='p4' src={Plot4}/>
          </div>
        </div>
      </header>
      <main>
        <div className='main-content-section'>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--5', styles.descriptionSection)}>
                <h5> What is Robyn </h5>
                <h2>Open Source and Automated <b>Marketing Mix Modeling</b></h2>
                <p className={styles.descriptionSectionText}>{siteConfig.tagline}</p>
              </div>
              <div className="col col--7 relative r">
                <div className='c1'></div>
                <div className='c2'></div>
                <iframe
                  width="95%"
                  height="450"
                  src="https://www.youtube.com/embed/8SyKRpsXn44"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
        </div>
        <div className='main-content-section why'>
          <div className="container">
            <div>
              <h5> Why Robyn </h5>
              <h2>Efficiency and effectivity, <b>right out of the box</b></h2>
            </div>
          {features && features.length > 0 && (
              <div className="row">
                {features.map(({ title, imageUrl, description }) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
                <div className='c6'></div>
                <div className='c7'></div>
              </div>
          )}
          </div>
        </div>
        <div className='main-content-section'>
          <div className="container">
            <div className="row">
              <div className="col col--7 relative l">
                <div className='c3'></div>
                <div className='c4'></div>
                <div className='c5'></div>
                <iframe
                  title="Robyn walkthrough video"
                  width="95%"
                  height="450"
                  src="https://www.youtube.com/embed/aIiadcfL4uw"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
              <div className={clsx('col col--5', styles.descriptionSection)}>
                <h5> Learn More </h5>
                <h2>Robyn Code <b>Walkthrough</b> Video</h2>
                <p className={styles.descriptionSectionText}>Please watch this walkthrough video to understand better how the code works</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
