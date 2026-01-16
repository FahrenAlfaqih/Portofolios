import { useProjects } from "../hooks/UseProjects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const { projects, loading, error } = useProjects();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Eror...</div>;

  return (
    <div>
      <h2 className="text-2xl mb-6 font-bold text-white bg-clip-text text-transparent">
        Project
      </h2>

      <p className="text-sm text-gray-500 mb-14 ">Beberapa project yang pernah dikembangkan sebelumnya</p>

      {projects.length === 0 ? (
        <p>Belum ada project</p>
      ) : (
        projects.map((proj) => <ProjectCard key={proj.id} project={proj} />)
      )}
    </div>
  );
}
