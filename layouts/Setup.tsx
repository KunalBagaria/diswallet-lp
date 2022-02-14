import React, { useState } from 'react';

export const SetupLayout = function SeedPhraseInfoComponent() {
  const [currentStep, setCurrentStep] = useState(1);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const totalSteps = 4;

  return (
    <div className="container mx-auto place-content-center flex justify-center mt-36 border-4 border-indigo-600">
      <div className=" flex flex-col m-20 w-2/6 border-4 border-indigo-600 bg-card-background-dark rounded-md">
        <div className="ml-10 mr-10 mt-10">
          <div className="w-full bg-progress-empty rounded-md">
            <div className=" bg-progress-green h-3 rounded-md" style={{ width: `${(currentStep / totalSteps) * 100}%` }} />
          </div>
        </div>
        <div className="ml-10 mr-10 mt-8 text-2xl text-bluish-dark">
          Step
          {' '}
          {currentStep}
          /
          {totalSteps}
        </div>

        {currentStep === 1 && (
          <div className="flex flex-col ml-10 mt-14 mb-16 w-full">
            <div className="text-4xl text-white font-bold">
              Setup a Wallet Password
            </div>

            <input value={password} onChange={(e) => setPassword(e.target.value)} className="mt-14 mr-20 p-10 text-2xl h-20  bg-input-dark rounded-xl text-input-dark-text" placeholder="Enter Password" />
            <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="mt-8 mr-20 p-10 text-2xl h-20 bg-input-dark rounded-xl text-input-dark-text" placeholder="Confirm Password" />

            <button className="mt-24 mr-20 text-2xl h-20 bg-button-disabled rounded-xl" type="submit"> Continue </button>
          </div>
        )}
      </div>

    </div>
  );
};
