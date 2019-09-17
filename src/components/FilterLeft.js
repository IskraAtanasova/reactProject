import React from "react";
import Thought from "./Thought";

const FilterLeft = () => {

  return (
    <div className="wrapper">
              <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Filter by:</h3>
                </div>
                <ul className="filter-comp">
                    <li className="active"><a href="#">Title</a></li>
                    <li><a href="#">Category</a></li>
                    <li><a href="#">Author</a></li>
                  </ul>
              </nav>
              <Thought />


    </div>
  );
};


export default FilterLeft;