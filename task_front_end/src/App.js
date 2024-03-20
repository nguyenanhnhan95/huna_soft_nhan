import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "../src/pages/home/Home"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path={`/home`} element={<Home />}/>
    <Route path={`/login`} element={<Login />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
