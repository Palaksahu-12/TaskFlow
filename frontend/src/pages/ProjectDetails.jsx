import Layout from "../components/Layout"

const ProjectDetails = () => {
  const todoTasks =[
    {
      id: 1, 
      title: "Design Lofin Page"
    },
    {
      id:2,
      title: "Setup MangoDB"
    }
  ];
  const inProgressTasks = [
    {
      id: 3,
    title: "Build Dashboard UI"
    }
  ];
  const completedTasks = [
    {
      id:4,
      title: "Create Project Structure"
    }
  ];

  return (
    <Layout>
      <div>
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h1 className="text-3xl font-bold text-slate-800">
            TaskFlow Project
          </h1>
          <p className="text-gray-600 mt-3">
            A MERN Stack project management application for teams to manage
            projects and tasks efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-slate-100 p-4 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">
              To Do  
            </h2>
            {todoTasks.map((task) =>(
              <div
               key={task.id}
               classNmae="bg-white p-4 rounded-lg shadow mb-3">
                {task.title}
              </div>
            ))}
          </div>

          <div className="bg-slate-100 p-4 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">
              In Progress
            </h2>
            {inPrograssTasks.map((task) => (
              <div 
                key={task.id}
                className="bg-white p-4 rounded-lg shadow mb-3"
              >
                {task.title}
              </div>
            ))}
          </div>

          <div className="bg-slate-100 p-4 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">
              Done
            </h2>
            {completedTasks.map((task) =>(
              <div
              key={task.id}
              className="bg-white p-4 rounded-lg shadow mb-3"
              >
                {task.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default ProjectDetails;