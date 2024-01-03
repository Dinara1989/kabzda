import React from 'react';
import './App.css';
import Accordion from "./components/accordion/Accordion";
import Rating from "./components/raiting/Rating";

function App() {
  return (
    <div>
      <AppTitle/>
      <Rating/>
      <Accordion/>
      <Rating/>
    </div>
  );
}

function AppTitle() {
    return (
        <div>Hello</div>
    )
}
export default App;
