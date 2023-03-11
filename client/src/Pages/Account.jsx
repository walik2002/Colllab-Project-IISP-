import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "..";
import '../CSS/Account.css'; // импортируйте свои стили

const Account = () => {
  const {user} = useContext(Context)
  const { id } = useParams();
  const [client, setClient] = useState(null);

  useEffect(() => {
    const fetchClient = async () => {
      console.log(user)
      const response = await axios.get(`http://localhost:3001/clients/${user.clientId}`);
      setClient(response.data);
    };
    fetchClient();
  }, [id]);

  if (!client) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="container">
      <h2>{client.firstName} {client.lastName}'s Profile</h2>
      <div className="client-info">
        <p>Email: {client.email}</p>
        <p>Phone Number: {client.phoneNumber}</p>
        <p>Date of Birth: {client.dateOfBirth}</p>
        <p>Gender: {client.gender}</p>
        <p>Address: {client.address}</p>
        <p>Registration Date: {client.registrationDate}</p>
        <p>Subscription Status: {client.subscriptionStatus}</p>
        <p>Subscription End Date: {client.subscriptionEndDate}</p>
        <p>Available Sessions: {client.availableSessions}</p>
      </div>
      <Link to="/update">
        <button>Update Profile</button>
      </Link>
    </div>
  );
};

export default Account;
