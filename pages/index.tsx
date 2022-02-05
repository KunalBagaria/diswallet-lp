import type { NextPage } from 'next';
import React from 'react';
import { DefaultHead } from '@/layouts/Head';
import { FirstSection } from '@/layouts/Sections';

const Home: NextPage = function HomePage() {
  return (
    <>
      <DefaultHead />
      <FirstSection />
    </>
  );
};

export default Home;
