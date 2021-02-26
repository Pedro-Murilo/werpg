import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white: #fff;
  --black-light: #444;
  --black-dark: #333;
  --background:#2D2D2D;
  --gray-line: #dcdde0;
  --text: #fefaf9;
  --text-highlight: #b3b9ff;
  --title: #a09f9f;
  --red: #e83f5b;
  --green: #4cd62b;
  --green-light: #3ad5a3;
  --blue: #5965e0;
  --blue-dark: #4953b8;
  --blue-twitter: #2aa9e0;
}

html {
  font-size: 62.5%;
}

body {
  background: var(--background);
  color: var(--text);
}

body,
input,
textarea,
button {
  font: 400 1.6rem "Inter", sans-serif;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}
`;

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
`

export const LoadingContainer = styled.div`
  padding-top: 16.5rem;
`

export default GlobalStyle;
