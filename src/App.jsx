import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
     <Outlet />
     <Navbar/>
     <Footer/>
    </>
  );
};

export default App;