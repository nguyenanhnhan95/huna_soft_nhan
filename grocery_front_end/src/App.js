import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "../src/pages/home/Home"
import OAuth2RedirectHandle from "./components/oauth2/OAuth2RedirectHandler";
import Test from "./components/test";
import Admin from "./pages/admin/Admin";
import { useEffect, useState } from "react";
import BackdropLoading from "./utils/BackdropLoading";

function App() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(false);
    }, 1000); // 2 seconds delay

    return () => clearTimeout(timer); // Clean up the timer
  }, []);
  return (
    <>
    <div style={{ visibility: hidden ? 'hidden' : 'visible' }}>
      <BrowserRouter>
        <Routes>
          <Route path={'/admin/*'} element={<Admin />} />
          <Route path={'/oauth2/redirect'} element={<OAuth2RedirectHandle />} />
          <Route path={`/home`} element={<Home />} />
          <Route path={`/login`} element={<Login />} />
          <Route path={`/test`} element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
   {hidden && (
       <BackdropLoading/>
      )}
   </>
    
  );
}

export default App;
