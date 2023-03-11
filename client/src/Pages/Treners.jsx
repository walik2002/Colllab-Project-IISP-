import React, { useState, useEffect } from 'react';
import "../CSS/Trainers.css"
import axios from 'axios';

const Treners = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/trainers')
      .then(res => {
        setTrainers(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      <h1>Тренеры</h1>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Адрес электронной почты</th>
            <th>Номер телефона</th>
            <th>Дата рождения</th>
            <th>Пол</th>
            <th>Специализация</th>
            <th>Опыт работы</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map(trainer => (
            <tr key={trainer.id}>
              <td>{trainer.firstName}</td>
              <td>{trainer.lastName}</td>
              <td>{trainer.email}</td>
              <td>{trainer.phoneNumber}</td>
              <td>{trainer.dateOfBirth}</td>
              <td>{trainer.gender}</td>
              <td>{trainer.specialization}</td>
              <td>{trainer.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Treners;