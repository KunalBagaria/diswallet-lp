import React from 'react';
import Head from 'next/head';

export const DefaultHead = function DefaultHead() {
  return (
    <Head>
      <title>DisWallet</title>
      <meta name="description" content="The Solana Wallet that works inside Discord" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content="DisWallet" />
      <meta property="og:description" content="The Solana Wallet that works inside Discord" />
      <meta property="og:image" content="https://i0.wp.com/c.tenor.com/K9XG-Ir3F0oAAAAd/bunny-rabbit.gif" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};
