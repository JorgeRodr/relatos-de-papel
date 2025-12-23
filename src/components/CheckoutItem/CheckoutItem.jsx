import styles from './CheckoutItem.module.scss'

export const CheckoutItem = ({ item, removeFromCart, isProcessing }) => {
  return (
    <li className={styles["checkout-item"]}>
      <img
        src={item.coverUrl}
        alt={item.title}
        className={styles["checkout-item__image"]}
      />
      <div className={styles["checkout-item__details"]}>
        <h3 className={styles["checkout-item__details-title"]}>{item.title}</h3>
        <p className={styles["checkout-item__details-author"]}>{item.author}</p>
        <p className={styles["checkout-item__details-quantity"]}>Cantidad: {item.quantity}</p>
      </div>
      <div className={styles["checkout-item__price"]}>
        <p className={styles["checkout-item__price-amount"]}>{(item.price * item.quantity).toFixed(2)}€</p>
        <button
          onClick={() => removeFromCart(item.id)}
          className={styles["checkout-item__remove"]}
          disabled={isProcessing}
        >
          Eliminar
        </button>
      </div>
    </li>
  )
}