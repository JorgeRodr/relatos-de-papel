import { Button } from "../Button/Button"
import styles from './CheckoutSuccess.module.scss'

export const CheckoutSuccess = ({ navigate }) => {

  return (
    <div className={styles["checkout-success"]}>
      <div className={styles["checkout-success__icon-wrapper"]}>
        <svg className={styles["checkout-success__icon"]} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h2 className={styles["checkout-success__heading"]}>¡Pedido realizado con éxito!</h2>
      <p className={styles["checkout-success__description"]}>Gracias por tu compra. Hemos recibido tu pedido correctamente.</p>
      <div className={styles["checkout-success__flex-container"]}>
        <div className={styles["checkout-success__progress-bar"]}>
          <div className={styles["checkout-success__progress-bar-fill"]}></div>
        </div>
        <p className={styles["checkout-success__redirect-text"]}>Redirigiendo a la página principal...</p>
        <Button variant="ghost" onClick={navigate} className={styles["checkout-success__button-wrapper"]}>
          Volver ahora
        </Button>
      </div>
    </div>
  )
}