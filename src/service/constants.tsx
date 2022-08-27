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
export enum Difficulty {
  LEARNED,  // добавлено в изученное
  NORMAL,   // Не добавлено в изученное/сложное
  HARD,     // добавлено в сложное
}