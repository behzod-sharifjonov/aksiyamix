import { Route, Routes } from "react-router-dom"
import Main from "./views/Main/Main"
import Detail from "./views/Detail/Detail"
import { createContext, useState } from "react";
import MobileCategoryPage from "./container/Categories/MobileCategoryPage";
import Header from "./components/Header/Header";
import HeaderMenuMobile from "./components/Header/HeaderMenuMobile";
import Login from "../src/views/Auth/Login"
import AuthModal from "./views/Auth/AuthModal";
import NotFound from "./components/404/NotFound";
import Catalog from "./components/Category/Category";

export const Context = createContext()


function App() {

  const [language, setLanguage] = useState('uz');

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <Context.Provider value={{ language, setLanguage, showModal, setShowModal, closeModal, openModal }}>
      <Header />
      <HeaderMenuMobile />
      <Login />
      <AuthModal />
      <Routes>
        <Route path="detail" element={<Detail />} />

        <Route path="/categories" element={<MobileCategoryPage />} />
        <Route path="/best-ads" element={<h1>Лучшие объявления</h1>} />
        <Route path="/discounts-start" element={<h1>Объявления о начале скидки</h1>} />
        <Route path="/" element={<Main />} />
        <Route path="/discounts-nearby" element={<h1>Скидки рядом</h1>} />
        <Route path="/recent-ads" element={<h1>Последние просмотренные объявления</h1>} />
        <Route path="/paused-ads" element={<h1>Остановленные объявления</h1>} />

        <Route path="/favorites" element={<h1>Остановленные объявления</h1>} />
        <Route path="/profile" element={<h1>Остановленныеee объявления</h1>} />
        <Route path="/menu" element={<h1>Остановленныеcc объявления</h1>} />

        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Context.Provider>
  )
}

export default App
