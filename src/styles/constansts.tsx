
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
  REGISTRATION_FORM_TITLE = 'Registration',
}
