import React from 'react';
import Link from 'next/link';
import homeStyles from '@/styles/Home.module.scss';
import styles from '@/styles/Components.module.scss';
import discordIcon from '@/images/icons/social/Discord.svg';

export const FirstSectionCircle = function Circle() {
  return <div className={homeStyles.firstSectionCircle} />;
};

export interface DefaultLinkProps {
  href: string,
  children?: React.ReactNode
}

export const DefaultLink = function DefaultLink(props: DefaultLinkProps) {
  return (
    <Link href={props.href}>
      <a className={styles.defaultLink}>
        {props.children}
      </a>
    </Link>
  );
};

declare global {
  interface Window {
    Tally: any;
  }
}

type PopupOptions = {
  layout?: 'default' | 'modal';
  width?: number;
  alignLeft?: boolean;
  hideTitle?: boolean;
  overlay?: boolean;
  emoji?: {
    text: string;
    animation: 'none' | 'wave' | 'tada' | 'heart-beat' | 'spin' | 'flash' | 'bounce' | 'rubber-band' | 'head-shake';
  };
};

const Options: PopupOptions = {
  layout: 'modal',
  width: 800,
  overlay: true,
  emoji: {
    text: '👋',
    animation: 'rubber-band',
  },
};

export const AddToDiscord = function AddToDiscord({ overrideHeight, overrideWidth }: {
  overrideHeight?: string,
  overrideWidth?: string
}) {
  return (
    <div>
      {typeof window !== 'undefined' && (
        <div
          className={styles.discordBtn}
          style={{
            height: overrideHeight, width: overrideWidth,
          }}
          // rel="noopener noreferrer"
          // target="_blank"
          // href={process.env.NEXT_PUBLIC_DISCORD_INVITE ?
          // process.env.NEXT_PUBLIC_DISCORD_INVITE : ''}
          onClick={window.Tally && !process.env.NEXT_PUBLIC_DISCORD_INVITE ? window.Tally.openPopup('mKNYzn', Options) : () => {}}
        >
          <span>{process.env.NEXT_PUBLIC_DISCORD_INVITE ? 'Add to Discord' : 'Join Waitlist'}</span>
          <img src={discordIcon.src} alt="Add to Discord" />
        </div>
      )}
    </div>
  );
};

export const Body = function Body({ children }: any) {
  return (
    <div className={styles.body}>
      {children}
    </div>
  );
};

export const HorizontalSpaceBetween = function HorizontalSpaceBetween({ children }: any) {
  return (
    <div className={styles.spaceBetweenHorizontal}>
      {children}
    </div>
  );
};
