import React from "react";
import Project from "../../components/Project";
import chatImage from "./assets/chat.png";
import nutriImage from "./assets/nutriTeam.png";
import catDogImage from "./assets/catsVsDogs.png";

export default function PortFolio() {
  return (
    <div className="projects">
      <div className="row justify-content-center">
        <Project
          image={catDogImage}
          title={"Cats vs Dogs : Web Based Codenames Clone"}
          github={"https://github.com/AlexanderGalen/Cats-vs-Dogs"}
          link={"https://game.alexandergalen.com"}
        />
        <Project
          image={chatImage}
          title={"Chattable : Instant Messaging App"}
          github={"https://github.com/AlexanderGalen/Chattable"}
          link={"https://chat.alexandergalen.com"}
        />
      </div>
      <div className="row justify-content-center">
        <Project
          image={nutriImage}
          title={"NutriTeam : Nutrition App"}
          github={"https://github.com/AlexanderGalen/NutriTech"}
          link={"https://nutritech.alexandergalen.com"}
        />
      </div>
    </div>
  );
}
