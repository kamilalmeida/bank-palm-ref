import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  border: none;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  font-family: "Inter", sans-serif;

}
img,
svg {
  max-width: 100%;
  height: auto;
  display: block;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
button {
  border: 0;
}
button:focus {
  border: 0;
}
body {
  overflow-x: hidden;
  overflow-y: hidden;
  background-color: ${(props) => props.theme.colors.background};
  
  
}
html {
  scroll-behavior: smooth;
  font-size: 62.5%;
}


`;
