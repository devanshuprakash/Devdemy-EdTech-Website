import React from 'react'


function Educator() {
  return (
    <div className="min-h-screen flex bg-blue-50">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-700 text-white flex flex-col p-5">
        <h2 className="text-2xl font-bold mb-8">Devdeemy</h2>
        <nav className="flex flex-col gap-4">
          <button className="hover:bg-blue-600 py-2 px-3 rounded text-left">Dashboard</button>
          <button className="hover:bg-blue-600 py-2 px-3 rounded text-left">My Courses</button>
          <button className="hover:bg-blue-600 py-2 px-3 rounded text-left">Earnings</button>
          <button className="hover:bg-blue-600 py-2 px-3 rounded text-left">Settings</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-blue-900">Educator Dashboard</h1>
          <p className="text-sm text-blue-600">Welcome back, Instructor!</p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white shadow p-4 rounded border-l-4 border-blue-600">
            <h2 className="text-blue-600 font-semibold text-sm">Courses</h2>
            <p className="text-2xl font-bold text-blue-900">4</p>
          </div>
          <div className="bg-white shadow p-4 rounded border-l-4 border-blue-600">
            <h2 className="text-blue-600 font-semibold text-sm">Students</h2>
            <p className="text-2xl font-bold text-blue-900">128</p>
          </div>
          <div className="bg-white shadow p-4 rounded border-l-4 border-blue-600">
            <h2 className="text-blue-600 font-semibold text-sm">Earnings</h2>
            <p className="text-2xl font-bold text-blue-900">$1,240</p>
          </div>
        </div>

        {/* Dummy Course List */}
        <section>
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Your Courses</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[1, 2].map((course) => (
              <div key={course} className="bg-white rounded shadow p-4">
                <h3 className="text-lg font-bold text-blue-900">Course Title {course}</h3>
                <p className="text-sm text-blue-600">15 lectures • 3h 20m</p>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-sm text-blue-500">Enrolled: 42</p>
                  <button className="text-sm text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">
                    Manage
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Educator;
