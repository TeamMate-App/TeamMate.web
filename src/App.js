import React from "react";
import "./App.css";
import AppRouter from "./components/AppRouter/AppRouter.jsx";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
     <Navbar />
      <AppRouter className="container"/>
      
    </div>
  );
}

export default App;
