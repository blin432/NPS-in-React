import React, { Component } from "react";
import SingleCard from "./SingleCard.jsx";


class MainLayout extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <div className="sticky row justify-content-around">
         
          <button type="button" className="btn btn-light">
            Filter
          </button>
          <div>Parks Selected</div>
          <button type="button" className="btn btn-light">
            Reset
          </button>

        </div>
        <div className="row justify-content-around">
          <SingleCard />
        </div>
      </div>
    );
  }
}
export default MainLayout;
