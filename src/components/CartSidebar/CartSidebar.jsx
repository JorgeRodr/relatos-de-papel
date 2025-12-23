import { useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../app.constants';
import styles from './CartSidebar.module.scss';
import { useCart } from '../../context/CartContext';
import { Button } from '../Button/Button';
import { CartItem } from '../CartItem/CartItem';


export const CartSidebar = () => {
  const { isCartOpen, toggleCart, cart, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    toggleCart();
    navigate(RoutePaths.CHECKOUT);
  };

  return (
    <div className={styles['cart-sidebar']}>
      <div
        className={styles['cart-sidebar__overlay']}
        onClick={toggleCart}
      />
      <div className={styles['cart-sidebar__panel']}>
        <div className={styles['cart-sidebar__container']}>
          <div className={styles['cart-sidebar__header']}>
            <h2 className={styles['cart-sidebar__title']}>Tu Carrito</h2>
            <Button
              onClick={toggleCart}
              variant='ghost'
              className={styles['cart-sidebar__close']}
            >
              <span className={styles['cart-sidebar__sr-only']}>Cerrar panel</span>
              ✖
            </Button>
          </div>
          <div className={styles['cart-sidebar__content']}>
            {cart.length === 0 ? (
              <div className={styles['cart-sidebar__empty']}>
                <svg className={styles['cart-sidebar__empty-svg']} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p>Tu carrito está vacío</p>
                <Button variant="ghost" onClick={toggleCart} className={styles['cart-sidebar__continue-btn']}>
                  Continuar comprando
                </Button>
              </div>
            ) : (
              <ul className={styles['cart-sidebar__list']}>
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} removeFromCart={removeFromCart} isProcessing={false} />
                ))}
              </ul>
            )}
          </div>
          {cart.length > 0 && (
            <div className={styles['cart-sidebar__footer']}>
              <div className={styles['cart-sidebar__summary-row']}>
                <p>Subtotal</p>
                <p>{cartTotal.toFixed(2)}€</p>
              </div>
              <p className={styles['cart-sidebar__note']}>
                Envío e impuestos calculados en el checkout.
              </p>
              <Button fullWidth onClick={handleCheckout}>
                Checkout
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};