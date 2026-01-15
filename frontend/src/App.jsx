import { useEffect, useState } from "react";
import { getExperiences } from "../services/api";

function App() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const json = await getExperiences();
        setExperiences(Array.isArray(json.data) ? json.data : []);
      } catch (err) {
        console.error(err);
        setExperiences([]);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <div>
      <h1>Experiences</h1>

      {experiences.map((exp) => (
        <div key={exp.id}>
          <strong>{exp.company}</strong> — {exp.role}
        </div>
      ))}
    </div>
  );
}

export default App;
