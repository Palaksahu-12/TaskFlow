import Layout from "../components/Layout";

const Profile = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8">
          
          <div className="flex flex-col items-center">
            <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
            />
            <h1 className="text-3xl font-bold mt-4 text-slate-800">
              John Doe
            </h1>
            <p className="text-gray-500">
              Software Developer
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-500 text-sm mb-1">
                Full Name
              </label>
              <p className="bg-slate-100 p-3 rounded-lg">
               John Doe
              </p>
            </div>

            <div>
              <label className="block text-gray-500 text-sm mb-1">
                Email
              </label>
              <p className="bg-slate-100 p-3 rounded-lg">
                johndoe@example.com
              </p>
            </div>

            <div>
              <label className="block text-gray-500 text-sm mb-1">
                Role
              </label>
              <p className="bg-slate-100 p-3 rounded-lg">
                Team Member
              </p>
            </div>

            <div>
              <label className="block text-gray-500 text-sm mb-1">
                Joined
              </label>
              <p className="bg-slate-100 p-3 rounded-lg">
                June 2026
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;