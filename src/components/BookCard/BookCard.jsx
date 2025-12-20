import { useNavigate } from 'react-router-dom';
import { RoutePaths } from '../../app.constants';
import styles from './BookCard.module.scss';

export const BookCard = ({ book }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${RoutePaths.BOOK_DETAIL}/${book.id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className={styles['book-card']}
    >
      <div className={styles['book-card__image-wrapper']}>
        <img
          src={book.coverUrl}
          alt={book.title}
          className={styles['book-card__image']}
        />
        <div className={styles['book-card__overlay']} />
      </div>
      
      <div className={styles['book-card__content']}>
        <div className={styles['book-card__meta']}>
          <p className={styles['book-card__author']}>{book.author}</p>
          <h3 className={styles['book-card__title']}>
            {book.title}
          </h3>
        </div>
        
        <div className={styles['book-card__footer']}>
          <span className={styles['book-card__price']}>${book.price}</span>
          <span className={styles['book-card__link']}>Ver detalles &rarr;</span>
        </div>
      </div>
    </div>
  );
};