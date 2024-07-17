import "./App.css";
import About from "./BasketBall/About";
import { HomePage } from "./BasketBall/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tournament from "./BasketBall/Tournament";
import Team from "./BasketBall/Team";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Tournament" element={<Tournament />} />
          <Route path="/Team" element={<Team/>} />
        </Routes>
      </BrowserRouter>
      {/* <HomePage/> */}
    </>
  );
}

export default App;
