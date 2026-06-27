import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Projects = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "TaskFlow",
      description:
        "A MERN stack project management application for managing tasks and teams.",
      tasks: 12,
      status: "In Progress",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing projects, skills, and achievements.",
      tasks: 8,
      status: "Completed",
    },
    {
      id: 3,
      title: "E-Commerce App",
      description:
        "Online shopping platform with cart, authentication, and payment integration.",
      tasks: 20,
      status: "Planning",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const handleCreateProject = () => {
    if (!projectName || !projectDescription) {
      alert("Please fill all fields");
      return;
    }

    const newProject = {
      id: projects.length + 1,
      title: projectName,
      description: projectDescription,
      tasks: 0,
      status: "Planning",
    };

    setProjects([...projects, newProject]);
    setProjectName("");
    setProjectDescription("");
    setShowModal(false);
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              Projects
            </h1>

            <p className="text-gray-500 mt-2">
              Manage and track all your projects in one place.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            + New Project
          </button>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold text-slate-800">
                  {project.title}
                </h2>

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {project.status}
                </span>
              </div>

              <p className="text-gray-600 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">
                    Total Tasks
                  </p>

                  <p className="text-2xl font-bold text-slate-800">
                    {project.tasks}
                  </p>
                </div>

                <button
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="bg-slate-900 text-white px-5 py-2 rounded-xl hover:bg-slate-800 transition"
                >
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Create Project Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6">
                Create New Project
              </h2>

              <input
                type="text"
                placeholder="Project Name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="4"
                placeholder="Project Description"
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
                  Create
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