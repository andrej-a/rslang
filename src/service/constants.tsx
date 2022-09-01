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
export const enum DefaultNumber {
  NULL = 0,
}
export enum HttpMetod {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
  CONTENT_TYPE = 'application/json',
}
export interface IInfoRequestUser {
  id: string;
  name: string;
  email: string;
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
//Без понятия какие поля должны быть в optional
export interface IUserWord {
  difficulty: 'learned' | 'study' | 'hard';
  optional: {
    newWord: boolean;
    rightAnswers: number;
    rightAudio: number;
    wrongAudio: number;
    rightSprint: number;
    wrongSprint: number;
  };
}
export interface IUserWordCreateResponse {
  userId: string;
  difficulty: 'learned' | 'study' | 'hard';
  optional: {
    newWord: boolean;
    rightAnswers: number;
    rightAudio: number;
    wrongAudio: number;
    rightSprint: number;
    wrongSprint: number;
  };
  wordId: string;
}

//На вскидку написала поля в optional
export interface IUserStatistic {
  learnedWords: number;
  optional: {
    common: {
      visitDate: number;
      wordsToday: number;
      newWordsToday: number;
      errors: number;
      correct: number;
    };
    games: {
      sprint: {
        words: number;
        accurancy: number;
        inRow: number;
      };
      audioChallenge: {
        words: number;
        accurancy: number;
        inRow: number;
      };
    };
  };
}
