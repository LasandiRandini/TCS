

const PProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Content */}
      <div className="container mx-auto p-10 bg-gray-50 rounded-lg shadow-lg mt-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-500">
              {user?.first_name[0]}
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-700">{user ? `${user.first_name} ${user.last_name}` : "User Profile"}</h1>
              <p className="text-sm text-gray-500">{user?.id} - {user?.first_name.toUpperCase()} {user?.last_name.toUpperCase()}</p>
            </div>
          </div>
          
        </div>

        {user ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="mb-2"><strong>Name:</strong> {user.first_name} {user.last_name}</p>
                <p className="mb-2"><strong>Email address:</strong> {user.email}</p>
                <p className="mb-2"><strong>Contact No:</strong> {user.contact_no}</p>
                <p className="mb-2"><strong>NIC No:</strong> {user.snic_no}</p>
              </div>
              <div>
                <p className="mb-2"><strong>District:</strong> {user.district}</p>
                <p className="mb-2"><strong>AL Year:</strong> {user.al_year}</p>
                <p className="mb-2"><strong>Institute:</strong> {user.institute}</p>
                <p className="mb-2"><strong>Parent Contact No:</strong> {user.parent_contact_no}</p>
                <p className="mb-2"><strong>Parent Email:</strong> {user.parent_email}</p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-red-500">No user data found</p>
        )}
      </div>
    </div>
  );
};

export default PProfile;
