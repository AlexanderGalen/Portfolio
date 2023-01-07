import React from 'react'
import Project from "../../components/Project";
import chatImage from "./assets/chat.png";
import nutriImage from "./assets/nutriTeam.png"
import catDogImage from "./assets/catsVsDogs.png"

export default function PortFolio() {
  return (
    <div className="projects">
      <div className="row" > 
        <div className="col-6">
          <Project
            image={nutriImage}
            title={"NutriTeam : Nutrition App"}
            github={"https://github.com/AlexanderGalen/NutriTech"}
            link={"https://rubendc91.github.io/NutriTeam/"}
          />
        </div>
        <div className="col-6">
          <Project
            image={chatImage}
            title={"Chattable : Instant Messaging App"}
            github={"https://github.com/AlexanderGalen/Chattable"}
            link={"https://corgi-messenger.herokuapp.com/login"}
          />
        </div>
      </div>
      <div className="row" > 
        <div className="col-6">
          <Project
            image={catDogImage}
            title={"Cats vs Dogs : Web Based Codenames Clone"}
            github={"https://github.com/AlexanderGalen/Cats-vs-Dogs"}
            link={"https://mysterious-hollows-84029.herokuapp.com/"}
          />
        </div>
        <div className="col-6">
        <Project
          image={"https://picsum.photos/200/300"}
          title={"Project 4"}
          github={"https://github.com/AlexanderGalen/"}
          link={"#"}
        />
        </div>
      </div>
    </div>
  )
}
