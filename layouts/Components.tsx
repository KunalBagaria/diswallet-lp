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

export const AddToDiscord = function AddToDiscord({ overrideHeight, overrideWidth }: {
  overrideHeight?: string,
  overrideWidth?: string
}) {
  return (
    <a className={styles.discordBtn} style={{ height: overrideHeight, width: overrideWidth }} rel="noopener noreferrer" target="_blank" href={process.env.NEXT_PUBLIC_DISCORD_INVITE}>
      <span>Add to Discord</span>
      <img src={discordIcon.src} alt="Add to Discord" />
    </a>
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
