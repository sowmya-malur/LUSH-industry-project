import './App.scss';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

function App() {
  return (
    <div className="app">
            <BrowserRouter>
            <Header>
              <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/checkout" element={<CheckoutPage/>}/>
              </Routes>
            </Header>
            </BrowserRouter>
     {/* <p className="app__header">Helvetica replacement</p> 
     <p className="app__title">Deep Sleep</p> */}
    </div>
  );
}

export default App;
