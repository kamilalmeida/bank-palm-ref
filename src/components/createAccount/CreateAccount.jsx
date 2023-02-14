import React from "react";
import iconChecked from "../assets/checked.svg";
import iconMouse from "../assets/mouse-pointer.svg";
import iconHeart from "../assets/heart.svg";
import iconSmartphone from "../assets/smartphone.svg";
import styles from "./styles.module.css";
import Input from "../input/Input";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import useForm from "../../Hooks/useForm";

export default function CreateAccount() {
  const { userLogin } = React.useContext(UserContext);
  const username = useForm();
  const usercpf = useForm();
  console.log(username);

  async function handleSubmit() {
    if (username.value !== null) userLogin(username);
  }

  return (
    <div className={`${styles.screens} animeLeft`}>
      <section className={styles.screen1}>
        <h1 className={styles.title}>
          Complete os campos ao lado para pedir sua Conta e Cartão de crédito
        </h1>
        <div className={styles.about_image_mobile}>
          <img
            src={iconSmartphone}
            alt="smartphone"
            width="170px"
            height="200px"
          />

          <img
            src={iconChecked}
            alt="ícone confirmado"
            className={`${styles.about_image_float} ${styles.float_one}  ${styles.icon_one}`}
            width="96px"
            height="96px"
          />
          <img
            src={iconMouse}
            alt="ícone cursor mouse"
            className={`${styles.about_image_float} ${styles.float_two} ${styles.icon_two}`}
            width="96px"
            height="96px"
          />
          <img
            src={iconHeart}
            alt="ícone coração"
            className={`${styles.about_image_float} ${styles.float_three} ${styles.icon_three}`}
            width="96px"
            height="96px"
          />
        </div>
      </section>

      <section className={styles.screen2}>
        <h1 className={styles.subtitle}>
          Complete os campos ao lado para pedir sua Conta e Cartão de crédito
        </h1>
        <form action="">
          <Input label="CPF" name="cpf" type="number"  {...usercpf}/>
          <Input
            label="Nome completo"
            type="text"
            name="userame"
            size="11"
            minLength="11"
            {...username}
          />
          <Input label="Celular" type="number" name="celular" />
          <Input
            label="Crie sua senha"
            type="password"
            name="password"
            size="8"
            maxLength="8"
          />

          <button className="btn_create" onClick={handleSubmit}>
            <NavLink to="/login">Enviar</NavLink>
          </button>
        </form>
        <div>
          <p className={styles.term}>
            *Cartão de crédito e cheque especial sujeto à análise de crédtio.
          </p>
        </div>
      </section>
    </div>
  );
}
