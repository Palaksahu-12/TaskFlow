import Layout from "../components/Layout";

const Dashboard = () => {
  const stats = [
    { title: "Total Projects", value: 12, icon: "📁" },
    { title: "Total Tasks", value: 48, icon: "📝" },
    { title: "Completed Tasks", value: 30, icon: "✅" },
    { title: "Pending Tasks", value: 18, icon: "⏳" },
  ];

  const recentProjects = [
    {
      id: 1,
      name: "TaskFlow",
      status: "In Progress",
      tasks: 12,
    },
    {
      id: 2,
      name: "Portfolio Website",
      status: "Completed",
      tasks: 8,
    },
    {
      id: 3,
      name: "E-Commerce App",
      status: "Planning",
      tasks: 20,
    },
  ];

  return (
    <Layout>
      <div className="space-y-8">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold">
            Welcome Back, John 👋
          </h1>

          <p className="mt-3 text-lg text-blue-100">
            Manage your projects and track your progress efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-5xl">{stat.icon}</div>

              <h2 className="text-gray-500 mt-4">
                {stat.title}
              </h2>

              <p className="text-3xl font-bold mt-2">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Recent Projects
          </h2>

          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="flex justify-between items-center border border-gray-200 rounded-xl p-4"
              >
                <div>
                  <h3 className="font-semibold text-lg">
                    {project.name}
                  </h3>

                  <p className="text-gray-500">
                    {project.tasks} Tasks
                  </p>
                </div>

                <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full">
                  {project.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-6">
            Recent Activity
          </h2>

          <ul className="space-y-4">
            <li className="border-l-4 border-green-500 pl-4">
              ✅ Completed task "Design Homepage"
            </li>

            <li className="border-l-4 border-blue-500 pl-4">
              📁 Created new project "TaskFlow"
            </li>

            <li className="border-l-4 border-yellow-500 pl-4">
              📝 Added task "Setup Backend API"
            </li>

            <li className="border-l-4 border-purple-500 pl-4">
              🚀 Updated project "Portfolio Website"
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;