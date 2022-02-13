import React from 'react';
import styles from '@/styles/Footer.module.scss';
import components from '@/styles/Components.module.scss';
import logo from '@/images/logo.svg';
import {
  VerticalSpaceBetween,
  DefaultLink,
} from './Components';

interface LinkTypes {
  [key: string]: {
    [key: string]: string
  }
}

const Links: LinkTypes = {
  'Get Started': {
    Overview: '/',
    Features: '/#features',
    Security: '/#security',
    Developer: 'https://twitter.com/kb24x7',
  },
  Resources: {
    Documentation: '/documentation',
    'Join Waitlist': '/waitlist',
  },
  'Connect with us': {
    Discord: 'https://discord.gg/4YWcXmn7Zu',
    Twitter: 'https://twitter.com/DisWalletBot',
  },
};

export const Footer = function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerFlex}>
        <VerticalSpaceBetween>
          <img alt="Logo" src={logo.src} />
          <p
            className={components.lightText}
            style={{ maxWidth: '48rem', marginTop: '4rem' }}
          >
            {`DisWallet makes it easier to do secured transactions
            with your fellow Discord Members in just a few simple commands.`}
          </p>
        </VerticalSpaceBetween>
        {Object.keys(Links).map((key, index) => (
          <div key={index} style={{ paddingTop: '1.25rem' }}>
            <VerticalSpaceBetween>
              <h3 className={components.mainBoldText}>{key}</h3>
              <div
                style={{
                  marginTop: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                {Object.keys(Links[key]).map((subKey, subIndex) => (
                  <div key={subIndex} style={{ marginTop: '1rem' }}>
                    <DefaultLink href={Links[key][subKey]}>
                      {[subKey]}
                    </DefaultLink>
                  </div>
                ))}
              </div>
            </VerticalSpaceBetween>
          </div>
        ))}
      </div>
    </div>
  );
};
