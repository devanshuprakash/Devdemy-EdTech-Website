import React from 'react';

const enrolledCourses = [
  {
    id: 'course1',
    title: 'React for Beginners',
    instructor: 'John Doe',
    enrolledDate: '2025-04-15',
    progress: 45,
  },
  {
    id: 'course2',
    title: 'Advanced JavaScript',
    instructor: 'Jane Smith',
    enrolledDate: '2025-04-18',
    progress: 72,
  },
];

function StudentDashboard() {
  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">My Dashboard</h1>

        <div className="bg-white p-6 rounded-lg shadow-md border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Enrolled Courses</h2>
          
          <div className="space-y-4">
            {enrolledCourses.map(course => (
              <div key={course.id} className="border border-blue-200 rounded-md p-4 hover:shadow-sm transition">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800">{course.title}</h3>
                    <p className="text-sm text-blue-500">Instructor: {course.instructor}</p>
                    <p className="text-xs text-blue-400">Enrolled on: {new Date(course.enrolledDate).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-blue-600 font-medium">Progress</p>
                    <p className="text-lg font-bold text-blue-700">{course.progress}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {enrolledCourses.length === 0 && (
            <p className="text-blue-400 text-sm mt-4">You haven't enrolled in any courses yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
