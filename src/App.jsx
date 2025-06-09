import React from "react";
import Page1 from "./pages/Page1";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Page1 />
      </div>
    </>
  );
};

export default App;
