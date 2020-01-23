import React from "react";
import "./style.css";

import Icon from "./FacebookIcon";

const App = () => {
  return (
    <>
      <Icon width={30} />
      <Icon width={100} fill="white" />
      <Icon
        width={200}
        fill="#fa2"
        className="bigger"
        style={{ background: "#333", padding: "16px" }}
      />
    </>
  );
};

export default App;
