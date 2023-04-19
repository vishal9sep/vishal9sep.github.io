import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";
import DarkWave from "../Components/Waves/DarkWave";

const GitHub = () => {
  return (
    <div className="github">
      <GitHubCalendar username="vishal9sep" />
    </div>
  );
};
export default GitHub;
