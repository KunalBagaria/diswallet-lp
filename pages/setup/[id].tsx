import type { NextPage } from 'next';
import React from 'react';
import { DefaultHead } from '@/layouts/Head';
import { Navbar } from '@/layouts/Navbar';
import {
  Footer,
} from '@/layouts/Footer';
import { SetupLayout } from '../../layouts/Setup';

const Setup: NextPage = function SetupPage() {
  return (
    <>
      <DefaultHead />
      <div className="main-padding">
        <Navbar />
        <SetupLayout />
      </div>
      <Footer />
    </>
  );
};

export default Setup;
