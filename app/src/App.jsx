import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import theme from "./theme.js";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Test from './pages/Test/Test';
import { CssBaseline } from "@mui/material";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test/Test';
import Login from '../../app/src/pages/Login/Login';
import SignUp from '../../app/src/pages/SignUp/SignUp';
import Auth from "./pages/Auth/Auth.jsx";


const App = () => {

  const routes = (
    <Router>
      <Routes>
      <Route path="/" exact element={<Test/>}/>
        <Route path="/home" exact element={<Home/>}/>
        {/* <Route path="/login" exact element={<Login/>}/> */}
        {/* <Route path="/signup" exact element={<SignUp/>}/> */}
        <Route path="/auth" exact element={<Auth/>}/>
      </Routes>
    </Router>
  );


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {routes}
      </ThemeProvider>
    </>
  );
};

export default App;
