import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRouter";

import Home from "../components/Home";
import { NewsList } from "../components/News";
import { NoAuth, Page404 } from "../components/ErrorPages";
import NewsCreate from "../components/News/NewsCreate";

const RouteList = () => {
  const isAuth = true;
  return (
    <Routes>
      <Route path="*" element={<Page404 />} />
      <Route exact path="/no-auth" element={<NoAuth />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/news" element={<NewsList />} />
      <Route
        path="/news/create"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <NewsCreate />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default RouteList;
