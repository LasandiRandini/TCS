import PRACTICAL from '../assets/Practical.png';

const PProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  return (
    <div className="min-h-screen bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${PRACTICAL})` }}>
      <div className=" ml-5 mr-5 container mx-auto p-10 bg-gray-50 bg-gray-300 bg-opacity-75 rounded-lg shadow-lg mt-12">
        <div className="flex items-center  justify-between mb-6">
          <div className="flex items-center   space-x-4">
            <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold text-gray-500">
              {user?.first_name[0]}
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-black">{user ? `${user.first_name} ${user.last_name}` : "User Profile"}</h1>
              <p className="text-sm text-gray-800">{user?.id} - {user?.first_name.toUpperCase()} {user?.last_name.toUpperCase()}</p>
            </div>
          </div>
        </div>

        {user ? (
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
       
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <div>
                <p className="mb-3 "><strong>Name:</strong> {user.first_name} {user.last_name}</p>
                <p className="mb-3"><strong>Email address:</strong> {user.email}</p>
                <p className="mb-3"><strong>Contact No:</strong> {user.contact_no}</p>
                <p className="mb-3"><strong>NIC No:</strong> {user.snic_no}</p>
              </div>
              <div>
                <p className="mb-3"><strong>District:</strong> {user.district}</p>
                <p className="mb-3"><strong>AL Year:</strong> {user.al_year}</p>
                <p className="mb-3"><strong>Institute:</strong> {user.institute}</p>
                <p className="mb-3"><strong>Parent Contact No:</strong> {user.parent_contact_no}</p>
                <p className="mb-3"><strong>Parent Email:</strong> {user.parent_email}</p>
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

