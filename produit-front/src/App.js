import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./layout/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./produits/Add";
import Edit from "./produits/Edit";
import View from "./produits/View";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Add" element={<Add />} />
          <Route exact path="/Edit/:id" element={<Edit />} />
          <Route exact path="/View/:id" element={<View />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;