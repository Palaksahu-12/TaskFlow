import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const projects =[
    {
      id: 1,
      title: "TaskFlow",
      description:"Project Management Tool",
      tasks:12,
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:"Personal portfolio project",
      tasks: 8,
    },
    {
      id: 3,
      title:"E-Commerce App",
      description:"Online shopping platform",
      tasks: 20,
    },
  ];
  return (
    <Layout>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-slate-800">
            Projects 
          </h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            + New Project
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
            key={project.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Tasks: {project.tasks}
              </p>
              <button onClick={() => navigate(`/projects/${project.id}`)}
               className="w-full bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800"  
              >
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;