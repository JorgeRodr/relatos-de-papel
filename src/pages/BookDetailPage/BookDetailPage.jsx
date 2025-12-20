import { useParams, useNavigate } from 'react-router-dom';
import { useBooks } from '../../hooks/useBooks';
import { useCart } from '../../context/CartContext';
import styles from './BookDetailPage.module.scss';
import { Button } from '../../components/Button/Button';
import { RoutePaths } from '../../app.constants';
import { BookDetail } from '../../components/BookDetail/BookDetail';

export const BookDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBookById } = useBooks();
  const { addToCart } = useCart();

  const book = getBookById(id || '');

  if (!book) {
    return (
      <div className={styles['book-detail__not-found']}>
        <h2>Libro no encontrado</h2>
        <Button onClick={() => navigate(RoutePaths.HOME)} className="mt-4">
          Volver al inicio
        </Button>
      </div>
    );
  }

  return (
    <div className={styles['book-detail']}>
      <Button 
        variant="ghost" 
        onClick={() => navigate(RoutePaths.HOME)} 
        className={styles['book-detail__back']}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className={styles['book-detail__back-svg']} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Volver al catálogo
      </Button>

      <BookDetail book={book} addToCart={addToCart} />
    </div>
  );
};