import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/contactus" element={<Contact />} />



    </Routes>
    </BrowserRouter>
  );
}

export default App;
