import type { NextPage } from 'next';
import React from 'react';
import { DefaultHead } from '@/layouts/Head';
import { Navbar } from '@/layouts/Navbar';
import {
  FirstSection,
  SecondSection,
  SecurtiySection,
  ThirdSection,
} from '@/layouts/Sections';
import { Footer } from '@/layouts/Footer';

const Home: NextPage = function HomePage() {
  return (
    <>
      <DefaultHead />
      <div className="main-padding">
        <Navbar />
        <FirstSection />
      </div>
      <SecondSection />
      <div className="main-padding">
        <ThirdSection />
        <SecurtiySection />
      </div>
      <Footer />
    </>
  );
};

export default Home;
