import React from "react";
import logo from "../assets/logo.png";
import styles from "./styles.module.css";
import User from "../assets/user.svg";
import ThemeSwitche from "../ThemeSwitch";
import * as C from "./styles";
import { NavLink } from "react-router-dom";
import MainArea from "../mainArea/MainArea";

export default function Header({ toggleTheme, theme }) {
  return (
    <>
      <nav className={styles.navbar}>
        <C.Container className={styles.navbarItem1}>
          <div className={styles.logo}>
            <a href="" rel="noopener">
              <img src={logo} alt="Logo BankPalm" width="40px" height="40px" />
            </a>
          </div>
          <ul>
            <li>
              <a href="" rel="noopener">
                BankPalm
              </a>
              <ul>
                <li>
                  <a href="" rel="noopener">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="" rel="noopener">
                    Blog
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="" rel="noopener">
                Conta Digital
              </a>
              <ul>
                <li>
                  <NavLink to="createaccount" rel="noopener">
                    Abrir sua conta
                  </NavLink>
                </li>
                <li>
                  <a href="" rel="noopener">
                    Rendimentos
                  </a>
                </li>
                <li>
                  <a href="" rel="noopener">
                    Taxas
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </C.Container>
        <NavLink to="/login" className={styles.navbarItem2} rel="noopener">
          <h4>Login</h4>
          <div>
            <img src={User} alt="ícone login user" />
          </div>
        </NavLink>
        <ThemeSwitche toggleTheme={toggleTheme} />
      </nav>
      <MainArea theme={theme} />
    </>
  );
}
