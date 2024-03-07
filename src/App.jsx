import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import View from "./components/View";
import New from "./components/New";
import Tira from "./components/Tira";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="principal" className="container">
        <Header />
        <View />
        <New />
        <Tira />
      </div>
    </>
  );
}

export default App;
