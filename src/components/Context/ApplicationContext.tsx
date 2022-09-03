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
  userDictionary: IWord[];
  onSetUserDictionary: (value: IWord[]) => void;
  userLearnedWords: IWord[];
  onSetUserLearnedWords: (value: IWord[]) => void;
  textBookWords: IWord[];
  onSetTextBookWords: (value: IWord[]) => void;
}
export const ApplicationContext = createContext({} as IContext);

export const ApplicationProvider = (props: Props) => {
  const { LOGIN_FORM_STATE } = Values;
  const defaultAuthorizedValue = localStorage.getItem('userId') ? true : false;
  const userValue = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo') as string)
    : null;

  const [footerVisibility, setFooterVisibility] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(defaultAuthorizedValue);
  const [userInformation, setUserInformation] = useState<IUserInfo>(
    userValue || { name: '', userID: '' },
  );
  const [formToggler, setFormToggler] = useState<string>(LOGIN_FORM_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const [userDictionary, setUserDictionary] = useState([] as IWord[]);
  const [userLearnedWords, setUserLearnedWords] = useState([] as IWord[]);
  const [textBookWords, setTextBookWords] = useState([] as IWord[]);

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

  const onSetUserDictionary = (value: IWord[]) => {
    setUserDictionary(value);
  };

  const onSetUserLearnedWords = (value: IWord[]) => {
    setUserLearnedWords(value);
  };

  const onSetTextBookWords = (value: IWord[]) => {
    onSetTextBookWords(value);
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
        userDictionary: userDictionary,
        onSetUserDictionary,
        userLearnedWords: userLearnedWords,
        onSetUserLearnedWords,
        textBookWords: textBookWords,
        onSetTextBookWords,
      }}
    >
      {props.children}
    </ApplicationContext.Provider>
  );
};
