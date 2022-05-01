import { Route, Routes } from "react-router-dom";
import "./App.css";
import ActivityList from "./components/ActivityList/ActivityList";
import Intro from "./components/Intro/Intro";
import Layout from "./components/Layout/Layout";
import Reflection from "./components/Reflection/Reflection";
import EurofinsDocker from "./components/selectedComponents/EurofinsDocker/EurofinsDocker";
import EurofinsPostman from "./components/selectedComponents/EurofinsPostman/EurofinsPostman";
import Hackathon from "./components/selectedComponents/Hackathon/Hackathon";
import Selection from "./components/Selection/Selection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Intro />} />
          <Route path="activiteiten" element={<ActivityList />} />
          <Route path="selectie" element={<Selection />} />
          <Route path="reflectie" element={<Reflection />} />
          <Route path="eurofins-postman" element={<EurofinsPostman />} />
          <Route path="hackathon" element={<Hackathon />} />
          <Route path="eurofins-docker" element={<EurofinsDocker />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
