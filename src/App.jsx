import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/service';
import Portfolio from './routes/Portfolio';
import Contact from './Components/contact';


import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    fontSize: 18,
    color: "#0d3e63",
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {



  return (
    <ThemeProvider theme={theme}>
     
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
     
    </ThemeProvider>
  );
}

export default App;