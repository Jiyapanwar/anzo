import React from "react";
import Page1 from "./pages/Page1";
import Header from "./components/Header";
import Page2 from "./pages/Page2";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";

const App = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Page1 />
        <Page2 />
        <Page4 />
        <Page5 />
      </div>
    </>
  );
};

export default App;
