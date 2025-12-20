import { Button } from '../Button/Button'
import styles from './BookDetail.module.scss'

export const BookDetail = ({ book, addToCart }) => {
  return (
    <div className={styles['book-detail']}>
      <div className={styles['book-detail__grid']}>
        <div className={styles['book-detail__image-section']}>
          <div className={styles['book-detail__image-container']}>
            <img
              src={book.coverUrl}
              alt={book.title}
              className={styles['book-detail__image']}
            />
          </div>
        </div>
        <div className={styles['book-detail__info']}>
          <div>
            <span className={styles['book-detail__badge']}>
              Destacado
            </span>
          </div>

          <h1 className={styles['book-detail__title']}>
            {book.title}
          </h1>

          <p className={styles['book-detail__author']}>
            por {book.author}
          </p>

          <div className={styles['book-detail__description']}>
            <p>{book.description}</p>
          </div>

          <div className={styles['book-detail__meta']}>
            <div className={styles['book-detail__meta-box']}>
              <span className={styles['book-detail__meta-label']}>ISBN</span>
              <span className={styles['book-detail__meta-value']}>{book.isbn}</span>
            </div>
            <div className={styles['book-detail__meta-box']}>
              <span className={styles['book-detail__meta-label']}>Páginas</span>
              <span className={styles['book-detail__meta-value']}>{book.pages}</span>
            </div>
          </div>

          <div className={styles['book-detail__actions']}>
            <div className={styles['book-detail__price']}>
              ${book.price}
            </div>
            <Button
              onClick={() => addToCart(book)}
            >
              Añadir al Carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}