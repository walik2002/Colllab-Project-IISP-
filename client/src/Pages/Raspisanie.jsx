import { useState, useEffect } from "react";
import moment from "moment";

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
    <div>
      <h1>Classes</h1>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem.classId}>
            <h2>{classItem.name}</h2>
            <p>{classItem.description}</p>
            <p>{classItem.maxParticipants}</p>
            <p>{moment(classItem.dateTime).format("YYYY-MM-DD HH:mm")}</p>
            <p>Trainer: {classItem.Trainers[0].firstName} {classItem.Trainers[0].lastName}</p>
            <button onClick={() => handleDeleteClass(classItem.classId)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Raspisanie;