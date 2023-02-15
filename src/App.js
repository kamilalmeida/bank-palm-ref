import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./components/header/Header";
import GlobalStyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import MainArea from "./components/mainArea/MainArea";
import CreateAccount from "./components/createAccount/CreateAccount";
import Account from "./components/account/Account";
import { UserStorage } from "./UserContext";
import Login from "./components/login/Login";

function App() {
  const [theme, setTheme] = React.useState(light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }
  return (
    <ThemeProvider theme={theme}>
      <UserStorage>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Header toggleTheme={toggleTheme} />
            <Route path="createaccount" element={<CreateAccount />} />
            <Route path="login" element={<Login />} />
            <Route path="login/conta" element={<Account />} />
          </Routes>
          <MainArea theme={theme} />
        </BrowserRouter>
      </UserStorage>
    </ThemeProvider>
  );
}

export default App;
