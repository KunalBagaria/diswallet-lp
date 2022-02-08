import React from 'react';
import styles from '@/styles/Home.module.scss';
import components from '@/styles/Components.module.scss';
import {
  FirstSectionCircle,
  Body,
  AddToDiscord,
} from './Components';

export const FirstSection = function FirstSection() {
  return (
    <>
      <FirstSectionCircle />
      <Body>
        <div className={styles.firstSectionContainer}>
          <h1 style={{ margin: '0rem' }} className={components.smallHeading}>Get your Discord Server powered with a</h1>
          <h1 style={{ marginTop: '1rem', marginBottom: '0rem' }} className={components.gradientHeading}>Secured Crypto Wallet</h1>
          <p style={{ marginTop: '3rem', marginBottom: '5rem' }} className={components.bigSubHeading}>
            {`DisWallet makes it easier to do secured transactions
            with your fellow Discord Members in just a few simple commands.`}
          </p>
          <AddToDiscord overrideHeight="5.8rem" />
        </div>
      </Body>
    </>
  );
};
