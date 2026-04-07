function Home() {
  return (
    <>
      {/* Hero */}
      <section id="hero" className="bg-gradient-to-br from-gray-950 via-indigo-950 to-gray-950 py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight text-white leading-tight">
            Farzan Software Solutions Inc.
          </h1>
          <p className="mt-6 text-xl text-gray-400">
            Building focused tools for intentional living.
          </p>
          <a
            href="/#apps"
            className="mt-10 inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-indigo-500 transition-colors"
          >
            See Our Apps
          </a>
        </div>
      </section>

      {/* About / Mission */}
      <section id="about" className="py-20 px-6 bg-gray-950">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            At Farzan Software Solutions, we build iOS apps that help people stay accountable to their
            goals, track their progress, and live with greater intention. We believe great software
            should be simple, purposeful, and deeply personal.
          </p>
        </div>
      </section>

      {/* Apps / Products */}
      <section id="apps" className="py-20 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Apps</h2>
          <div className="bg-gray-800 rounded-2xl border border-gray-700 p-8 flex flex-col sm:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-20 h-20 bg-indigo-900 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">🎯</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Pursuit</h3>
              <p className="text-indigo-400 font-medium text-sm mt-1">iOS App</p>
              <p className="mt-3 text-gray-400 leading-relaxed">
                Pursuit is your daily accountability partner. Log your steps, answer your own custom
                check-in questions each day, and stay consistent with the habits that matter most.
                Built for people who want to take full ownership of their progress.
              </p>
              <span className="mt-5 inline-block text-sm font-semibold text-indigo-500">
                Coming soon on the App Store
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gray-950 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
          <p className="mt-4 text-gray-400">
            Questions, feedback, or just want to say hello? Reach out directly.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="mailto:farzanalifaisal@gmail.com"
              className="inline-flex items-center gap-3 bg-gray-800 border border-gray-700 text-gray-200 font-medium px-6 py-3 rounded-xl hover:border-indigo-500 hover:text-indigo-400 transition-colors w-full max-w-sm justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
              </svg>
              farzanalifaisal@gmail.com
            </a>
            <div className="inline-flex items-center gap-3 bg-gray-800 border border-gray-700 text-gray-400 px-6 py-3 rounded-xl w-full max-w-sm justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Toronto, Canada
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
