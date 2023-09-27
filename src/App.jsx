import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import JobPage from "./components/Job/JobPage";
import Details from "./components/Job/Details";
import MyNavbar from "./components/MyNavbar";
import ProfilePage from "./components/Profile/ProfilePage";
import HomeMain from "./components/HomeMain";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/profile/" element={<ProfilePage />}></Route>
        <Route path="/jobs/" element={<JobPage></JobPage>}></Route>
        <Route path="/jobs/details/:category" element={<Details></Details>}></Route>
        <Route path="/" element={<HomeMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
