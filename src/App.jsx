import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import JobPage from "./components/JobPage";
import Details from "./components/Details";
// import ProfilePage from "./components/ProfilePage";
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
        <Route path="/jobs/details/" element={<Details></Details>}></Route>
        <Route path="/" element={<HomeMain />} />
      </Routes>
    </BrowserRouter>
  );
}
{
  /* <div style={{ backgroundColor: "#f4f2ee" }}>
  <Routes>
  </Routes>
</div> */
}

export default App;
