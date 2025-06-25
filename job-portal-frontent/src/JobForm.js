// JobForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function JobForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("http://localhost:8080/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("✅ Job added successfully!");
        navigate("");
      })
      .catch((err) => {
        console.error("Error adding job:", err);
        alert("❌ Failed to add job.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h2>Add Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="todo-input"
          placeholder="Job Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <br />
        <button className="button add-button" type="submit" disabled={loading}>
          {loading ? "Posting..." : "Post Job"}
        </button>
      </form>
    </div>
  );
}

export default JobForm;
