import styles from './CartItem.module.scss';

export const CartItem = ({ item, removeFromCart, isProcessing }) => {
  return (
    <li className={styles['cart-item']}>
      <img
        src={item.coverUrl}
        alt={item.title}
        className={styles['cart-item__image']}
      />
      <div className={styles['cart-item__details']}>
        <h3 className={styles['cart-item__title']}>{item.title}</h3>
        <p className={styles['cart-item__author']}>{item.author}</p>
        <p className={styles['cart-item__quantity']}>Cantidad: {item.quantity}</p>
      </div>
      <div className={styles['cart-item__price-container']}>
        <p className={styles['cart-item__price']}>${(item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={() => removeFromCart(item.id)}
          className={styles['cart-item__remove']}
          disabled={isProcessing}
        >
          Eliminar
        </button>
      </div>
    </li>
  )
}