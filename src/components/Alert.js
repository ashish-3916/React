import React from "react";
import "../App.css";

export default function Alert(props) {
  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    props.alert && 
      <div id="message">
        <div style={{padding: 5}}>
          <div id="inner-message" className={`alert alert-${props.alert.type} alert-dismissible fade show`}>
          <strong>{Capitalize(props.alert.type)}:</strong> {props.alert.msg}
          </div>
        </div>
      </div>
    
  );
}
