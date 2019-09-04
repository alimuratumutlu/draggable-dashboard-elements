import React, { Component } from "react";


function Selector(component) {

  switch (component) {
    case "Table":
      return "<Table />";
    case "Form":
      return "<Form />";
    case "Settings":
      return "<Settings />";
    default:
      return null;
  }
}

export default Selector;
