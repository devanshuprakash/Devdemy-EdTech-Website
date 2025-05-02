import React from 'react';

function StudentsEnrolled() {
  const enrolledStudents = [
    { userId: 'user1', name: 'Alice Johnson', enrolledAt: '2025-04-15T10:00:00Z' },
    { userId: 'user2', name: 'Bob Smith', enrolledAt: '2025-04-18T14:30:00Z' },
    { userId: 'user3', name: 'Charlie Brown', enrolledAt: '2025-04-20T09:15:00Z' },
  ];

  return (
    <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold text-blue-700 mb-4">Enrolled Students</h2>
      <ul className="space-y-3">
        {enrolledStudents.map((student, index) => (
          <li
            key={index}
            className="bg-white border border-blue-100 rounded-md px-4 py-2 flex justify-between items-center hover:shadow transition"
          >
            <div>
              <p className="font-semibold text-blue-800">{student.name}</p>
              <p className="text-xs text-blue-500">ID: {student.userId}</p>
            </div>
            <div className="text-xs text-blue-400">
              {new Date(student.enrolledAt).toLocaleDateString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentsEnrolled;
