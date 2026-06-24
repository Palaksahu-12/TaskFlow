import Layout from "../components/Layout";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Projects",
      value: 12,
      icon: "📁",
    },
    {
      title: "Total Tasks",
      value: 48,
      icon: "📝",
    },
    {
      title:"Comleted Tasks",
      value: 30,
      icon: "✅",
    },
    {
      title:"Pending Tasks",
      value: 18,
      icon: "⏳",

    },
  ];

  const recentProjects = [
    {
      id: 1,
      name:"TasFlow",
      status: "In Progress",
      tasks: 12,
    },
    {
      id:2,
      name:"Portfolio Website",
      status:"Completed",
      tasks:8,
    },
    {
      id:3,
      name:"E-Commerce App",
      status: "Planing",
      tasks:20,
    }
  ]

  return (
    <Layout>
      <div className="spacce-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">
          Welcome Back, John 👋
        </h1>
        <p className="mt-3 text-lg text-blue-100">
          Manage your projects and track your progress efficiently.
        </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) =>(
          <div
          key={stat.title}
          className="bg-white p-6 rounded-2lg shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="text-5xl">{stat.icon}</div>
            <h2 className="text-gray-500 text-sm">
              {stat.title}
            </h2>
            <p className="text-3xl font-bold text-slate-800 mt-2">
              {stat.value}
            </p>
          </div>
          ))}
        </div>

        {/* Recent Projects */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Recent Projects
          </h2>

          <div className-y-4>
            {recentProjects.map((project) => (
              <div
               key={project.id}
               className="flex justify-between items-center border border-gray-200 rounded-xl p-4 hover:bg-slate-50 transition"
              >
                <div>
                  <h3 className="font-semibold text-lg">
                    {project.name}
                  </h3>
                  <p className="text-gray-500">
                    {project.tasks} Tasks
                  </p>
                </div>

                <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Recent Activity
          </h2>

          <ul className="space-y-4">
            <li className="border-1-4 border-green-500 pl-4">
              ✅ ompleted task "Design Homepage"
            </li>
            <li className="border-1-4 border-green-500 pl-4">
              📁 Created new project "TaskFlow"
            </li>
            <li className="border-1-4 border-green-500 pl-4">
              📝 Added task "Setup Backend API"
            </li>
            <li className="border-1-4 border-green-500 pl-4"> 
              🚀 Updated project "Portfolio Website"
            </li>
          </ul>
        </div>

        {/* Quote Section */}
        <div className="bg-indigo-100 rounded-2xl p-6 shadow-md">
          <p className="text-xl italic text-indigo-800">
            "Productivity is never an accident. It is always the result of commitment, intelligent planning, and focused effort."
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;