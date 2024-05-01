import { useState, useEffect } from 'react';
import axios from 'axios';

const PProfile = () => {
  const [userProfile, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching profile data...");
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/auth/profile'); 
      console.log("Profile data response:", response.data); 
      setProfileData(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching profile data:", error); 
      setError('Error fetching profile data');
    }
  };

  console.log("UserProfile:", userProfile); 
  console.log("Error:", error); 

  return (
    <>
   
   <div className="my-24 md:px-20 mx-20 px-4 max-w-screen-2xl item-center mx-auto"></div>
    <div className="container mx-auto">
      <h1 className="text-2xl mb-4 text-center">User Profile</h1>
      {error && <p className="text-red-500">{error}</p>}
      {userProfile && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p><strong>First Name:</strong> {userProfile.first_name}</p>
            <p><strong>Last Name:</strong> {userProfile.last_name}</p>
            <p><strong>NIC No:</strong> {userProfile.nic_no}</p>
            <p><strong>District:</strong> {userProfile.district}</p>
            <p><strong>Email:</strong> {userProfile.email}</p>
            <p><strong>Contact No:</strong> {userProfile.contact_no}</p>
          </div>
          <div>
            <p><strong>AL Year:</strong> {userProfile.al_year}</p>
            <p><strong>Institute:</strong> {userProfile.institute}</p>
            <p><strong>Parent Contact No:</strong> {userProfile.parent_contact_no}</p>
            <p><strong>Parent Email:</strong> {userProfile.parent_email}</p>
            
          </div>
        </div>
       
      )}
       
    </div>
    
    </>
  );
};

export default PProfile;
