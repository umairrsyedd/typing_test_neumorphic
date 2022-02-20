import React from "react";
import Accuracy from "./Accuracy";
import Speed from "./Speed";
import Errors from "./Errors";
import "./Analytics.css";
export default function Analytics() {
  return (
    <div className="Analytics">
      <Speed />
      <Accuracy />
      <Errors />
    </div>
  );
}
