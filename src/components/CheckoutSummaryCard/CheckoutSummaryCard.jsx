import { Button } from "../Button/Button"
import styles from './CheckoutSummaryCard.module.scss'

export const CheckoutSummaryCard = ({ cartTotal, handlePayment, isProcessing }) => {
  return (
    <div className={styles["checkout-summary-card"]}>
      <h2 className={styles["checkout-summary-card__title"]}>Total a Pagar</h2>

      <div className={styles["checkout-summary-card__rows"]}>
        <div className={styles["checkout-summary-card__row"]}>
          <span>Subtotal</span>
          <span>${cartTotal.toFixed(2)}</span>
        </div>
        <div className={styles["checkout-summary-card__row"]}>
          <span>Envío</span>
          <span className={styles["checkout-summary-card__row--free"]}>Gratis</span>
        </div>
      </div>

      <div className={styles["checkout-summary-card__total"]}>
        <span>Total</span>
        <span>${cartTotal.toFixed(2)}</span>
      </div>

      <Button
        fullWidth
        onClick={handlePayment}
        disabled={isProcessing}
      >
        {isProcessing ? (
          <>
            Procesando...
          </>
        ) : 'Confirmar y Pagar'}
      </Button>

      <p className={styles["checkout-summary-card__footer-text"]}>
        Pago seguro encriptado SSL. Garantía de devolución de 30 días.
      </p>
    </div>
  )
}