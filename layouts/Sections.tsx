import React from 'react';
import styles from '@/styles/Home.module.scss';
import components from '@/styles/Components.module.scss';
import discordSS from '@/images/screenshots/discord.png';
import ThirdSectionBlur from '@/images/blur-effects/SectionThree.png';
import documentationIcon from '@/images/icons/documentation.svg';
import solanaIcon from '@/images/icons/solana.svg';
import ncIcon from '@/images/icons/non-custodial.svg';
import setupIcon from '@/images/icons/setup.svg';
import tickIcon from '@/images/icons/green-check.svg';
import lockerImage from '@/images/locker.png';
import {
  FirstSectionCircle,
  Body,
  AddToDiscord,
  HorizontalSpaceBetween,
  FeaturesGrid,
} from './Components';

export const FirstSection = function FirstSection() {
  return (
    <>
      <FirstSectionCircle />
      <Body>
        <div className={styles.firstSectionContainer}>
          <h1 style={{ margin: '0rem' }} className={components.smallHeading}>Get your Discord Server powered with a</h1>
          <h1 style={{ marginTop: '1rem', marginBottom: '0rem' }} className={components.gradientHeading}>Secured Crypto Wallet</h1>
          <p style={{ marginTop: '3rem', marginBottom: '5rem' }} className={`${components.bigSubHeading} ${styles.bigSubHeadingAlign}`}>
            {`DisWallet makes it easier to do secured transactions
            with your fellow Discord Members in just a few simple commands.`}
          </p>
          <AddToDiscord
            overrideHeight="5.8rem"
            overrideWidth="21.8rem"
            overrideBackground="linear-gradient(267.87deg, #0038FF -15.4%, #DE15D6 79.13%, #FBD7F9 109.93%)"
          />
        </div>
      </Body>
    </>
  );
};

export const SecondSection = function SecondSection() {
  return (
    <div className={styles.secondSectionContainer}>
      <HorizontalSpaceBetween>
        <div>
          <img style={{ width: '120rem' }} src={discordSS.src} alt="" />
        </div>
        <div className={styles.secondSectionText}>
          <h1 className={components.smallHeading}>
            {`We are bringing the next phase of
            Community transactions in motion`}
          </h1>
          <p className={components.smallSubHeading} style={{ marginTop: '2.3rem' }}>
            {`Some subtext about how this is beneficial for DAOs
            and other web communities. Can also mention how this can be
            used in personal and professional use.`}
          </p>
        </div>
      </HorizontalSpaceBetween>
    </div>
  );
};

const Features = [
  {
    title: 'Documentation Ready',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue sagittis magna ipsum semper tortor, gravida diam pulvinar. Et ac neque, porttitor tempor ipsum ultrices diam turpis.
    `,
    icon: documentationIcon,
  }, {
    title: 'Easy Setup',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue sagittis magna ipsum semper tortor, gravida diam pulvinar. Et ac neque, porttitor tempor ipsum ultrices diam turpis.
    `,
    icon: setupIcon,
  }, {
    title: 'Non-Custodial',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue sagittis magna ipsum semper tortor, gravida diam pulvinar. Et ac neque, porttitor tempor ipsum ultrices diam turpis.
    `,
    icon: ncIcon,
  }, {
    title: 'Powered by Solana',
    description: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue sagittis magna ipsum semper tortor, gravida diam pulvinar. Et ac neque, porttitor tempor ipsum ultrices diam turpis.
    `,
    icon: solanaIcon,
  },
];

export const ThirdSection = function ThirdSection() {
  return (
    <section id="features" className={styles.thirdSectionContainer}>
      <img alt="" src={ThirdSectionBlur.src} className={styles.thirdSectionBlur} />
      <h1
        className={components.smallHeading}
        style={{
          marginTop: '17rem',
          marginBottom: '0rem',
        }}
      >
        Discord 🤝 Crypto Wallet is the best partnership ever
      </h1>
      <p
        className={components.bigSubHeading}
        style={{
          marginTop: '2.4rem',
        }}
      >
        A short sub-heading of max 50 character goes in here
      </p>
      <FeaturesGrid>
        {Features.map((feature, index) => (
          <div key={index} className={components.feature}>
            <img alt="" src={feature.icon.src} />
            <p style={{ marginTop: '2.2rem' }} className={components.bigBoldText}>
              {feature.title}
            </p>
            <p style={{ marginTop: '2.2rem' }} className={components.smallSubHeading}>
              {feature.description}
            </p>
          </div>
        ))}
      </FeaturesGrid>
    </section>
  );
};

const SecurityPoints = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
];

export const SecurtiySection = function SecurtiySection() {
  return (
    <section id="security" className={styles.securitySectionContainer}>
      <HorizontalSpaceBetween>
        <div
          style={{ maxWidth: '62rem', padding: '5.5rem 0rem' }}
        >
          <h1
            className={components.smallHeading}
            style={{ marginBottom: '0rem' }}
          >
            DisWallet focuses on
            <span className={components.gradientText}> Security </span>
            more than anything else
          </h1>
          <p
            className={components.smallSubHeading}
            style={{ marginTop: '1.6rem' }}
          >
            {`
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut augue sagittis magna ipsum semper tortor, gravida diam pulvinar.
            `}
          </p>
          <div
            style={{ marginTop: '3.5rem' }}
          >
            {SecurityPoints.map((point, index) => (
              <div
                key={index}
                style={{ display: 'flex', alignItems: 'center', marginTop: '2.3rem' }}
              >
                <img alt="" src={tickIcon.src} />
                <p
                  className={components.smallSubHeading}
                  style={{ marginLeft: '1.85rem' }}
                >
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img style={{ width: '50rem' }} alt="" src={lockerImage.src} />
        </div>
      </HorizontalSpaceBetween>
    </section>
  );
};
