import React, { createContext, useState } from 'react';
import { IUserInfo } from '../../service/constants';
import { Values } from '../../styles/constansts';
type Props = {
  children?: JSX.Element | JSX.Element[];
};
interface IContext {
  footerVisibility: boolean;
  onSetFooterVisibility: (value: boolean) => void;
  initialLevel: string;
  onSetInitialLevel: (value: string) => void;
  isAuthorized: boolean;
  onSetIsAuthorized: (value: boolean) => void;
  userInformation: IUserInfo;
  onSetUserInformation: (data: IUserInfo) => void;
  formToggler: string;
  onSetFormToggler: (value: string) => void;
  isLoading: boolean;
  onSetIsLoading: (value: boolean) => void;
  isTextBookInitGame: boolean;
  onSetIsTextBookInitGame: (value: boolean) => void;
  textBookCurrentPage: number;
  onSetTextBookCurrentPage: (value: number) => void;
}

export const ApplicationContext = createContext({} as IContext);

export const ApplicationProvider = (props: Props) => {
  const { LOGIN_FORM_STATE } = Values;
  const defaultAuthorizedValue = localStorage.getItem('userId') ? true : false;
  const userValue = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo') as string)
    : null;
  const [footerVisibility, setFooterVisibility] = useState(true);
  const [initialLevel, setInitialLevel] = useState('1');
  const [isAuthorized, setIsAuthorized] = useState(defaultAuthorizedValue);
  const [userInformation, setUserInformation] = useState<IUserInfo>(
    userValue || { name: '', userID: '' },
  );
  const [formToggler, setFormToggler] = useState<string>(LOGIN_FORM_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const [isTextBookInitGame, setIsTextBookInitGame] = useState(false);
  const [textBookCurrentPage, setTextBookCurrentPage] = useState(1);

  const onSetFooterVisibility = (value: boolean) => {
    setFooterVisibility(value);
  };
  const onSetInitialLevel = (value: string) => {
    setInitialLevel(value);
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
  const onSetIsTextBookInitGame = (value: boolean) => {
    setIsTextBookInitGame(value);
  };
  const onSetTextBookCurrentPage = (value: number) => {
    setTextBookCurrentPage(value);
  };

  return (
    <ApplicationContext.Provider
      value={{
        footerVisibility: footerVisibility,
        onSetFooterVisibility,
        initialLevel: initialLevel,
        onSetInitialLevel,
        isAuthorized: isAuthorized,
        onSetIsAuthorized,
        userInformation: userInformation,
        onSetUserInformation,
        formToggler,
        onSetFormToggler,
        isLoading: isLoading,
        onSetIsLoading,
        isTextBookInitGame: isTextBookInitGame,
        onSetIsTextBookInitGame,
        textBookCurrentPage: textBookCurrentPage,
        onSetTextBookCurrentPage,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};
