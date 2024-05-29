import PropTypes from 'prop-types';
import { HiHome } from "react-icons/hi";

const Adminheader = ({ pageName }) => {
    
  const admin = JSON.parse(localStorage.getItem("admin"))
  console.log(admin);

        return (
                     <div className="bg-blue-100 h-16 flex justify-between ">
                            <p className="text-text-primary font-inter font-bold text-2xl p-3 mb-12">{pageName}</p>
                        
      
                            <div className='flex items-center gap-2 p-3'>
                            <HiHome className='w-8 h-8 bg-text-primary rounded-2xl text-black  '/>
                            <h1 className=" text-2xl font-semibold text-gray-600">
            {admin ? ` ${admin.admin_first_name} ${admin.admin_last_name}` : " User Profile"}
          </h1>
                                
                            </div>
                     </div>
        );
};

Adminheader.propTypes = {
    pageName: PropTypes.string.isRequired,
};

export default Adminheader;