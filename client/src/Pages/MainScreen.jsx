import React from "react";
import { Link } from "react-router-dom";
import Banner from "../tables/Banner";
import "../CSS/Banner.css";

function MainScreen() {
  return (
    <div>
      <Banner />
      <nav>
        <ul>
        <li>
            <Link to="/schedule">Главная страница</Link>
          </li>
          <li>
            <Link to="/schedule">Расписание</Link>
          </li>
          <li>
            <Link to="/trainings">Тренировки</Link>
          </li>
          <li>
            <Link to="/coaches">Тренеры</Link>
          </li>
          <li>
            <Link to="/subscriptions">Абонементы</Link>
          </li>
          <li>
            <Link to="/profile">Профиль</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainScreen;
