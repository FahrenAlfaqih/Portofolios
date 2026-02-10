import { formatDate } from "../utils/dateFormatter";

export default function ExperienceCard({ experience }) {
  const getLogoUrl = (companyName) => {
    const logos = {
      "PT. Bumi Siak Pusako": "/assets/logo/bsp-logo.png",
      "IHC Rumah Sakit Bakti Timah Medika Pangkalpinang":
        "/assets/logo/rsbtm-logo.png",
    };
    return logos[companyName] || null;
  };

  const logoUrl = getLogoUrl(experience.company);

  return (
    <div className="group relative mb-6 p-6  rounded-xl border border-gray-200 dark:border-gray-700 hover:border-white dark:hover:border-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="absolute -left-3 top-8 w-6 h-6 bg-white rounded-full border-4 border-white dark:border-gray-900 shadow-md"></div>
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          {logoUrl ? (
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-white dark:bg-white p-2 shadow-sm">
              <img
                src={logoUrl}
                alt={`${experience.company} logo`}
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-md">
              {experience.company.charAt(0)}
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="mb-2">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1  ">
              {experience.company}
            </h3>
            <p className="text-md font-semibold text-white ">
              {experience.role}
            </p>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {formatDate(experience.start_date)} - {formatDate(experience.end_date)}
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
            {experience.description}
          </p>
        </div>
      </div>
    </div>
  );
}