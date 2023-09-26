import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#f4f2ee" }}>
        <Routes>
          <Route path="/" element={<ProfilePage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
