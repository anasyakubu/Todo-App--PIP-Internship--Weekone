import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./Pages/List/List";
import Add from "./Pages/Add/Add";
// import axios from "axios";

// axios.defaults.baseURL = "https://devograph.onrender.com";
// axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List />}></Route>
            <Route path="/Add" element={<Add />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
