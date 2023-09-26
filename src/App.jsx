import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomeMain from "./components/HomeMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
