import React, { createContext, useState } from 'react';
type Props = {
  children?: JSX.Element | JSX.Element[];
};
interface IContext {
  footerVisibility: boolean;
  onSetFooterVisibility: (value: boolean) => void;
  initialLevel: string;
  onSetInitialLevel: (value: string) => void;
}

export const ApplicationContext = createContext({} as IContext);

export const ApplicationProvider = (props: Props) => {
  const [footerVisibility, setFooterVisibility] = useState(true);
  const [initialLevel, setInitialLevel] = useState('1');
  const onSetFooterVisibility = (value: boolean) => {
    setFooterVisibility(value);
  };
  const onSetInitialLevel = (value: string) => {
    setInitialLevel(value);
  };

  return (
    <ApplicationContext.Provider
      value={{
        footerVisibility: footerVisibility,
        onSetFooterVisibility,
        initialLevel: initialLevel,
        onSetInitialLevel,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};
