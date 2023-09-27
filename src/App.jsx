import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import JobPage from "./components/JobPage";
import Details from "./components/Details";
// import ProfilePage from "./components/ProfilePage";
import MyNavbar from "./components/MyNavbar";
import ProfilePage from "./components/Profile/ProfilePage";
import HomeMain from "./components/HomeMain";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProfilesAction, getMyProfileAction } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProfilesAction());
    dispatch(getMyProfileAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/profile/" element={<ProfilePage />}></Route>
        <Route path="/profile/:id" element={<ProfilePage />}></Route>
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
