import React from "react";
import Navbar from "./component/navbar/Navbar";
import Admin from "./pages/Admin/Admin";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Admin />
    </div>
  );
};

export default App;
