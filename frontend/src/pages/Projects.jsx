import Layout from "../components/Layout";

const Projects = () => {
  const Projects =[
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

        </div>
      </div>
    </Layout>
  );
};

export default Projects;