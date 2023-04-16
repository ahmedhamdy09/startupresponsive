// import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navss from "./components/Navss/Navss";
// import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <div className="ahmed-hamdy">
        <Navss />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
