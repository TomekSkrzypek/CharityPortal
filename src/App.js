import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.scss";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/Register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
