export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 shadow-2xl flex flex-col overflow-y-auto">
      {/* Profile Section */}
      <div className="p-6 border-b border-gray-700">
        <div className="w-24 h-24 mb-4 rounded-full overflow-hidden ring-4 ring-blue-500 ring-offset-4 ring-offset-gray-800">
          <img 
            src="https://ui-avatars.com/api/?name=Your+Name&background=3b82f6&color=fff&size=200" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold text-white bg-clip-text text-transparent">
          Fahren Alfaqih
        </h2>
        <p className="text-sm text-gray-400 mt-1">@fahrenalfaqih</p>
      </div>
      
      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-6">
        {/* home */}
        <a 
          href="/" 
          className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition mb-2 group text-white"
        >
          <svg className="w-5 h-5 text-white-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="group-hover:text-white-400 transition">Home</span>
        </a>


        {/* About */}
        <a 
          href="/about" 
          className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-700 transition mb-2 group text-white"
        >
          <div className="flex items-center space-x-3">
            <svg className="w-5 h-5 text-white-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <span className="group-hover:text-white-400 transition">About</span>
          </div>
        </a>

        {/* Experience */}
        <a 
          href="/experience" 
          className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition mb-2 group text-white"
        >
          <svg className="w-5 h-5 text-white-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="group-hover:text-white-400 transition">Experiences</span>
        </a>

        {/* Project */}
        <a 
          href="/project" 
          className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition mb-2 group text-white"
        >
          <svg className="w-5 h-5 text-white-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="group-hover:text-white-400 transition">Projects</span>
        </a>

        
        {/* contact */}
        <a 
          href="/contact" 
          className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-700 transition mb-2 group text-white"
        >
          <svg className="w-5 h-5 text-white-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="group-hover:text-white-400 transition">Contact</span>
        </a>

      </nav>

    </aside>
  );
}