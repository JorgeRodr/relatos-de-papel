import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CheckoutPage.module.scss';
import { useCart } from '../../context/CartContext';
import { RoutePaths } from '../../app.constants';
import { Button } from '../../components/Button/Button';
import { CheckoutSuccess } from '../../components/CheckoutSuccess/CheckoutSuccess';
import { CheckoutEmpty } from '../../components/CheckoutEmpty/CheckoutEmpty';
import { CheckoutItem } from '../../components/CheckoutItem/CheckoutItem';
import { CheckoutSummaryCard } from '../../components/CheckoutSummaryCard/CheckoutSummaryCard';

export const CheckoutPage = () => {
  const { cart, cartTotal, clearCart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigate(RoutePaths.HOME);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, navigate]);

  const handlePayment = () => {
    if (cart.length === 0) {
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsSuccess(true);
      clearCart();
      setIsProcessing(false);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <CheckoutSuccess navigate={() => navigate(RoutePaths.HOME)} />
    );
  }


  if (cart.length === 0) {
    return (
      <CheckoutEmpty navigate={() => navigate(RoutePaths.HOME)} />
    );
  }


  return (
    <div className={styles["checkout"]}>
      <h1 className={styles["checkout__title"]}>Resumen del Pedido</h1>

      <div className={styles["checkout__grid"]}>
        {/* Order Items */}
        <div className={styles["checkout__list-col"]}>
          <div className={styles["checkout__list-container"]}>
            <ul className={styles["checkout__list"]}>
              {cart.map((item) => (
                <CheckoutItem key={item.id} item={item} removeFromCart={removeFromCart} isProcessing={isProcessing} />
              ))}
            </ul>
          </div>
        </div>
        <div className={styles["checkout__summary-col"]}>
          <CheckoutSummaryCard 
            cartTotal={cartTotal}
            handlePayment={handlePayment}
            isProcessing={isProcessing}
          />
        </div>
      </div>
    </div>
  );
};