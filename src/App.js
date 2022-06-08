import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Names from './components/Names';
import Addresses from './components/Addresses';
import MainForm from './components/MainForm';
import Contact from './components/Contact';
import About from './components/About';

const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={theme}>
        <NavBar></NavBar>
          <Routes>
            <Route path = "/" element={<MainForm />} />
            <Route path = "names" element={<Names />} />
            <Route path = "addresses" element={< Addresses />} />
            <Route path = "about" element={< About />} />
            <Route path = "contactus" element={< Contact />} />
          </Routes>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
