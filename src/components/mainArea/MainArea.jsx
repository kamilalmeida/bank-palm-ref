import React from "react";
import arrow from "../assets/arrow-right.svg";
import apple from "../assets/apple.svg";
import playstore from "../assets/playstore.svg";
import hand from "../assets/hand.png";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

export default function MainArea({ theme }) {
  return (
    <>
      <main className={styles.sfeatured}>
        <section>
          <div className={styles.container}>
            <div className={styles.featuredContentCta}>
              <div className={styles.scrollReveal200}>
                <h1>
                  BankPalm
                  <br />
                  Banco 100% digital
                </h1>
                <h3
                  className={
                    theme.title === "dark" ? styles.titleActived : styles.title
                  }
                >
                  Tudo o que você precisa na palma da sua mão!
                </h3>

                <div className={styles.featuredGroupCta}>
                  <button>
                    <NavLink to="createaccount">Abrir uma conta</NavLink>
                    <div>
                      <img
                        src={arrow}
                        alt="ícone de seta"
                        width="24px"
                        height="24px"
                      />
                    </div>
                  </button>

                  <div>
                    <div>
                      <img
                        src={apple}
                        alt="ícone da apple"
                        width="24px"
                        height="24px"
                      />
                    </div>

                    <div>
                      <img
                        src={playstore}
                        alt="ícone da play store"
                        width="24px"
                        height="24px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div >
              <img
                src={hand}
                alt="cartão BankPalm frente"
                width="400px"
                height="400px"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
