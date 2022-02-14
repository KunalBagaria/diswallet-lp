import type { NextPage } from 'next';
import React from 'react';
import { DefaultHead } from '@/layouts/Head';
import { Navbar } from '@/layouts/Navbar';
import {
  Footer,
} from '@/layouts/Sections';
import { SetupLayout } from '../layouts/Setup';

const Home: NextPage = function HomePage() {
  return (
    <>
      <DefaultHead />
      <Navbar />
      <SetupLayout />
      <Footer />
    </>
  );
};

export default Home;
