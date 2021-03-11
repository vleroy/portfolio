import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import ManOnTableImg from "../../assests/images/manOnTable.svg";

export default function Greeting() {
  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">{greeting.title}</h1>
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Me contacter" href="#contact" />
              <Button text="Voir mon CV" newTab={true} href={greeting.resumeLink} />
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="saad sitting on table" src={ManOnTableImg}></img>
        </div>
      </div>
    </div>
  );
}
