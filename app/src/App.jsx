import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import theme from "./theme.js";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Test from './pages/Test/Test';
import { CssBaseline } from "@mui/material";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test/Test';
import Auth from "./pages/Auth/Auth.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Dashboard1 from "./pages/Dashboard/Dashboard1.jsx";
import DashboardSlider from "./components/DashboardSlider/DashboardSlider.jsx";
import Sidebar1 from "./components/Sidebar/Sidebar1.jsx";

const App = () => {

  const routes = (
    <Router>
      <Routes>
      <Route path="/" exact element={<Test/>}/>
        <Route path="/home" exact element={<Home/>}/>
        <Route path="/auth" exact element={<Auth/>}/>
        <Route path="/dashboard" exact element={<Dashboard/>}/>
        <Route path="/dashboard1" exact element={<Dashboard1/>}/>
        <Route path="/slider" exact element={<DashboardSlider/>}/>
        <Route path="/side" exact element={<Sidebar1/>}/>
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
