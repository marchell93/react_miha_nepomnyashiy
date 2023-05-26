import React from "react";
import { Book } from "./Book";

import "./App.css";

const App = () => {
  return (
    <div>
      <Book name="JS" year="2018" price="1000" />
      <Book name="React" year="2020" price="5000" />
      <Book name="Vue" year="2019" price="3000" />
    </div>
  );
};

export default App;
