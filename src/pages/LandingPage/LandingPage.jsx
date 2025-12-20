import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LandingPage.module.scss';
import { RoutePaths } from '../../app.constants';
import { Button } from '../../components/Button/Button';

export const LandingPage = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(5);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return;

    if (timeLeft === 0) {
      navigate(RoutePaths.HOME);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate, isActive]);

  const handleEnter = () => {
    setIsActive(false);
    navigate(RoutePaths.HOME);
  };

  return (
    <div className={styles.landing}>

      <div className={styles.landing__content}>
        <div className={styles.landing__iconBox}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles['landing__icon-svg']}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
        </div>

        <h1 className={styles.landing__title}>
          Relatos de Papel
        </h1>

        <div className={styles.landing__actions}>
          <Button 
            onClick={handleEnter}
            className={styles.cta}
          >
            Entrar Ahora
          </Button>
          
          <p className={styles.landing__timer}>
            Redireccionando automáticamente en {timeLeft} segundos...
          </p>
        </div>
      </div>
    </div>
  );
};