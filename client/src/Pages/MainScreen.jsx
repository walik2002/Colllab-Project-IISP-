import React from "react";
import { Link } from "react-router-dom";
import Banner from "../tables/Banner";
import "../CSS/Banner.css";

function MainScreen() {
  return (
    <div>
      <Banner/>
      <nav>
        <ul>
        <li>
            <Link to="/main">Главная страница</Link>
          </li>
          <li>
            <Link to="/raspisanie">Расписание</Link>
          </li>
          <li>
            <Link to="/treners">Тренеры</Link>
          </li>
          <li>
            <Link to="/service">Услуги</Link>
          </li>
          <li>
            <Link to="/account">Профиль</Link>
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
