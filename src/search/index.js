import React, { useEffect, useState } from "react";
import axios from "axios";

function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [filData, setFilData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchdata();
  }, []);

  useEffect(() => {
    const results = data.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilData(results);
  }, [query, data]);

  return (
    <>
      <h1>search</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Search;
