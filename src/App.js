import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import NotFound from "./NotFound";
import Dashboard from "./Dashboard";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="/home" element={ <Home /> } />
        <Route path="*" element={ <NotFound />} />
        <Route path="/one" element={ <One /> } />
        <Route path="/two" element={ <Two />} />
        <Route path="/three" element={ <Three /> } />
        <Route path="/four" element={ <Four />} />
      </Routes>
    </div>
  );
}

export default App;
