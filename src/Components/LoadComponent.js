import React from "react";
import { Spinner } from "reactstrap";

function LoadComponent() {
  return (
    <div className="loadingPage">
      <Spinner
        color="primary"
        style={{
          height: "3rem",
          width: "3rem",
          marginTop: "40vh",
          marginLeft: "45vw",
        }}
      ></Spinner>
    </div>
  );
}

export default LoadComponent;