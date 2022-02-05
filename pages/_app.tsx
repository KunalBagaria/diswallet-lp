import '../styles/globals.scss';
import React from 'react';
import type { AppProps } from 'next/app';

const LP = function LP({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
};

export default LP;
