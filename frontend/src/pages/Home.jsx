export default function Home() {
  const skills = [
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'CodeIgniter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg' },
    { name: 'Yii2', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yii/yii-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="font-bold text-3xl">Hi, I'm Fahren Al Faqih</h1>
      <p className="text-gray-400 mt-2 text-sm">Based in Pekanbaru, Indonesia</p>
      <p className="text-gray-300 mt-6">
        Experienced and passionate Software Engineer specializing in building scalable and efficient digital solutions. Primarily focused on backend development, I design and build robust server-side applications, 
    RESTful APIs, and database architectures using technologies like Laravel, Go, Node Js, and various database systems. 
    I'm passionate about creating efficient, secure, and maintainable code. While my expertise lies in backend systems, I'm versatile in software development and capable of working 
    across the full stack when needed. I enjoy tackling complex business logic, optimizing database queries, 
    and designing scalable system architectures.
      </p>

    <div className="my-12 border-t border-gray-700"></div>

      <div className="mt-12">
        <h2 className="font-semibold text-xl">Skills & Technologies</h2>
        <p className="text-gray-400 text-sm mt-2 mb-5">My Technical Skills </p>
        <div className="flex flex-wrap gap-8 items-center">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="group flex flex-col items-center gap-2 transition-transform hover:scale-110"
            >
              <img 
                src={skill.icon} 
                alt={skill.name}
                className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}