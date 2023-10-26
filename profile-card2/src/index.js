import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="unprofessional.jpg" alt="joy kiboi" />;
}

function Intro() {
  return (
    <div>
      <h1>Joy Kiboi</h1>
      <p>
        Hello, I'm Joy Kiboi, a passionate and versatile Full Stack Developer
        with a strong foundation in UI/UX design, specializing in React, Golang,
        and JavaScript technologies.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="--" color="blue" />
      <Skill skill="Golang" emoji="$$" color="green" />
      <Skill skill="mySQL & Postgra" color="orangered" />
      <Skill skill="html +CSS" emoji="**" color="yellow" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
//reportWebVitals();
