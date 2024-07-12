import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/service';
import Portfolio from './routes/Portfolio';
import Contact from './Components/contact';






function App() {



  return (


    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>


  );
}

export default App;