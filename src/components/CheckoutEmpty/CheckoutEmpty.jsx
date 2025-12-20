import { Button } from "../Button/Button"
import styles from './CheckoutEmpty.module.scss'

export const CheckoutEmpty = ({ navigate }) => {
  return (
    <div className={styles["checkout-empty"]}>
      <h2 className={styles["checkout-empty__heading"]}>Tu carrito está vacío</h2>
      <p className={styles["checkout-empty__description"]}>Parece que aún no has añadido ningún libro.</p>
      <Button onClick={navigate}>Volver a la tienda</Button>
    </div>
  )
}