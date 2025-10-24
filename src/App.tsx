// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage'
import Login from "./pages/(Auth)/Login";
import SignUp from "./pages/(Auth)/SignUp";

function App() {
  
  return (
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
   
      </BrowserRouter>
  )
}

export default App
