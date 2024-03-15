import { BrowserRouter } from "react-router-dom";
import Login from "./components/login/Login";
import { Home } from "./pages/home/Home";


function App() {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
}

export default App;
