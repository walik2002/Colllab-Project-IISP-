import React, { useState } from "react";

function FormComponent() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:3001/`);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Введите запрос:
          <input type="text" value={query} onChange={handleQueryChange} />
        </label>
        <button type="submit">Отправить запрос</button>
      </form>

      {loading && <p>Загрузка...</p>}
      {error && <p>Ошибка: {error}</p>}
      {data && (
        <div>
          <h2>Данные:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default FormComponent;