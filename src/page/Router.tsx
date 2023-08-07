import { Route, Routes } from 'react-router-dom';
import StartPage from './Main/StartPage';
import LoginPage from './Login/LoginPage';

const Router = () => {
  return (
    <>
      <Routes>
        <Route index element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default Router;
