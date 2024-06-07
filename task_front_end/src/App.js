import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "../src/pages/home/Home"
import Header from "./components/header/Header";
import OAuth2RedirectHandle from "./components/oauth2/OAuth2RedirectHandler";
import Test from "./components/test";
import Admin from "./pages/admin/Admin";
import { useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";

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
        <Backdrop
          sx={{ color: '#78909C', zIndex: (theme) => theme.zIndex.drawer + 1 ,backgroundColor: 'rgba(0, 0, 0, 0.1)'}}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
   </>
    
  );
}

export default App;
