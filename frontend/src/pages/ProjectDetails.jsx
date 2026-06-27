import Layout from "../components/Layout";
import {useState} from "react";

const ProjectDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");

  const [tasks, setTasks] =useState([
    {
      id: 1, 
      title: "Design Lofin Page",
      status: "todo",
    },
    {
      id:2,
      title: "Setup MangoDB",
      status: "todo",
    },
    {
      id: 3,
      title: "Build Dashboard UI",
      status: "inprogress",
    },
    {
      id:4,
      title: "Create Project Structure",
      status: "done",
    }
  ])

  const handleAddTask =() =>{
    if(!taskTitle.trim()){
      alert("Please enter task title");
      return;
    }
    const newTask ={
      id: tasks.length +1,
      title: taskTitle,
      status: "todo",
    }
    setTasks([...tasks, newTask]);
    setTaskTitle("");
    setShowModal(false);
  }
  return (
    <Layout>
      <div className="space-y-8">
        {/* Project Info */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">
                TaskFlow Project
              </h1>

              <p className="text-blue-600 mt-3">
                Manage tasks efficiently with a Kanban board.
              </p>
            </div>

            <button
            onClick={()=> setShowModal(true)}
            className="text-blue-600 bg-white px-5 py-3 rounded-xl font-semibold hover:bg-gray-100">
              + Add Task
            </button>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Todo */}
          <div className="bg-slate-100 p-5 rounded-2xl">
            <h2 className="text-xl font-bold mb-5">
              📝 To Do  
            </h2>
            <div className="space-y-4">
            {tasks.filter((task) => task.ststus == "todo")
            .map((task) =>(
              <div
               key={task.id}
               classNmae="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
               <h3 className="font-semibold">
                {task.title}
               </h3>
              </div>
            ))}
            </div>
          </div>

          {/* In Progress */}
          <div className="bg-yellow-50 p-5 rounded-2xl">
            <h2 className="text-2xl font-bold mb-5">
              🚀 In Progress
            </h2>

            <div className="space-y-4">
            {tasks.filter((task) => task.status === "inprogress")
            .map((task) => (
              <div 
                key={task.id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-mb transition"
              >
                <h3 className="font-semibold">
                {task.title}
                </h3>
              </div>
            ))}
            </div>
          </div>

          {/* Done */}
          <div className="bg-green-50 p-5 rounded-2xl">
            <h2 className="text-2xl font-bold mb-5">
              ✅ Done
            </h2>

            <div className="space-y-4">
            {tasks.filter((task) => task.status === "done")
            .map((task) =>(
              <div
              key={task.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-mb transition"
              >
                <h3 className="font-semibold">
                {task.title}
                </h3>
              </div>
            ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center judtify-center">
            <div className="bg-white p-6 rounded-2xl w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6">
                Add New Task
              </h2>

              <input
              type="text"
              placeholder="Task Title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="flex justify-end gap-3">
                <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>

                <button
                onClick={handleAddTask}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
};

export default ProjectDetails;