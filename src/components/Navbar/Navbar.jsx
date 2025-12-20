import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { useCart } from '../../context/CartContext';
import { RoutePaths } from '../../app.constants';

export const Navbar = ({ searchTerm, setSearchTerm }) => {
  const { toggleCart, cartCount } = useCart();
  const location = useLocation();
  const showSearch = location.pathname === RoutePaths.HOME;

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <div className={styles.navbar__wrapper}>
          <div className={styles.navbar__logo}>
            <Link to={RoutePaths.HOME} className={styles['navbar__logo-link']}>
              <div className={styles['navbar__logo-icon']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <span className={styles['navbar__logo-text']}>Relatos de Papel</span>
            </Link>
          </div>
          <div className={styles.navbar__search}>
            {showSearch && (
              <div className={styles['navbar__search-wrapper']}>
                <div className={styles['navbar__search-icon']}>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  className={styles['navbar__search-input']}
                  placeholder="Buscar libros por título..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            )}
          </div>
          <div className={styles.navbar__cart}>
            <button
              onClick={toggleCart}
              className={styles['navbar__cart-btn']}
            >
              <span className={styles['navbar__sr-only']}>Ver carrito</span>
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className={styles['navbar__cart-badge']}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};