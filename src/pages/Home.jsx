function Home() {
  return (
    <>
      {/* Hero */}
      <section id="hero" className="bg-gradient-to-br from-indigo-50 to-white py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Farzan Software Solutions Inc.
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Building focused tools for intentional living.
          </p>
          <a
            href="/#apps"
            className="mt-10 inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors"
          >
            See Our Apps
          </a>
        </div>
      </section>

      {/* About / Mission */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            At Farzan Software Solutions, we build iOS apps that help people stay accountable to their
            goals, track their progress, and live with greater intention. We believe great software
            should be simple, purposeful, and deeply personal.
          </p>
        </div>
      </section>

      {/* Apps / Products */}
      <section id="apps" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Apps</h2>
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col sm:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-20 h-20 bg-indigo-100 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">🎯</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Pursuit</h3>
              <p className="text-indigo-600 font-medium text-sm mt-1">iOS App</p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Pursuit is your daily accountability partner. Log your steps, answer your own custom
                check-in questions each day, and stay consistent with the habits that matter most.
                Built for people who want to take full ownership of their progress.
              </p>
              <span className="mt-5 inline-block text-sm font-semibold text-indigo-400">
                Coming soon on the App Store
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-4 text-gray-600">
            Questions, feedback, or just want to say hello? Reach out directly.
          </p>
          <a
            href="mailto:farzanalifaisal@gmail.com"
            className="mt-8 inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors"
          >
            farzanalifaisal@gmail.com
          </a>
        </div>
      </section>
    </>
  )
}

export default Home
