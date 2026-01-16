import { useExperiences } from "../hooks/useExperiences";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceList() {
  const { experiences, loading, error } = useExperiences();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Erorr : {error}</div>;

  return (
    <div>
      <h2 className="text-2xl mb-6 font-bold text-white bg-clip-text text-transparent">
        Experience
      </h2>

      <p className="text-sm text-gray-500 mb-14 ">beberapa pengalaman</p>

      {experiences.length === 0 ? (
        <p>Belum ada pengalaman</p>
      ) : (
        experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))
      )}
    </div>
  );
}
