import { useProjects } from "../hooks/UseProjects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const { projects, loading, error } = useProjects();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-red-600 dark:text-red-400">
        <p className="font-semibold">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl ">
      <div className="mb-12">
        <h2 className="font-bold text-3xl mb-2">
          Projects
        </h2>
        <p className="text-gray-400 text-sm">
          Some projects that I have developed
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <svg
            className="w-16 h-16 mx-auto text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            Belum ada project yang ditambahkan
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}