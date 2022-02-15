import '../styles/globals.scss';
import React from 'react';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

const LP = function LP({ Component, pageProps }: AppProps) {
  return (
    <>
      <div
        style={{ fontSize: '160%' }}
      >
        <Toaster />
      </div>
      <Component {...pageProps} />
    </>
  );
};

export default LP;
