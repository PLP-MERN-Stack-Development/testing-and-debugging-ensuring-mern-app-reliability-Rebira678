import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BugList() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const fetchBugs = async () => {
      const res = await axios.get("http://localhost:5000/api/bugs");
      setBugs(res.data);
    };
    fetchBugs();
  }, []);

  return (
    <ul>
      {bugs.map((b) => (
        <li key={b._id}>
          {b.title} - {b.status}
        </li>
      ))}
    </ul>
  );
}
