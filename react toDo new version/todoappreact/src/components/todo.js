import React from "react";
import "./style.css";
const Todo = () => {
  return (
    <div className="main-div">
      <div className="child-div">  
        <figure>
          <img src="./" alt="no image found"></img>
          <figcaption>Add Your List Here</figcaption>
        </figure>

        <div className="addItems">
          <input
            type="text"
            placeholder="👉 Add Items"
            className="form-control"
          >
            {" "}
          </input>
        </div>
      </div>
    </div>
  );
};
export default Todo