import React from 'react';
import Switch from './Switch';

type Props = {
  theme: string;
  setTheme: (val: string) => void;
};

const Header: React.FC<Props> = ({ theme, setTheme }) => {
  return (
    <header className="container mx-auto py-2 sm:py-3 flex items-center justify-between">
      <div className="logo flex items-center gap-2 sm:gap-3">
        <img className="logoImg w-10 sm:w-16" src="img/logo.svg" alt="logo" />
        <span className="text-white text-xl sm:text-2xl">
          Weather React App
        </span>
      </div>

      <Switch theme={theme} setTheme={setTheme} />
    </header>
  );
};

export default Header;
