import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import JobPage from "./components/JobPage";
import Details from "./components/Details";
import ProfilePage from "./components/ProfilePage";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/jobs/" element={<JobPage></JobPage>}></Route>
        <Route path="/jobs/details/" element={<Details></Details>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
