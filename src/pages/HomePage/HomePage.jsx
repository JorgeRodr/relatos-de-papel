
import { BookCard } from '../../components/BookCard/BookCard';
import styles from './HomePage.module.scss';

export const HomePage = ({ books }) => {
  return (
    <div className={styles['home-page']}>
      <div className={styles['home-page__header']}>
        <h1 className={styles['home-page__title']}>Catálogo de Libros</h1>
        <p className={styles['home-page__subtitle']}>Explora nuestra selección de lecturas esenciales.</p>
      </div>
      
      {books.length > 0 ? (
        <div className={styles['home-page__grid']}>
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className={styles['home-page__empty']}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles['home-page__empty-icon']}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <h3 className={styles['home-page__empty-title']}>No se encontraron libros</h3>
          <p className={styles['home-page__empty-text']}>Intenta buscar con otro término.</p>
        </div>
      )}
    </div>
  );
};