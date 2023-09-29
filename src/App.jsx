import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import JobPage from "./components/Job/JobPage";
import Details from "./components/Job/Details";
import MyNavbar from "./components/MyNavbar";
import ProfilePage from "./components/Profile/ProfilePage";
import HomeMain from "./components/HomeMain";
import DetailsMobile from "./components/Job/DetailsMobile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProfilesAction, getMyProfileAction } from "./redux/actions";
import FavouriteJobs from "./components/Job/FavouriteJobs";
import PutDeleteExperience from "./components/Profile/SubMainSection/PutDeleteExperience";
import ModExp from "./components/Profile/SubMainSection/ModExp";

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
        <Route path="/profile/experience/details" element={<PutDeleteExperience />}></Route>
        <Route path="/profile/experience/details/:id" element={<ModExp />}></Route>
        <Route path="/jobs/:query" element={<JobPage></JobPage>}></Route>
        <Route path="/jobs/:query/favourite" element={<FavouriteJobs></FavouriteJobs>}></Route>
        <Route path="/jobs/:query/details/:category" element={<Details></Details>}></Route>
        <Route path="/jobs/:query/details/mobile/:category/:jobId" element={<DetailsMobile></DetailsMobile>}></Route>
        <Route path="/" element={<HomeMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
