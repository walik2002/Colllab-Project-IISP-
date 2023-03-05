import React from "react";
import "../CSS/Banner.css";

function Banner() {
  return (
    <div className="banner">
      <h1>Добро пожаловать в наш фитнес клуб</h1>
      <p>Мы поможем вам достичь своих целей и стать здоровым и крепким</p>
      <button className="cta">Начать тренироваться</button>
    </div>
  );
}

export default Banner;
