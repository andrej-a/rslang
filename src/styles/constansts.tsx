
export enum Colors {
  WHITE = '#fff',
  BLACK = '#000',
  MIDDLE_BLACK = '#222222',
  GRAY = '#ABABAB',
  LIGHT_GREEN = '#4EE57E',
  GREEN = '#07D6A0',
  RED = '#FD1E1E',
  GRADIENT = 'linear-gradient(180deg, #4EE57E, #07D6A0)',
  BOOK_GRREN = '#00C013',
  BOOK_YELLOW = '#EBFF00',
  BOOK_AZURE_BLUE = '#00E0FF',
  BOOK_BLUE = '#0318CD',
  BOOK_ORANGE = '#FF9900',
  BOOK_RED = '#EF1E01',
  BOOK_PURPLE = '#AF00ED',
  DISABLED = '#D5D8D6',
  FORM_BLUE = '#0252CC',
}
  
  
export enum WindowSizes {
  mobile = '320px',
  tablet = '768px',
  laptop = '1024px',
}
  
export const device = {
  mobile: `(min-width: ${WindowSizes.mobile})`,
  tablet: `(min-width: ${WindowSizes.mobile})`,
  laptop: `(min-width: ${WindowSizes.mobile})`,
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

export const mailRegularCheeker = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

