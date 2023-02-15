import React from "react";
import styles from "./styles.module.css";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import Input from "../input/Input";
import useForm from "../../Hooks/useForm";

export default function Login() {
  const usercpf = useForm();
  const userpassword = useForm();


    return (
      <>
        <div className={styles.blockcentral}>
          <div className={styles.img_logo}>
            <img src={logo} alt="logo" />
            <h1>ank palm</h1>
          </div>
          <div className={styles.container}>
            <h2>Faça seu login</h2>
            <form action="">
              <div className={styles.inputfield}>
                <Input
                  type="number"
                  id="cpf"
                  required="required"
                  name="cpf"
                  placeholder="CPF"
                  size="11"
                  maxLength="11"
                  pattern="[\d/]{10}"
                  {...usercpf}
                />
              </div>
            </form>
            <div className={styles.inputfield}>
              <Input
                type="password"
                required
                placeholder="Senha"
                {...userpassword}
              />
            </div>
            <button className={styles.botao}>
              <NavLink to="conta" role="button">
                Entrar
              </NavLink>
            </button>
          </div>
        </div>
      </>
    );

}
