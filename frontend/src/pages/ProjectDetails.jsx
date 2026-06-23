import Layout from "../components/Layout";
import {useState} from "react";

const ProjectDetails = () => {
  const [showModal, setShowModal] = useState(false);

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

  const[taskTitle, setTaskTitle] = useState("");
  const handleAddTask =() =>{
    if(!taskTitle){
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
      <div>
        {/* Project Info */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <div className="">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                TaskFlow Project
              </h1>
              <p className="text-gray-600 mt-3">
                A MERN Stack project management application for teams to manage projects and tasks efficiently.
              </p>
            </div>
            <button
            onClick={()=> setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              + Add Task
            </button>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Todo */}
          <div className="bg-slate-100 p-4 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">
              To Do  
            </h2>
            {tasks.filter((task) => task.ststus == "todo")
            .map((task) =>(
              <div
               key={task.id}
               classNmae="bg-white p-4 rounded-lg shadow mb-3">
                {task.title}
              </div>
            ))}
          </div>

          {/* In Progress */}
          <div className="bg-slate-100 p-4 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">
              In Progress
            </h2>
            {tasks.filter((task) => task.status === "inprogress")
            .map((task) => (
              <div 
                key={task.id}
                className="bg-white p-4 rounded-lg shadow mb-3"
              >
                {task.title}
              </div>
            ))}
          </div>

          {/* Done */}
          <div className="bg-slate-100 p-4 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">
              Done
            </h2>
            {tasks.filter((task) => task.status === "done")
            .map((task) =>(
              <div
              key={task.id}
              className="bg-white p-4 rounded-lg shadow mb-3"
              >
                {task.title}
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center judtify-center">
            <div className="bg-white p-6 rounded-xl w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4">
                Add New Task
              </h2>
              <input
              type="text"
              placeholder="Task Title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4"
              />

              <div className="flex justify-end gap-3">
                <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
                >
                  Cancel
                </button>

                <button
                onClick={handleAddTask}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
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