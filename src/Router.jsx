import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const RouteList = () => (
  <Routes>
    <Route path="*" element={<Home />} />
    <Route exact path="/" element={<Home />} />
  </Routes>
);

export default RouteList;
