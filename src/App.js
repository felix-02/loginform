import React from "react";
import appStyles from "./app.module.css";
import "./index.css";
import Form from "./Form";

export default function App() {
  return (
    <div className={appStyles.app}>
      <Form />
    </div>
  );
}
