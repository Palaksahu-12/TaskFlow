import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Projects = () => {
  const navigate = useNavigate();
  const projects =[
    {
      id: 1,
      title: "TaskFlow",
      description:"Productivity is never an accident. It is always the result of commitment, intelligent planning, and focused effort.",
      tasks:12,
      status: "In Progress",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:"Personal portfolio website showcasing projects and skills.",
      tasks: 8,
      status: "Completed",
    },
    {
      id: 3,
      title:"E-Commerce App",
      description:"Online shopping platform with cart and payment features.",
      tasks: 20,
      status: "Completed",
    },
  ];

  const[showModal, etShowModal] = useState(false);
  const[projectName, setProjectName] = useState("");
  const[projectDescription, setProjectDescription] = useState("");

  const handleCreateProject = () =>{
    if(!projectName || !projectDescription){
      alert("Please fill all fields");
      return;
    }
    const newProject ={
      id: projects.length +1,
      title: projectName,
      description: projectDescription,
      tasks: 0,
      status: "Planning",
    }
    setProjectDescription([...projects, newProject]);
    setProjectName("");
    setProjectDescription("");
    setShowModal(false);
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Projects 
          </h1>
          <p className="text-gray-500 mt-2">
            Manage and track all your projects.
          </p>
          </div>

          <button 
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            + New Project
          </button>
        </div>

        {/* Prroject Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
            key={project.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-semibold text-slate-800">
                {project.title}
                </h2>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {project.status}
                </span>
              </div>

              <p className="text-gray-600 mb-4">
                {project.description}
              </p>

              <div className="mt-6 flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Tasks</p>
                  <p className="text-xl font-bold">
                    Tasks: {project.tasks}
                  </p>
                </div>

                <button onClick={() => navigate(`/projects/${project.id}`)}
                className="w-full bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800"  
                >
                 View 
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-2xl w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6">
                Create New Project
              </h2>

              <input
              type="text"
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"/>

              <textarea
              placeholder="Project Description"
              rows="4"
              value={projectDescription}
              onChange={(e) =>
                setProjectDescription(e.target.value)
              }
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
                  onClick={handleCreateProject}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                  Create Project
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Projects;