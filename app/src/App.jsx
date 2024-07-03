import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import theme from "./theme.js";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
//import Test from './pages/Test/Test';
import { CssBaseline } from "@mui/material";

const App = () => {
  /*const routes = (
    <Router>
      <Routes>
      <Route path="/" exact element={<Test/>}/>
        <Route path="/home" exact element={<Home/>}/>
      </Routes>
    </Router>
  
  );*/

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
