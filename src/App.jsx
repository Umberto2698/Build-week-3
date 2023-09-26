import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<ProfilePage></ProfilePage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
