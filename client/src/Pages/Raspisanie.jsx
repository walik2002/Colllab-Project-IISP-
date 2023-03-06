import { useState, useEffect } from "react";
import moment from "moment";
import "../CSS/Raspisanie.css";

function Raspisanie() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClasses() {
      try {
        const response = await fetch("http://localhost:3001/classes");
        const data = await response.json();
        setClasses(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchClasses();
  }, []);

  async function handleDeleteClass(id) {
    try {
      const response = await fetch(`http://localhost:3001/classes/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data.message);
      setClasses(classes.filter((classItem) => classItem.classId !== id));
    } catch (error) {
      console.error(error);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1 className="title">Расписание занятий</h1>
      <ul className="class-list">
        {classes.map((classItem) => (
          <li key={classItem.classId} className="class-item">
            <div className="class-info">
              <h2>{classItem.name}</h2>
              <p>{classItem.description}</p>
              <p>{classItem.maxParticipants}</p>
              <p>{moment(classItem.dateTime).format("YYYY-MM-DD HH:mm")}</p>
              <p>Trainer: {classItem.Trainers[0].firstName} {classItem.Trainers[0].lastName}</p>
            </div>
            <button className="delete-btn" onClick={() => handleDeleteClass(classItem.classId)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Raspisanie