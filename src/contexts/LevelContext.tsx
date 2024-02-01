import React, { useState } from 'react';

export const LevelContext = React.createContext(0);

export const LevelProvider = ({ children }: any) => {
  const [level, setLevel] = useState<number>(0);

  const increaseLevel = () => {
    setLevel(prevLevel => prevLevel + 1);
  }

  const decreaseLevel = () => {
    setLevel(prevLevel => prevLevel - 1);
  }

  const resetLevel = () => {
    setLevel(0);
  }

  const data: any = {
    level,
    increaseLevel,
    decreaseLevel,
    resetLevel,
  };
  return <LevelContext.Provider value={data}>{children}</LevelContext.Provider>;
};
