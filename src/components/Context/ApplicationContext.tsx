import React, { createContext, useState } from 'react';
type Props = {
  children?: JSX.Element | JSX.Element[];
};
interface IContext {
  footerVisibility: boolean;
  onSetFooterVisibility: (value: boolean) => void;
}
export const ApplicationContext = createContext({} as IContext);

export const ApplicationProvider = (props: Props) => {
  const [footerVisibility, setFooterVisibility] = useState(true);
  const onSetFooterVisibility = (value: boolean) => {
    setFooterVisibility(value);
  };
  return (
    <ApplicationContext.Provider
      value={{
        footerVisibility: footerVisibility,
        onSetFooterVisibility,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};
