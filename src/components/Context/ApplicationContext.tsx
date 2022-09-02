import React, { createContext, useState } from 'react';
import { IWord } from '../../models/IWord';
import { words } from '../../pages/TextBook/ExampleData';
type Props = {
  children?: JSX.Element | JSX.Element[];
};
interface IContext {
  footerVisibility: boolean;
  onSetFooterVisibility: (value: boolean) => void;
  initialLevel: string;
  onSetInitialLevel: (value: string) => void;
  initialPage: string;
  onSetInitialPage: (value: string) => void;
  wordsList: [] | IWord[];
  onSetWordsList: (value: IWord[] | []) => void;
}

export const ApplicationContext = createContext({} as IContext);

export const ApplicationProvider = (props: Props) => {
  const [footerVisibility, setFooterVisibility] = useState(true);
  const [initialLevel, setInitialLevel] = useState('1');
  const [initialPage, setInitialPage] = useState('1');
  const [wordsList, setWordsList] = useState<[] | IWord[]>([]);
  const onSetFooterVisibility = (value: boolean) => {
    setFooterVisibility(value);
  };
  const onSetInitialLevel = (value: string) => {
    setInitialLevel(value);
  };
  const onSetInitialPage = (value: string) => {
    setInitialPage(value);
  };
  const onSetWordsList = (value: IWord[] | []) => {
    setWordsList(value);
  };

  return (
    <ApplicationContext.Provider
      value={{
        footerVisibility: footerVisibility,
        onSetFooterVisibility,
        initialLevel: initialLevel,
        onSetInitialLevel,
        initialPage: initialPage,
        onSetInitialPage,
        wordsList: wordsList,
        onSetWordsList,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};
