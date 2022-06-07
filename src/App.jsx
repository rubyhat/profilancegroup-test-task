import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
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
