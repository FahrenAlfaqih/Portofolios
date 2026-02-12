export default function About() {
  return (
    <div className="max-w-4xl ">
      <div className="mb-12">
        <h1 className="font-bold text-3xl mb-2">About Me</h1>
        <p className="text-gray-400 text-sm">Get to know me better</p>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="font-semibold text-xl text-gray-200 mb-4">Educational Background</h2>
          <p className="text-gray-300 leading-relaxed">
            I graduated from <span className="text-gray-100 font-medium">Politeknik Caltex Riau</span> with 
            a degree in <span className="text-gray-100 font-medium">Teknik Informatika</span>. This is where 
            my journey into the world of software development truly began.
          </p>
        </div>

        <div className="border-t border-gray-700"></div>

        <div>
          <h2 className="font-semibold text-xl text-gray-200 mb-4">How I Got Into Coding</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            My coding journey started with something simple yet exciting building a basic calculator 
            application using Java. That moment of seeing my code come to life sparked something in me. 
            I was hooked.
          </p>
          <p className="text-gray-300 leading-relaxed">
            From there, I challenged myself to build something more complex: a cashier application, 
            also in Java. That project taught me so much about logic, data handling, and problem-solving. 
            It was the turning point that made me realize I wanted to pursue software development seriously.
          </p>
        </div>



        <div className="border-t border-gray-700"></div>

        <div>
          <h2 className="font-semibold text-xl text-gray-200 mb-4">How I Solve Problems</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            My approach has evolved over time. Early in my journey, I relied heavily on 
            StackOverflow and reading official documentation to understand how things worked 
            and debug issues. It taught me to dig deep and really understand the fundamentals.
          </p>
          <p className="text-gray-300 leading-relaxed">
            These days, I've added AI tools to my toolkit. They help me work faster and explore 
            solutions I might not have considered. But the foundation remains the same: understand 
            the problem, research thoroughly, and write clean, maintainable code.
          </p>
        </div>

      </div>
    </div>
  );
}