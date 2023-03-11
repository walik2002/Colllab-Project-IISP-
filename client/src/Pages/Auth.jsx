import { observer } from "mobx-react-lite";
import React from "react";
import axios from 'axios';
import { useContext } from "react";
import { useState } from "react";
import { Button, Dropdown, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "..";
import { login, registration } from "../API/UserAPI";
import { MAINS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import moment from "moment";
import "../CSS/Auth.css"

const Auth = observer( () => {
    const {user} = useContext(Context)
    const location  = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [gender, setGender] = useState('')
    const [selectGender, setSelectGender] = useState('')
    const [selectGender2, setSelectGender2] = useState('')

    const Gender = [
        {"sex": "male",
        "sexy": "Мужской"},
        {"sex": "female",
        "sexy": "Женский"},
        {"sex": "other",
        "sexy": "Другое"}
    ]

    const [address, setAddress] = useState('')
    const [registrationDate, setRegistrationDate] = useState('')
    const [subscriptionStatus, setSubscriptionStatus] = useState('')
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleDateChange = (e) => {
        const inputDate = e.target.value;
        const formattedDate = moment(inputDate, 'YYYY-MM-DD').format('YYYY-MM-DD');
        setDateOfBirth(formattedDate);
      };

      const idClient = async (email) => {
            const res = await axios.get(`http://localhost:3001/clients/email/${email}`);
            user.setClientId(res.data.clientId)
            console.log(user.clientId)
      };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isLogin){  
        try {
            const res = await axios.post('http://localhost:3001/login', { email, password });
            console.log(res);
            if (res.status === 200) {
              setMessage(res.message);
              navigate(MAINS_ROUTE);
              alert(res.data.role)
              user.setIsAuth(true)
              console.log(res)
            
              idClient(res.data.email)

              // Здесь можно выполнить дополнительные действия после успешной аутентификации
            }
          } catch (err) {
            console.error(err);
            setMessage('Неправильный логин или пароль');
            alert('Неправильный логин или пароль')
          }
      }
    else{
        try {
            setGender(selectGender)
            let now = new Date()
            setRegistrationDate(moment(now).format("YYYY-MM-DD"))
            setSubscriptionStatus("inactive")
            console.log(registrationDate, subscriptionStatus, gender)
            const res = await axios.post('http://localhost:3001/clients', { 
                firstName, 
                lastName, 
                email, 
                phoneNumber, 
                password, 
                dateOfBirth, 
                gender, 
                address, 
                registrationDate, 
                subscriptionStatus });
            console.log(res);
            if (res.status === 201) {
              setMessage('Вы успешно зарегистрировались в системе!');
              navigate(MAINS_ROUTE);
              user.setIsAuth(true)
              alert('Вы успешно зарегистрировались в системе!')
              // Здесь можно выполнить дополнительные действия после успешной аутентификации
            }
          } catch (err) {
            console.error(err);
            setMessage('Ошибка!');
            alert('Ошибка!')
          }
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
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        />
                         <Form.Control
                        className="mt-3"
                        placeholder="Введите Имя" 
                        value={lastName}
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
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)} 
                        type="number"
                        />
                        <Form.Control
                        type="password"
                        className="mt-3"
                        placeholder="Введите пароль" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                        <Form.Control
                        type="date"
                        className="mt-3"
                        placeholder="Введите дату рождения" 
                        value={dateOfBirth}
                        onChange={handleDateChange}
                        />
                        <Dropdown  className="mt-3 form-field">
                            <Dropdown.Toggle>{selectGender2 || "Выберите пол"}</Dropdown.Toggle>
                                <Dropdown.Menu>
                                {Gender.map(gender =>
                                    <Dropdown.Item
                                       
                                        key={gender.sex}
                                        onClick={() => {
                                            setSelectGender(gender.sex);
                                            setSelectGender2(gender.sexy); }}
                                    >
                                        {gender.sexy} 
                                </Dropdown.Item>
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control
                        className="mt-3 form-field"
                        placeholder="Введите адресс" 
                        value={address}
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