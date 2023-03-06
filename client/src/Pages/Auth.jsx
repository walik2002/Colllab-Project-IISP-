import { observer } from "mobx-react-lite";
import React from "react";
import axios from 'axios';
import { useContext } from "react";
import { useState } from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "..";
import { login, registration } from "../API/UserAPI";
import { MAIN_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = observer( () => {
    const {user} = useContext(Context)
    const location  = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE


    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [PhoneNumber, setPhoneNumber] = useState('')
    const [DateOfBirth, setDateOfBirth] = useState('')
    const [Gender, setGender] = useState('')
    const [Address, setAddress] = useState('')
  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(isLogin){  
        try {
            const res = await axios.post('http://localhost:3001/login', { email, password });
            if (res.status === 200) {
              setMessage('Вы успешно вошли в систему!');
              navigate(MAIN_ROUTE);
              alert(message)
              // Здесь можно выполнить дополнительные действия после успешной аутентификации
            }
          } catch (err) {
            console.error(err);
            setMessage('Неправильный логин или пароль');
            alert(message)
          }
      }
    else{
              
    }

  };
    return (
        <Container 
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
        >
            <Card style={{width:600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form onSubmit={handleSubmit} className="d-flex flex-column">
                        {isLogin ?
                        <>
                        <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..." 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                        type="password"
                        />
                        </>
                        :
                        <>
                        <Form.Control
                        className="mt-3"
                        placeholder="Введите Фамилию" 
                        value={FirstName}
                        onChange={e => setFirstName(e.target.value)}
                        />
                         <Form.Control
                        className="mt-3"
                        placeholder="Введите Имя" 
                        value={LastName}
                        onChange={e => setLastName(e.target.value)}
                        />
                        <Form.Control
                        className="mt-3"
                        placeholder="Введите E-mail" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control
                        className="mt-3"
                        placeholder="Введите номер телефона"
                        value={PhoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)} 
                        type="number"
                        />
                        <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                        <Form.Control
                        className="mt-3"
                        placeholder="Введите дату рождения" 
                        value={DateOfBirth}
                        onChange={e => setDateOfBirth(e.target.value)}
                        />
                        <Form.Control
                        className="mt-3"
                        placeholder="Введите пол" 
                        value={Gender}
                        onChange={e => setGender(e.target.value)}
                        />
                        <Form.Control
                        className="mt-3"
                        placeholder="Введите адресс" 
                        value={Address}
                        onChange={e => setAddress(e.target.value)}
                        />
                        </>

                        }
                        
                        <Row className="d-flex justify-content-between mt-1 pl-3 pr-3">
                            {
                            isLogin ? 
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            : 
                            <div>
                                Есть акаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                            }
                            <Button className="mt-3" variant={"outline-success"} type="submit">
                               {isLogin ? 'Войти' : "Регистрация" } 
                            </Button>
                        </Row>
                </Form>
            </Card>
        </Container>
    )
}
);

export default Auth;