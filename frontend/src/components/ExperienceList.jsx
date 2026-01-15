import { useExperiences } from "../hooks/useExperiences";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceList() {
    const { experiences, loading, error } = useExperiences();

    if (loading) return <div>Loading...</div>;
    if(error) return <div>Erorr : {error}</div>;

    return (
        <div> 
            <h1>Pengalaman</h1>
            {experiences.length === 0 ? (<p>Belum ada pengalaman</p>) : (
                experiences.map((exp) => (
                    <ExperienceCard key={exp.id} experience={exp} />
                ))
            )}
        </div>
    )
}