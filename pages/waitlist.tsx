import React from 'react';
import type { NextPage } from 'next';
import { DefaultHead } from '@/layouts/Head';

const Waitlist: NextPage = function Waitlist() {
  return (
    <>
      <DefaultHead />
      <iframe
        title="Waitlist Form"
        className="tally-iframe"
        src="https://tally.so/r/mKNYzn"
        style={{
          border: 'none',
          width: '100vw',
          height: '100vh',
          overflow: 'auto',
          display: 'fixed',
          top: 0,
          left: 0,
        }}
      />
      <style>
        {`
          #__next {
            overflow: hidden;
            margin: 0;
            padding: 0;
          }
        `}
      </style>
    </>
  );
};

export default Waitlist;
