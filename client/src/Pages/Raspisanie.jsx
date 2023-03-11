import React, { useState, useEffect } from "react";
import axios from "axios";

const Raspisanie = () => {
  const [classes, setClasses] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [clientId, setClientId] = useState("");
  const [classId, setClassId] = useState("");
  const [bookingDate, setBookingDate] = useState("");

  useEffect(() => {
    const fetchClasses = async () => {
      const result = await axios("http://localhost:3001/classes");
      setClasses(result.data)
      console.log(result.data)
      console.log(classes.classId)
     
    };
    const fetchBookings = async () => {
      const result = await axios("http://localhost:3001/bookings");
      setBookings(result.data);
    };
    fetchClasses();
    fetchBookings();
    
  }, []);

  const SetClassId = async (claccId) => {
    setClassId(claccId)
  }

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(classId)
      await axios.post("http://localhost:3001/bookings", { clientId, classId, bookingDate });
      setBookings([...bookings, { clientId, classId, bookingDate }]);
      setClientId("");
      setClassId("");
      setBookingDate("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Club Classes</h1>
      <ul>
        {classes.map((c) => (
          <li key={c.classId}>
            <h2>{c.name} {c.classId}</h2>
            <p>{c.description}</p>
            <p>Trainer: {c.Trainers[0].firstName} {c.Trainers[0].lastName}</p>
            <p>Max Participants: {c.maxParticipants}</p>
            <form onSubmit={handleBookingSubmit}>
            <input
                type="hidden"
                value={c.classId}
                onChange={(e) => setClassId(e.target.value)}
                placeholder="Enter classes ID"
              />
              <input
                type="text"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                placeholder="Enter client ID"
              />
              <input
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
              />
              <button type="submit">Book Class</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Raspisanie;


// import { useState, useEffect } from "react";
// import moment from "moment";
// import "../CSS/Raspisanie.css";

// function Raspisanie() {
//   const [classes, setClasses] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchClasses() {
//       try {
//         const response = await fetch("http://localhost:3001/classes");
//         const data = await response.json();
//         console.log(data)
//         setClasses(data);
//         console.log(classes)
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchClasses();
//   }, []);

//   async function handleDeleteClass(id) {
//     try {
//       const response = await fetch(`http://localhost:3001/classes/${id}`, {
//         method: "DELETE",
//       });
//       const data = await response.json();
//       console.log(data.message);
//       setClasses(classes.filter((classItem) => classItem.classId !== id));
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container">
//       <h1 className="title">Расписание занятий</h1>
//       <ul className="class-list">
//         {classes.map((classItem) => (
//           <li key={classItem.classId} className="class-item">
//             <div className="class-info">
//               <h2>{classItem.name}</h2>
//               <p>{classItem.description}</p>
//               <p>{classItem.maxParticipants}</p>
//               <p>{moment(classItem.dateTime).format("YYYY-MM-DD HH:mm")}</p>
//               <p>Trainer: {classItem.Trainers[0].firstName} {classItem.Trainers[0].lastName}</p>
//             </div>
//             <button className="delete-btn" onClick={() => handleDeleteClass(classItem.classId)}>
//               Удалить
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Raspisanie