
import Head from "./component/Head";
import LendingPages from "./pages/LendingPages";
import SearchCar from "./pages/SearchCar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<LendingPages />}/>
        <Route path="/SearchCar" element={<SearchCar />}/>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
