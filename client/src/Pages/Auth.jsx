import { observer } from "mobx-react-lite";
import React from "react";
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
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [fathername, setFathername] = useState('')
    const [phone_number, setPhone_number] = useState('')
    const Click = async () => {
        try{
            let data;
            if(isLogin){  
                data = await login(email, password)
            }
            else{
                data = await registration(email, password, name, surname, fathername, phone_number )
            }
            console.log(data)
            user.setRole(data.role)
            user.setID(data.id)
            console.log(user.id)
            user.setUser(user)
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
        }
        catch(e)
        {
            alert(e.response.data.message)
        }
       
    }
    return (
        <Container 
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
        >
            <Card style={{width:600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
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
                        placeholder="Введите имя" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                         <Form.Control
                        className="mt-3"
                        placeholder="Введите фамилию" 
                        value={surname}
                        onChange={e => setSurname(e.target.value)}
                        />
                        <Form.Control
                        className="mt-3"
                        placeholder="Введите отчество" 
                        value={fathername}
                        onChange={e => setFathername(e.target.value)}
                        />
                        <Form.Control
                        className="mt-3"
                        placeholder="Введите email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                        <Form.Control
                        className="mt-3"
                        placeholder="Введите номер телефона"
                        value={phone_number}
                        onChange={e => setPhone_number(e.target.value)} 
                        type="number"
                        />
                        <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
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
                            <Button className="mt-3" variant={"outline-success"} onClick={Click}>
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