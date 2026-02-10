import { getTechStackIcon, parseTechStack } from "../utils/techStackIcons";

export default function ProjectCard({ project }) {
  const techStack = parseTechStack(project.tech_stack);

  return (
    <div className="group relative mb-6 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-white dark:hover:border-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute -left-3 top-8 w-6 h-6 bg-white rounded-full border-4 border-white dark:border-gray-900 shadow-md"></div>
      
      <div className="flex gap-6 flex-col md:flex-row">
        <div className="flex-shrink-0">
          {project.image_url ? (
            <div className="w-full md:w-64 h-48 rounded-xl overflow-hidden shadow-sm">
              <img
                src={project.image_url}
                alt={`${project.name} screenshot`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ) : (
            <div className="w-full md:w-64 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-sm">
              <svg
                className="w-20 h-20 text-white/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {project.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => {
                const icon = getTechStackIcon(tech);
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-lg"
                    title={tech}
                  >
                    {icon && (
                      <img
                        src={icon}
                        alt={tech}
                        className="w-4 h-4"
                      />
                    )}
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 flex-wrap">
            {project.repo_url && (
              <a
                href={project.repo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Repository
              </a>
            )}
            
            {project.live_url && (
               <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}