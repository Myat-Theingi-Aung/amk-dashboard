import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={ <Home /> } />
        <Route path="*" element={ <NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
