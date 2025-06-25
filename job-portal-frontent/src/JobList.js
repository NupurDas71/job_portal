// JobList.js
import React, { useEffect, useState } from "react";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/jobs/list")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }
        return res.json();
      })
      .then((data) => setJobs(data))
      .catch((err) => {
        console.error("Error fetching jobs:", err);
        setError("Could not load jobs. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (!confirmDelete) return;

    fetch(`http://localhost:8080/api/jobs/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete job");
        }
        setJobs(jobs.filter((job) => job.id !== id));
        alert("🗑️ Job deleted");
      })
      .catch((err) => {
        console.error("Error deleting job:", err);
        alert("❌ Failed to delete job");
      });
  };

  return (
    <div>
      <h2>Available Jobs</h2>
      {loading && <p>Loading jobs...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && jobs.length === 0 && <p>No jobs available right now.</p>}
      <ul className="todo-list">
        {jobs.map((job) => (
          <li key={job.id} className="todo-item">
            <div>
              <strong>{job.title}</strong><br />
              {job.description}
            </div>
            <button onClick={() => handleDelete(job.id)} className="delete-button">
              🗑️ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobList;
