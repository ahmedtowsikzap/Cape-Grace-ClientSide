import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Contact from './Components/Contact/Contact';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import About from './Components/About/About';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/contactus" element={<Contact />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/about" element={<About />} />




    </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
