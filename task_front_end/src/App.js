import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "../src/pages/home/Home"
import Header from "./components/header/Header";
import OAuth2RedirectHandle from "./components/oauth2/OAuth2RedirectHandler";
import Test from "./components/test";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/oauth2/redirect'} element={<OAuth2RedirectHandle/>}/>
        <Route path={`/home`} element={<Home />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/test`} element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
