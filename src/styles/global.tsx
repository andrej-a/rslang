import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import {GRADIENT} from './constansts'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  #root{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  *,
*::before,
*::after {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
  font-family: 'Rubik';
}

ol li,
ul li {
  list-style: none;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
h1 {
  margin: 0;
  font-size: 60px;
  font-weight: 500;
  line-height: 87px;
}
h2 {
  margin: 0;
  font-size: 40px;
  font-weight: 500;
  line-height: 87px;
}
h3 {
  margin: 0;
  font-size: 30px;
  font-weight: 500;
  line-height: 40px;
}
img {
  vertical-align: top;
}
html,
body {
  margin: 0;
  font-family:'Rubik';
  background: ${GRADIENT};
  width: 100%;
  font-size: 18px;
}
input[type="text"],
input[type="search"] input[type="email"],
input[type="tel"],
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
input,
button,
textarea {
  font-family: inherit;
}`;