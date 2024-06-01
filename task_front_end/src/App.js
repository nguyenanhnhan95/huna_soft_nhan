import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "../src/pages/home/Home"
import Header from "./components/header/Header";
import OAuth2RedirectHandle from "./components/oauth2/OAuth2RedirectHandler";
import Test from "./components/test";
import Admin from "./pages/admin/Admin";
import { useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/admin/*'} element={<Admin />} />
        <Route path={'/oauth2/redirect'} element={<OAuth2RedirectHandle />} />
        <Route path={`/home`} element={<Home />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/test`} element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
