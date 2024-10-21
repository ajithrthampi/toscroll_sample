    import React, { useContext } from 'react'
    import { multiStepContext } from '../../../context/ContextStep';

    const ServiceRequire = ({}) => {

        const { setStep, userData, setUserData } = useContext(multiStepContext)
       



        const handleCheckboxChange = (e, field) => {
            const value = e.target.checked ? field : "";
          
            // Create a copy of the userData object
            const updatedUserData = { ...userData };
          
            // Deselect all other checkboxes except the current one
            for (const key in updatedUserData) {
              if (key !== field) {
                updatedUserData[key] = "";
              }
            }
          
            // Update the current checkbox
            updatedUserData[field] = value;
          
            // Set the updated userData to the state
            setUserData(updatedUserData);
          };


        console.log(userData);

        return (
            <div>
                <div className={`flex flex-col justify-center items-center z-50`}>
                    <h3 className='lg:text-[36px] md:text-[30px] sm:text-[28px] text-[15px] text-center font-interV font-medium text-white lg:px-48 md:px-20  pt-12 leading-snug'>
                        Which services do you require?
                    </h3>

                    <div className='pt-10'>
                        <div className="flex items-center   relative ">
                            <label htmlFor="defaultcheckbox1" className="  md:w-[450px] sm:w-[400px] vsm:w-[320px] w-[290px] font-medium font-interV md:text-lg sm:text-base text-sm  border border-[#413558] rounded-[30px] md:pr-48 pr-28 px-7 md:py-4 py-3  text-[#afa6c6] bg-[#1e1232]">
                                Website Development
                            </label>
                            <input id="defaultcheckbox1" 
                            value={userData['Website_Development']}
                            onChange={(e) => handleCheckboxChange(e, 'Website_Development')}
                            checked={"Website_Development" === userData?.Website_Development}
                            name=" Website Development" type="checkbox"  className={`w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 absolute   checked:bg-[#b969ff]  rounded-full shadow right-5 appearance-none `}/>
                        </div>

                        <div className="flex items-center  pt-5 relative">
                            <label htmlFor="defaultcheckbox2" className="   md:w-[450px] sm:w-[400px] vsm:w-[320px] w-[290px] font-medium font-interV md:text-lg sm:text-base text-sm  border border-[#413558] rounded-[30px] md:pr-48 pr-28 px-7 md:py-4 py-3  text-[#afa6c6] bg-[#1e1232]">
                                Design,Brand & Animatioin
                            </label>
                            <input id="defaultcheckbox2" 
                            value={userData['Design_Brand_Animatioin']}
                            checked={"Design_Brand_Animatioin" === userData?.Design_Brand_Animatioin}
                            onChange={(e) => handleCheckboxChange(e, 'Design_Brand_Animatioin')}
                        
                            type="checkbox"  className={`w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 absolute ${userData?.Design_Brand_Animatioin === 'Design_Brand_Animatioin' && "checked:bg-[#6319a4]"}  rounded-full shadow right-5 appearance-none `}/>
                        </div>

                        <div className="flex items-center  pt-5 relative">
                            <label htmlFor="defaultcheckbox3" className="  md:w-[450px] sm:w-[400px] vsm:w-[320px] w-[290px] font-medium font-interV md:text-lg sm:text-base text-sm  border border-[#413558] rounded-[30px] md:pr-48 pr-28 px-7 md:py-4 py-3  text-[#afa6c6] bg-[#1e1232]">
                                Copywriting & Storytelling
                            </label>
                            
                            <input id="defaultcheckbox3" 
                            value={userData['Copywriting_Storytelling']}
                            checked={"Copywriting_Storytelling" === userData?.Copywriting_Storytelling}
                            onChange={(e) => handleCheckboxChange(e, 'Copywriting_Storytelling')}
                        
                            type="checkbox"  className={`w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 absolute  ${userData?.Copywriting_Storytelling === "Copywriting_Storytelling" && "checked:bg-[#b969ff]"}  rounded-full shadow right-5 appearance-none `}/>
                        </div>

                        <div className="flex items-center  pt-5 relative">
                            <label htmlFor="defaultcheckbox4" className="  md:w-[450px] sm:w-[400px] vsm:w-[320px] w-[290px] font-medium font-interV md:text-lg sm:text-base text-sm  border border-[#413558] rounded-[30px] md:pr-48 pr-28 px-7 md:py-4 py-3  text-[#afa6c6] bg-[#1e1232]">
                                Other
                            </label>
                            <input id="defaultcheckbox4" 
                            value={userData['other']}
                            onChange={(e) => handleCheckboxChange(e, 'other')}
                            checked={"other" === userData?.other}
                            type="checkbox" className={`w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 absolute ${userData?.other === "other" && "checked:bg-[#b969ff]"}  rounded-full shadow right-5 appearance-none `}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

    export default ServiceRequire
