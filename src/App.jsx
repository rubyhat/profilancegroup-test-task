import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";

import Header from "./components/Header";
import RouteList from "./Router/RouterList";

function App() {
  const createHistory = require("history").createBrowserHistory;
  const history = createHistory();
  return (
    <div className="wrapper">
      <Router history={history}>
        <Header />
        <main className="content">
          <RouteList />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
