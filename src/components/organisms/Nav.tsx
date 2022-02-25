import SettingsSVG from 'public/svg/settings.svg';
import React from 'react';
import Stopwatch from 'src/components/atoms/Stopwatch';

const Nav: React.FC = () => {
  return (
    <header className="border-b-nwordle-gray-200 flex h-12 items-center justify-between border-b px-6">
      <div></div>
      <div className="flex gap-6">
        <Stopwatch />

        <button type="button" tabIndex={-1} aria-label="Settings">
          <SettingsSVG />
        </button>
      </div>
    </header>
  );
};

export default Nav;
