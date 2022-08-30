export enum Colors {
  WHITE = '#fff',
  BLACK = '#000',
  MIDDLE_BLACK = '#222222',
  GRAY = '#ABABAB',
  DARK_GRAY = '#898989',
  LIGHT_GRAY = '#E2DEDE',
  LIGHT_GREEN = '#4EE57E',
  GREEN = '#07D6A0',
  RED = '#FD1E1E',
  GRADIENT = 'linear-gradient(180deg, #4EE57E, #07D6A0)',
  PLAY_BUTTON_GRADIENT = 'linear-gradient(127.86deg, #4EE57E 6.91%, #07D6A0 110.49%)',
  BOOK_GRREN = '#00C013',
  BOOK_YELLOW = '#EBFF00',
  BOOK_AZURE_BLUE = '#00E0FF',
  BOOK_BLUE = '#0318CD',
  BOOK_ORANGE = '#FF9900',
  BOOK_RED = '#EF1E01',
  BOOK_PURPLE = '#AF00ED',
  DISABLED = '#D5D8D6',
  FORM_BLUE = '#0252CC',
  PRIMARY_PICTURE_GREY = '#ffffff63',
  GREY_GRADIENT = 'linear-gradient(1.8deg, #fefefe -43.56%, #e6e6e6 123.62%)',
  LIGHT_GREY = '#9b9b9b',
}

export enum WindowSizes {
  mobile = '320',
  tablet = '768',
  laptop = '1024',
  textBookSize = '1230',
  ultraWidth = '2100',
}

export const device = {
  mobile: `(min-width: ${WindowSizes.mobile}px)`,
  tablet: `(min-width: ${WindowSizes.tablet}px)`,
  laptop: `(min-width: ${WindowSizes.laptop}px)`,
};

export enum Values {
  LOGIN_FORM_TITLE = 'Log in',
  LOGIN_FORM_STATE = 'login',
  REGISTRATION_FORM_TITLE = 'Registration',
  REGISTRATION_FORM_STATE = 'registration',
  EMAIL_PLACEHOLDER = 'Email',
  EMAIL_ERROR_MESSAGE = 'Email is required field',
  EMAIL_FORMAT_ERROR_MESSAGE = 'Email should have correct format',
  PASSWORD_PLACEHOLDER = 'Password',
  PASSWORD_LENGTH_ERROR_MESSAGE = 'Password must be 8 chars minimum.',
  PASSWORD_ERROR_MESSAGE = 'Password is required field',
  NAME_PLACEHOLDER = 'Name',
  NAME_LENGTH_ERROR_MESSAGE = 'Name should be 2 chars minimum.',
  NAME_ERROR_MESSAGE = 'Name is required field',
}

export const mailRegularCheeker =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export enum TextMessageResult {
  GOOD = 'Good job! All your answers are right!',
  NORMAL = 'You can better! Repeat the words and come back',
  BAD = 'Not bad, but you need more practice',
}
export const levels = new Map([
  ['A1', { color: Colors.BOOK_GRREN, fullname: 'Beginner' }],
  ['A2', { color: Colors.BOOK_YELLOW, fullname: 'Elementary' }],
  ['B1', { color: Colors.BOOK_AZURE_BLUE, fullname: 'Intermediate' }],
  ['B2', { color: Colors.BOOK_BLUE, fullname: 'Up-Intermediate' }],
  ['C1', { color: Colors.BOOK_ORANGE, fullname: 'Advanced' }],
  ['C2', { color: Colors.BOOK_RED, fullname: 'Proficiency' }],
]);

export enum ProgressBarInfo {
  SIZE_MEDIUM = 53,
  SIZE_LARGE = 184,
  PERSENT = 100,
  FOR_CIRCLE_LENGTH = Math.PI * 2,
}

export enum GameResultInfo {
  WORD_COUNT = 10,
  HALF_WORD_COUNT = 10,
  PERSENT = 100,
}

export enum TimerInfo {
  TIMER_LIMIT_MINUTE = 60,
  SIZE_MEDIUM = 53,
}
