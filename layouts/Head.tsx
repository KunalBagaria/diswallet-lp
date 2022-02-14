import React from 'react';
import Head from 'next/head';

export const DefaultHead = function DefaultHead() {
  return (
    <Head>
      <title>DisWallet</title>
      <meta name="description" content="The Solana Wallet that works inside Discord" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.png" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://diswallet.app/" />
      <meta property="og:title" content="DisWallet" />
      <meta property="og:description" content="The Solana Wallet that works inside Discord" />
      <meta property="og:image" content="https://i.imgur.com/KmArkjU.gif" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://diswallet.app/" />
      <meta property="twitter:title" content="DisWallet" />
      <meta property="twitter:description" content="The Solana Wallet that works inside Discord" />
      <meta property="twitter:image" content="https://i.imgur.com/KmArkjU.gif" />
    </Head>
  );
};
