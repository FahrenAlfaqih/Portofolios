import { useExperiences } from "../hooks/useExperiences";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceList() {
  const { experiences, loading, error } = useExperiences();

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
    <div className="max-w-4xl ">
      <div className="mb-12">
        <h2 className="font-bold text-3xl mb-2">
          Work Experience
        </h2>
        <p className="text-gray-400 text-sm">
          My journey in software development
        </p>
      </div>

      {experiences.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
          <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            Belum ada pengalaman yang ditambahkan
          </p>
        </div>
      ) : (
        <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      )}
    </div>
  );
}