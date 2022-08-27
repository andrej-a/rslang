export const enum Errors {
  BAD_REQUEST = 400,
  MISSING_TOKEN = 401,
  INVALID_TOKEN = 402,
  WRONG_INPUT_LOGIN = 403,
  NOT_FOUND_USER = 404,
  WRONG_INPUT_CREATE_USER = 422,
  USER_EXISTS = 417,
}

export enum ResponseCode {
  DELETED_SUCCESS = 204,
  WORD_CREATE_SUCCESS = 200,
}

export interface ISignInInfo {
  email: string;
  password: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IUserAllInfo {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}

export interface IWordsSetter {
  userId: string;
  wordId: string;
  word: IUserWord;
}
export interface IUserWord {
  difficulty: 'easy' | 'normal' | 'hard';
  optional: {
    newWord: boolean;
    active: boolean;
    views: number;
    errors: number;
    repeat: boolean;
    wordId: string;
    lastView: string;
    nextView: string;
    correct: number;
    interval: number;
    wordIndicator: number;
  };
}

export interface IUserStatistic {
  learnedWords: number;
  optional: {
    common: {
      visitDate: number;
      wordsToday: number;
      newWordsToday: number;
      lastWord: number;
      weekDay: number;
      errors: number;
      correct: number;
      dayProgress: number;
    };
    games: {
      sprint: {
        words: number;
        accurancy: number;
        inRow: number;
      };
      ownGame: {
        words: number;
        accurancy: number;
        inRow: number;
      };
    };
  };
}
