import Dashboard from "../Components/Dashboard";


function AVideo() {
    return (
        < >
           <div className="flex">
            <Dashboard /> 
            <div className="container  mx-auto pl-8 mt-8">
                <form className="grid grid-cols-1 gap-4 pt-15">
                
               
                <div className="bg-gray-100 rounded-lg p-4 shadow-md">
    <div className="grid grid-cols-1 gap-4">

    <div className="col-span-1">
            <label htmlFor="AddLesson" className="block mb-2 text-2xl font-bold">
                Add new Lesson
            </label>

        <div className="col-span-3 flex pb-4">
            <label htmlFor="AlYear" className="block mb-2 font-bold">
                A/L Year
            </label>
            <select id="vehicleType" className="w-100 p-5 h-10 mx-4 border rounded">
                <option value="">Select</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                {/* Other options */}
            </select>
        </div>

       
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3 flex pb-4">
                    <label htmlFor="name" className="block mb-2 font-bold">
                        Lesson Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-3 border h-12 mx-4 rounded"
                        required
                    />
                </div>

                <div className="col-span-2 flex pb-4">
                    <label htmlFor="name" className="block mb-2 font-bold">
                        Description:
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full  border h-12 mx-4 rounded"
                        required
                    />
                </div>

                <div className="col-span-2 flex">
                    <label htmlFor="name" className="block mb-2 font-bold">
                        Price:
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-3 border h-12 mx-4 rounded"
                        required
                    />
                </div>
            </div>

            <div className="col-span-1 flex">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded">
                    Submit
                </button>
            </div>
        </div>
    </div>
</div>


                

                    {/* Select Services */}
                    {/* Select Services with Checkboxes */}
                    <div className="col-span-2">
                        <label className="block mb-2 font-bold">Select Services</label>
                        <div className="flex flex-wrap">
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="bodyWash" className="mr-2" />
                                <label htmlFor="bodyWash">Body Wash</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="underWash" className="mr-2" />
                                <label htmlFor="underWash">Under Wash</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="lubricantService" className="mr-2" />
                                <label htmlFor="lubricantService">Lubricant Service</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="underWax" className="mr-2" />
                                <label htmlFor="underWax">Under Carriage Wax Spray</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="interiorCleaning" className="mr-2" />
                                <label htmlFor="interiorCleaning">Interior Cleaning</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="bodyWax" className="mr-2" />
                                <label htmlFor="bodyWax">Body Wax</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="cutandpolish" className="mr-2" />
                                <label htmlFor="cutandpolish">Cut & Polish</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="glasspolish" className="mr-2" />
                                <label htmlFor="glasspolish">Glass Polishing</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="engineCleanup" className="mr-2" />
                                <label htmlFor="engineCleanup">Engine Room Cleanup</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="leatherTreatment" className="mr-2" />
                                <label htmlFor="leatherTreatment">Leather Treatment</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="acidRain" className="mr-2" />
                                <label htmlFor="acidRain">Acid Rain Removing</label>
                            </div>                            
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="machineWax" className="mr-2" />
                                <label htmlFor="machineWax">Machine Wax</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="siliconSpray" className="mr-2" />
                                <label htmlFor="siliconSpray">Silicon Spray</label>
                            </div>
                            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                <input type="checkbox" id="plasticCondition" className="mr-2" />
                                <label htmlFor="plasticCondition">Plastic Condition</label>
                            </div>
                            {/* Add more checkboxes for other services */}
                        </div>
                    </div>


                    {/* Branch and Date/Time */}
                    <div className="col-span-1">
                        <label htmlFor="branch" className="block mb-2 font-bold">
                            Branch
                        </label>
                        <select id="branch" className="w-full p-2 border rounded">
                            <option value="">Select</option>
                            <option value="dehiwala">Dehiwala</option>
                            {/* Other options */}
                        </select>
                    </div>
                    <div className="col-span-1">
                        <label htmlFor="dateTime" className="block mb-2 font-bold">
                            Date/Time
                        </label>
                        <input type="datetime-local" id="dateTime" className="w-full p-2 border rounded" />
                    </div>

                    {/* Anything Else? */}
                    <div className="col-span-2">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </div>
                    
                </form>
                </div>
                </div>
            </>
        
        
        
    );
}




export default AVideo;