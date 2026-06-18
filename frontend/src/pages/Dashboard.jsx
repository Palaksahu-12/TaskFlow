import Layout from "../components/Layout";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Projects",
      value: 12,
    },
    {
      title: "Total Tasks",
      value: 48,
    },
    {
      title:"Comleted Tasks",
      value: 30,
    },
    {
      title:"Pending Tasks",
      value: 18,
    },
  ];

  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold text-slate-800 mb-6">
          Dashboard Page
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) =>(
          <div
          key={stat.title}
          className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-gray-500 text-sm">
              {stat.title}
            </h2>
            <p className="text-3xl font-bold text-slate-800 mt-2">
              {stat.value}
            </p>
          </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-3">
            <li>✅ Task "Design Homepage" completed</li>
            <li>📁 New Project "TaskFlow" created</li>
            <li>📝 Task "Setup Backend" assigned</li>
            <li>🚀 Project "Portfolio Website" updated</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;