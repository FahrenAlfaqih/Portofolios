import { useProjects } from "../hooks/UseProjects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const { projects, loading, error } = useProjects();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Eror...</div>;

  return (
    <div>
      {projects.length === 0 ? (
        <p>Belum ada project</p>
      ) : (
        projects.map((proj) => <ProjectCard key={proj.id} project={proj} />)
      )}
    </div>
  );
}
