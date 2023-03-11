import React from 'react';
import '../CSS/Contact.css'; // импортируйте свои стили

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Свяжитесь с нами</h1>
      <div className="contact-info">
        <div className="contact-item">
          <h2>Адрес</h2>
          <p>г. Могилёв, ул. Профсоюзная, д. 100</p>
        </div>
        <div className="contact-item">
          <h2>Телефон</h2>
          <p>+7 (495) 123-45-67</p>
        </div>
        <div className="contact-item">
          <h2>Электронная почта</h2>
          <p>info@fitness-center.ru</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;