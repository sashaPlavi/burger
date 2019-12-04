import React from "react";
import Layouts from "./components/layout/Layout";
import BurgerBuilder from "./conatiner/BurgerBulder/Burgerbuilder";

class App extends React.Component {
  render() {
    return (
      <Layouts>
        <BurgerBuilder />
      </Layouts>
    );
  }
}

export default App;
