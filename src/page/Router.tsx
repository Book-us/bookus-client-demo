import { Route, Routes } from 'react-router-dom';
import Home from './Main/Home';

const Router = () => {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </>
    );
};

export default Router;
