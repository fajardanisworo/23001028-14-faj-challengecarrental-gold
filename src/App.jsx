import Head from "./component/Head";
import LendingPages from "./pages/LendingPages";
import SearchCar from "./pages/SearchCar";
import SearchDetail from "./pages/SearchDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LendingPages />} />
          <Route path="/SearchCar" element={<SearchCar />} />
          <Route path="/SearchDetail/:id" element={<SearchDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
