import React from "react";
import { Book } from "./Book";
import { Preloader } from "./Preloader";

import "./App.css";

const App = (props) => {
  return props.isLoading ? (
    <Preloader />
  ) : (
    <div>
      <Book name="JS" year="2018" price="1000" />
      <Book name="React" year="2020" price="5000" />
      <Book name="Vue" year="2019" price="3000" />
      <Book name="Python" year="2015" price="5000"></Book>
    </div>
  );
};

export default App;
