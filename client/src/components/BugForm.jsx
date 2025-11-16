import React, { useState } from "react";
import axios from "axios";

export default function BugForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/bugs", {
        title,
        description,
      });
      setTitle("");
      setDescription("");
      alert("Bug submitted!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Submit
      </button>
    </form>
  );
}
