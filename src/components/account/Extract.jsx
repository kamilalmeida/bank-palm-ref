import React from "react";
import styles from "./styles.module.css";
import { ReactComponent as User } from "../assets/usuario.svg";


function Extract() {
  const dataString = window.localStorage.getItem("data");
  const dataObj = JSON.parse(dataString);

 
  

  if (dataObj !== null)
    return (
      <>
        <section className={styles.dados}>
          <div className={styles.layout_2}>
            <div className={styles.informacoes}>
              <div className={styles.itemPhoto}>
                <User />
                
              </div>

              <h2 className={styles.nome_user}>{`Olá, ${dataObj.name}`}</h2>
              <div className={styles.saldo}>
                <p>Saldo:</p>
                <strong className={styles.saldo_atual}>
                  R${dataObj.currentBalance}
                </strong>
              </div>
              <div></div>
            </div>
          </div>
          <div className={styles.transaction_all}>
            {dataObj &&
              dataObj.arrayDeposit.map((data) => {
                return (
                  <div className={styles.scroll_transactions} key={data.name}>
                    <div className={styles.last_transactions}>
                      <p>{data.type === "deposito" ? "Depósito" : "Saque"}</p>
                      <span>R${data.value}</span>
                    </div>
                    <div className={styles.border} key={data.name}></div>
                  </div>
                );
              })}
            <strong></strong>
          </div>
        </section>
      </>
    );
}

export default Extract;
