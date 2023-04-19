import React from "react";
import "./Stats.css";
import DarkWave from "../Components/Waves/DarkWave";


const Stats = () => {
  return (
    // streak
    <div className="stats">
      <div className="statsindiv">
        <a href="https://github.com/vishal9sep">
          <img
            alt="Vishal"
            className="stats_image"
            src="https://github-readme-streak-stats.herokuapp.com/?user=jhaaman1"
          />
        </a>
      </div>

      <div className="statsindiv">
        <a href="https://github.com/vishal9sep">
          <img
            alt=""
            className="stats_image"
            src="https://github-readme-stats.vercel.app/api?username=vishal9sep&count_private=true&show_icons=true" //stats
          />
        </a>
      </div>
      {/* <DarkWave /> */}
    </div>
  );
};

export default Stats;
