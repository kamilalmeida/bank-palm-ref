import React from "react";
import styles from "./styles.module.css";
import logo from "../assets/logo.png";
import Input from "../input/Input";
import Extract from "./Extract";
import { UserContext } from "../../UserContext";
import useForm from "../../Hooks/useForm";

export default function Transaction() {
  const valueInput = useForm();
  const [valueDeposit, setValueDeposit] = React.useState("");
  const [activeButton, setActiveButton] = React.useState(false);
  const { data } = React.useContext(UserContext);
  console.log(activeButton);

  async function deposit() {
    let objAccount = {
      amount: Number(valueInput.value),
      type: "deposito",
    };

    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objAccount),
    };
    const response = await fetch(
      `https://api-accounts.fly.dev/accounts/${data && data.id}/deposit`,
      init
    );
    const json = await response.json();
    window.localStorage.setItem("data", JSON.stringify(json));
    setValueDeposit(json);
  }

  return (
    <>
      <section className={styles.principal}>
        <div className={styles.img_logo}>
          <img src={logo} alt="logo BankPalm" />
          <h1 className={styles.gradient}>ank palm</h1>
        </div>
        <div className={styles.form_geral}>
          <div className={styles.campo_transaction}>
            <Input
              type="text"
              className={styles.transacao_valor}
              required
              label="Digite o valor da transação"
              {...valueInput}
            />
          </div>
          <div>
            <button
              className={` ${styles.botao} ${
                activeButton == true ? styles.displaynone : ""
              }`}
              onClick={deposit}
            >
              Realizar depósito
            </button>
            <button
              className={` ${styles.botao} ${
                activeButton == false ? styles.displaynone : ""
              }`}
              onClick={deposit}
            >
              Realizar saque
            </button>
          </div>
          <div className="res"></div>
          <div className="resp"></div>
        </div>
        <div className={styles.botoes}>
          <div
            className={` ${!activeButton ? styles.button_actived : ""} `}
            onClick={() => setActiveButton(!activeButton)}
          >
            <p>Realizar depósitos</p>
          </div>
          <div
            className={`${styles.bnt2} ${
              activeButton ? styles.button_actived : ""
            }`}
            onClick={() => setActiveButton(!activeButton)}
          >
            <p>Realizar saques</p>
          </div>
        </div>
      </section>
      <Extract />
    </>
  );
}
