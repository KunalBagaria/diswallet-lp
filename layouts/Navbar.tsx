import React from 'react';
import styles from '@/styles/Navbar.module.scss';
import Image from 'next/image';
import logo from '@/images/logo.svg';
import Link from 'next/link';
import {
  DefaultLink,
  AddToDiscord,
} from '@/layouts/Components';

interface LinkInterface {
  [key: string]: string
}

const Links: LinkInterface = {
  Overview: '/',
  Security: '/#security',
  Features: '/#features',
  Discord: 'https://discord.gg/uCAqt9MRG5',
};

export const Navbar = function Navbar() {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src={logo} alt="" />
          </a>
        </Link>
      </div>
      <div className={styles.links}>
        {Object.keys(Links).map((key) => (
          <DefaultLink key={key} href={Links[key]}>
            {key}
          </DefaultLink>
        ))}
      </div>
      <AddToDiscord />
    </nav>
  );
};
