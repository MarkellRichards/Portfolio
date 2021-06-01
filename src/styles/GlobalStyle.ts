import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --primary-purple: #5c267c;
  --primary-orange: #FE6D42;
  --form-border-color: #5c267c;
}

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Raleway", sans-serif;
  font-size: 62.5%;
}

html, body {
  height: 100%;
  
}


body {
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Righteous", cursive;
  font-weight: lighter;
}
`;

export default GlobalStyle;
