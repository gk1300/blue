import React from "react";
import "./Modal.css";
import calender from "../assets/calendar.png";

const Modal = () => {
  const handleClose = () => {
    document.getElementById("myModal").style.display = "none";
  };
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span>
            <img src={calender} alt="logo"></img>
          </span>
          <span>Pub G</span>
        </div>
        <div className="modal-body">
          <h3>Pricing</h3>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td style={{ color: "#7788A3" }}>1 Week - 1 Month</td>
                <td style={{ color: "#556789", fontWeight: "bold" }}>
                  $ 100.00
                </td>
              </tr>
              <tr>
                <td style={{ color: "#7788A3" }}>6 Months</td>
                <td style={{ color: "#556789", fontWeight: "bold" }}>
                  $ 500.00
                </td>
              </tr>
              <tr>
                <td style={{ color: "#7788A3" }}>1 Year</td>
                <td style={{ color: "#556789", fontWeight: "bold" }}>
                  $ 900.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="modal-footer">
          <button className="close" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
