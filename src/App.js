import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar.js"
import ItemListContainer from "./Components/ItemListContainer";
import logoDsastre from "./assets/logoDsastre.jpg";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a DSASTRE"/>
    </>
  );
}

export default App;
