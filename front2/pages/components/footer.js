import React from 'react'
import NavMobile from './header_mobile.js'
import styles from '.././../styles/Footer.module.css'


export default function footer() {
  return (
    <>
      <NavMobile />
      <footer className={styles.footer}>
        <div className={styles.footer__container}>
          <img className={styles.wave} src="/img/footer.svg"></img>
          <div className={styles.footer__container__logo}>
            <img src="/img/logo.svg" alt="logo" />
          </div>
          <div className={styles.footer__container__links}>
            <ul className={styles.footer__container__list}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.row}>
          <a href="https://www.departement13.fr/" target="_blank" className={styles.column}>
            <img src="/img/Bouches-du-Rhone_13_logo.png" alt="d13" />
          </a>
          <a href="https://membres.voyage-prive.com/voyageprive/fr/?cid=31746&affid=Marque-exact-42638028443[…]NdCvePsNXX2k_o5m2k7P8h7CDTUxLBP9q1SEIj_No1QaAiqSEALw_wcB" target="_blank" className={styles.column}>
            <img src="/img/Voyage_Prive.svg.png" alt="voyage privé" />
          </a>
          <a href="https://aws.amazon.com/fr/?nc2=h_lg" target="_blank" className={styles.column}>
            <img src="/img/AWS.png" alt="aws" />
          </a>
        </div>
        <div className={styles.row}>
          <a href="https://www.myprovence.fr/" target="_blank" className={styles.column}>
            <img className={styles.smaller} src="/img/provencetourisme.png" alt="my provence" />
          </a>
          <a href="https://inco-group.co/" target="_blank" className={styles.column}>
            <img className={styles.smaller} src="/img/inco.png" alt="inco" />
          </a>
          <a href="https://code4marseille.fr/" target="_blank" className={styles.column}>
            <img className={styles.smaller} src="/img/code4marseille.png" alt="code4marseille" />
          </a>
        </div>
      </footer>
    </>
  )
}
