import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Details from "./routes/Details";
import Lifestyle from "./routes/Lifestyle";
import Lovelife from "./routes/Lovelife";



function App() {
  return (
    <Router>
 <div className="App">
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/details" element= {<Details/>}/>
        <Route path="/lifestyle" element= {<Lifestyle/>}/>
        <Route path="/lovelife" element= {<Lovelife/>}/>
        <Route path="/about" element= {<About/>}/>
      </Routes> 
    </div>
    </Router>
   
  );
}

export default App;