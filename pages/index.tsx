import type { NextPage } from 'next';
import React from 'react';
import { DefaultHead } from '@/layouts/Head';
import { Navbar } from '@/layouts/Navbar';
import {
  FirstSection,
  SecondSection,
} from '@/layouts/Sections';

const Home: NextPage = function HomePage() {
  return (
    <>
      <DefaultHead />
      <Navbar />
      <FirstSection />
      <SecondSection />
    </>
  );
};

export default Home;
