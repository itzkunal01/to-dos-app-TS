import React, { useState, ChangeEvent } from "react";
import "tailwindcss/tailwind.css"; // Make sure you have the correct path to your Tailwind CSS file

interface Student {
  id: number;
  name: string;
  task: string;
  course: string;
}

const TodoTaskApp: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    {
      id: 1,
      name: "Student 1",
      task: "Complete Assignment",
      course: "React",
    },
    {
      id: 2,
      name: "Student 2",
      task: "Study for Exam",
      course: "TypeScript",
    },
    // Add more students and their courses as needed
    {
      id: 3,
      name: "Student 3",
      task: "Read Chapters",
      course: "JavaScript",
    },
    {
      id: 4,
      name: "Student 4",
      task: "Research Project",
      course: "Python",
    },
    {
      id: 5,
      name: "Student 5",
      task: "Prepare Presentation",
      course: "HTML/CSS",
    },
    {
      id: 6,
      name: "Student 6",
      task: "Code Review",
      course: "Node.js",
    },
    {
      id: 7,
      name: "Student 7",
      task: "Practice Exercises",
      course: "Angular",
    },
    {
      id: 8,
      name: "Student 8",
      task: "Write Essay",
      course: "Vue.js",
    },
    {
      id: 9,
      name: "Student 9",
      task: "Attend Workshop",
      course: "Django",
    },
    {
      id: 10,
      name: "Student 10",
      task: "Debug Code",
      course: "Java",
    },
    {
      id: 11,
      name: "Student 11",
      task: "Review Documentation",
      course: "C#",
    },
    {
      id: 12,
      name: "Student 12",
      task: "Practice Coding Challenges",
      course: "Ruby",
    },
    {
      id: 13,
      name: "Student 13",
      task: "Complete Lab Assignment",
      course: "PHP",
    },
    {
      id: 14,
      name: "Student 14",
      task: "Study Algorithms",
      course: "Swift",
    },
    {
      id: 15,
      name: "Student 15",
      task: "Build Web App",
      course: "Go",
    },
    {
      id: 16,
      name: "Student 16",
      task: "Read Documentation",
      course: "Kotlin",
    },
    {
      id: 17,
      name: "Student 17",
      task: "Explore Frameworks",
      course: "Rust",
    },
    {
      id: 18,
      name: "Student 18",
      task: "Write Code Snippets",
      course: "Scala",
    },
    {
      id: 19,
      name: "Student 19",
      task: "Learn Design Patterns",
      course: "Haskell",
    },
    {
      id: 20,
      name: "Student 20",
      task: "Code Refactoring",
      course: "Elixir",
    },
    // Add more students and their courses as needed
  ]);

  const handleAddTask = (id: number, task: string): void => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, task } : student
      )
    );
  };

  return (
    <>
      <div className="container px-8 md:px-16 max-h-[600px] mt-20 mb-8 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Student To-Do List</h2>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Task</th>
              <th className="border px-4 py-2">Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="border px-4 py-2">{student.id}</td>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={student.task}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleAddTask(student.id, e.target.value)
                    }
                  />
                </td>
                <td className="border px-4 py-2">{student.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TodoTaskApp;
