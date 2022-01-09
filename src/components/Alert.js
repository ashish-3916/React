import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import "../App.css";

export default function Alert(props) {
  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    props.alert && (
      <ToastContainer className="p-3" position="top-center">
        <Toast bg={props.alert.type}>
          <Toast.Body>
            <strong>{Capitalize(props.alert.type)}:</strong> {props.alert.msg}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    )
  );
}

/*    
<div id="message">
  <div style={{ padding: 5 }}>
    <div id="inner-message" className={`alert alert-${props.alert.type} alert-dismissible fade show`}>
      <strong>{Capitalize(props.alert.type)}:</strong> {props.alert.msg}
    </div>
  </div>
</div>

*/
