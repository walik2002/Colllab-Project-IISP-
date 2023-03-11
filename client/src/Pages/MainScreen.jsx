import React from "react";
import { Context } from "..";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Banner from "../tables/Banner";
import "../CSS/Banner.css";
import "../CSS/MainScreen.css";
import { observer } from "mobx-react-lite";

const MainScreen = observer(() => {
  const {user} = useContext(Context)
  return (
    <div className="container">
      <Banner />
      <nav className="navbar">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/main">
              Главная страница
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/raspisanie">
              Расписание
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/treners">
              Тренеры
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/account/" + user.clientId} >
              Профиль
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacts">
              Контакты
            </Link>
          </li>
        </ul>

        {user.isAuth ? 

        <div>
        <Link className="nav-link"  to="/main" 
        onClick={() => user.setIsAuth(false)}>
              Выйти
        </Link>
        </div>
        :
        <div>
        <Link className="nav-link"  to="/login">
              Авторизация
        </Link>
        </div>
        }   
      </nav>
    </div>
  
  );
})

export default MainScreen;
