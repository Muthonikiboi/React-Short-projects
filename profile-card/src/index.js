import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <Card
      content="Hello, I'm Joy Kiboi, a passionate and versatile Full Stack
  Developer with a strong foundation in UI/UX design, specializing in
  React, Golang, and JavaScript technologies."
      image="/unprofessional.jpg"
      skill1="UI/UX Design"
      skill2="React Development"
      skill3="Javascript Development"
      skill4="Golang Development"
    />
  );
}

function Card(props) {
  console.log(props);
  return (
    <div className="main">
      <div className="main-container">
        <div className="img-container">
          <img src={props.image} alt="myPhoto" className="img" />
        </div>

        <div className="content">
          <p>{props.content}</p>
          <div className="buttons">
            <button className="first">{props.skill1}</button>
            <button className="second">{props.skill2}</button>
            <button className="third">{props.skill3}</button>
            <button className="forth">{props.skill4}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
