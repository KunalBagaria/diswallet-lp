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
    Documentation: 'https://kunalbagaria.notion.site/DisWallet-Feature-Documentation-8e15d3b517574b6681f5dc7728aeddf6',
    'Join Waitlist': '/waitlist',
  },
  'Connect with us': {
    Discord: 'https://discord.gg/uCAqt9MRG5',
    Twitter: 'https://twitter.com/DisWalletBot',
  },
};

export const Footer = function Footer({ fixed }: {
  fixed?: boolean
}) {
  return (
    <div
      className={styles.footerContainer}
      style={{
        position: fixed ? 'absolute' : 'relative',
        bottom: fixed ? 0 : '',
      }}
    >
      <div className={styles.footerFlex}>
        <VerticalSpaceBetween>
          <img alt="Logo" src={logo.src} />
          <p
            className={components.lightText}
            style={{ maxWidth: '48rem', marginTop: '4rem' }}
          >
            {`DisWallet makes it easier to do fast and secured transactions
            with your community members in just a few simple commands.`}
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
