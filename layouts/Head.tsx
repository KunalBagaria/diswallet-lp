import React from 'react';
import Head from 'next/head';

export const DefaultHead = function DefaultHead() {
  return (
    <Head>
      <title>DisWallet</title>
      <meta name="description" content="The Solana Wallet that works inside Discord" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};
