import "./App.css";
import Login from "./Pages/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Studentsdashboard from "./Pages/studentsdashboard";
import Admindashboard from "./Pages/admindashboard";
import Register from "./Pages/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/studentsdashboard"
          element={<Studentsdashboard />}
        ></Route>
        <Route path="/admindashboard" element={<Admindashboard />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
