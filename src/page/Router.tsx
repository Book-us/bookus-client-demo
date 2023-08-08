import { Route, Routes } from 'react-router-dom';
import StartPage from './Main/StartPage';
import LoginPage from './Login/LoginPage';
import LoginComplete from './Login/LoginComplete';
import MainPage from './Main/MainPage';

const Router = () => {
  return (
    <>
      <Routes>
        <Route index element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logincomplete" element={<LoginComplete />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default Router;
