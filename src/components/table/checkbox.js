import React, { Component } from "react";

const Checkbox = ({ checked }) => (
  <div>
    <input type="checkbox" checked={checked} />
  </div>
);


Checkbox.defaultProps = {
    checked: true
  };
  

export default Checkbox;
