import React, { createContext, useState } from 'react';
import { IWord } from '../../models/IWord';
import { IUserInfo } from '../../service/constants';
import { Values } from '../../styles/constansts';
type Props = {
  children?: JSX.Element | JSX.Element[];
};
interface IContext {
  footerVisibility: boolean;
  onSetFooterVisibility: (value: boolean) => void;
  isAuthorized: boolean;
  onSetIsAuthorized: (value: boolean) => void;
  userInformation: IUserInfo;
  onSetUserInformation: (data: IUserInfo) => void;
  formToggler: string;
  onSetFormToggler: (value: string) => void;
  isLoading: boolean;
  onSetIsLoading: (value: boolean) => void;
  textBookWords: IWord[];
  onSetTextBookWords: (data: IWord[]) => void;
  wordsGroup: number;
  onSetGroup: (value: number) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  isTextBookInitGame: boolean;
  onSetIsTextBookInitGame: (value: boolean) => void;
}
export const ApplicationContext = createContext({} as IContext);
export const ApplicationProvider = (props: Props) => {
  const { LOGIN_FORM_STATE } = Values;
  const defaultAuthorizedValue = localStorage.getItem('userId') ? true : false;
  const userValue = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo') as string)
    : null;
  //отображение футера
  const [footerVisibility, setFooterVisibility] = useState(true);
  //статус авторизации
  const [isAuthorized, setIsAuthorized] = useState(defaultAuthorizedValue);
  //информация о юзере, name, ID
  const [userInformation, setUserInformation] = useState<IUserInfo>(
    userValue || { name: '', userID: '' },
  );
  //переключалка формы
  const [formToggler, setFormToggler] = useState<string>(LOGIN_FORM_STATE);
  //спиннер
  const [isLoading, setIsLoading] = useState(false);
  //массив слов
  const [textBookWords, setTextBookWords] = useState<IWord[]>([]);
  //группа слов
  const [wordsGroup, setGroup] = useState(0);
  //страница слов
  const [currentPage, setCurrentPage] = useState<number>(1);
  //отслеживание игры
  const [isTextBookInitGame, setIsTextBookInitGame] = useState(false);

  const onSetIsTextBookInitGame = (value: boolean) => {
    setIsTextBookInitGame(value);
  };
  const onSetFooterVisibility = (value: boolean) => {
    setFooterVisibility(value);
  };

  const onSetIsAuthorized = (value: boolean) => {
    setIsAuthorized(value);
  };

  const onSetUserInformation = (data: IUserInfo) => {
    setUserInformation(data);
  };

  const onSetFormToggler = (value: string) => {
    setFormToggler(value);
  };

  const onSetIsLoading = (value: boolean) => {
    setIsLoading(value);
  };

  const onSetTextBookWords = (data: IWord[]) => {
    setTextBookWords(data);
  };

  const onSetGroup = (value: number) => {
    setGroup(value);
  };

  return (
    <ApplicationContext.Provider
      value={{
        footerVisibility: footerVisibility,
        onSetFooterVisibility,
        isAuthorized: isAuthorized,
        onSetIsAuthorized,
        userInformation: userInformation,
        onSetUserInformation,
        formToggler,
        onSetFormToggler,
        isLoading: isLoading,
        onSetIsLoading,
        textBookWords: textBookWords,
        onSetTextBookWords,
        wordsGroup: wordsGroup,
        onSetGroup,
        currentPage: currentPage,
        setCurrentPage,
        isTextBookInitGame: isTextBookInitGame,
        onSetIsTextBookInitGame,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};
