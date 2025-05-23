import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import theme from "./theme.js";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Test from './pages/Test/Test';
import { CssBaseline } from "@mui/material";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Test from "./pages/Test/Test.jsx";
import Auth from "./pages/Auth/Auth.jsx";
import Dashboard1 from "./pages/Dashboard/Dashboard1.jsx";
import DashboardSlider from "./components/DashboardSlider/DashboardSlider.jsx";
import Sidebar1 from "./components/Sidebar/Sidebar1.jsx";
import Editor from "./pages/Editor/index.jsx";
import DashOff from "./pages/DashOff/index.jsx";
import Viewer from "./pages/Viewer/index.jsx";
import MyDashOff from "./pages/MyDashOff/MyDashOff.jsx";
import Profile from "./pages/Profile/Profile.jsx";

const App = () => {
  const routes = (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" exact element={<Auth />} />
        <Route path="/dashboard" exact element={<Dashboard1 />} />
        <Route path="/slider" exact element={<DashboardSlider />} />
        <Route path="/side" exact element={<Sidebar1 />} />
        <Route path="/space/:id" exact element={<Editor />} />
        <Route path="/dashoffs/:id" exact element={<DashOff />} />
        <Route path="/dashoffs/:id/preview" exact element={<Viewer />} />
        <Route path="/my-dashoffs" exact element={<MyDashOff />} />
        <Route path="/my-profile" exact element={<Profile />} />
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
