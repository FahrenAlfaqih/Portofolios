import { useEffect, useState } from "react";
import { getExperiences } from "../services/api";

function App() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        setLoading(true);
        const json = await getExperiences();
        setExperiences(Array.isArray(json.data) ? json.data : []);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div> Error : {error}</div>;
  if (!experiences) return <div> Experience not found</div>;

return (
    <div>
      <h1>Pengalaman</h1>
      
      {experiences.length === 0 ? (
        <div>Belum ada pengalaman</div>
      ) : (
        experiences.map((exp) => (
          <div key={exp.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
            <strong>{exp.company}</strong> — {exp.role}
            <p>{exp.description}</p>
            <small>
              {new Date(exp.start_date).toLocaleDateString('id-ID')} -
              {new Date(exp.end_date).toLocaleDateString('id-ID')}
            </small>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
