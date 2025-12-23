import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import styles from './App.module.scss';
import { RoutePaths } from './app.constants';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { Navbar } from './components/Navbar/Navbar';
import { useBooks } from './hooks/useBooks';
import { CartSidebar } from './components/CartSidebar/CartSidebar';
import { HomePage } from './pages/HomePage/HomePage';
import { BookDetailPage } from './pages/BookDetailPage/BookDetailPage';
import { CheckoutPage } from './pages/CheckoutPage/CheckoutPage';
import { Footer } from './components/Footer/Footer';

const Layout = () => {
  const location = useLocation();
  const isLanding = location.pathname === RoutePaths.LANDING;
  const { books, searchTerm, setSearchTerm } = useBooks();

  return (
    <div className={styles.app}>
      {!isLanding && (
        <>
          <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CartSidebar />
        </>
      )}
      
      <main className={styles.app__main}>
        <Routes>
          <Route path={RoutePaths.LANDING} element={<LandingPage />} />
          <Route path={RoutePaths.HOME} element={<HomePage books={books} />} />
          <Route path={`${RoutePaths.BOOK_DETAIL}/:id`} element={<BookDetailPage />} />
          <Route path={RoutePaths.CHECKOUT} element={<CheckoutPage />} />
        </Routes>
      </main>

      {!isLanding && (
        <Footer />
      )}
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;