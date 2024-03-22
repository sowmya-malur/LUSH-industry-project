import './App.scss';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="app">
            <BrowserRouter>
            <Header>
              <Routes>
              <Route path="/" element={<HomePage />} />
              </Routes>
            </Header>
            </BrowserRouter>
     {/* <p className="app__header">Helvetica replacement</p> 
     <p className="app__title">Deep Sleep</p> */}
    </div>
  );
}

export default App;
