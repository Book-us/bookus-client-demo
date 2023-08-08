import { Route, Routes } from 'react-router-dom';

// Login
import LoginPage from './Login/LoginPage';
import LoginComplete from './Login/LoginComplete';

// MVP
import StartPage from './Main/StartPage';
import MainPage from './Main/MainPage';
import BookSearch from './Main/BookSearch';

const Router = () => {
  return (
    <>
      <Routes>
        <Route index element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logincomplete" element={<LoginComplete />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/search" element={<BookSearch />} />
      </Routes>
    </>
  );
};

export default Router;
