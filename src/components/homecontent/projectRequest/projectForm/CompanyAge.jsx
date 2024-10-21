import React, { useContext, useEffect, useState } from 'react'
import { multiStepContext } from '../../../context/ContextStep';

const CompanyAge = () => { 

    const [selected, setSelected] = useState(null);

    const { setStep, userData, setUserData } = useContext(multiStepContext)



    const options = [
        'Pre-launch',
        '0-2 years',
        '2-5 years',
        '5+ years'
    ];

    useEffect(() => { 
        // Initialize the selected state with the value from userData
        const selectedOptionIndex = options.indexOf(userData['Company_Age']);
        setSelected(selectedOptionIndex);
      }, [userData]);

    function onChange(i, item) {
        setSelected((prev) => (i === prev ? null : i));
        
    // Get the selected option value based on the index.
        const selectedValue = options[i];
        // Set the value for the "Company Age" field using setValue.
        // setValue('Company Age', selectedValue);
       setUserData({ ...userData, 'Company_Age': selectedValue });

      }


    return (
        <div>
            <div className={`flex flex-col justify-center  items-center z-50`}>
            <h3 className='lg:text-[36px] md:text-[30px] sm:text-[28px] text-[15px] text-center font-interV font-medium text-white lg:px-48 md:px-20  pt-12 leading-snug'>
                   What is the age of your company?
                </h3>

                <div className='pt-10'>
                    {
                    options.map((item, index) => (
                        <div className="flex items-center   pt-5 relative" key={index}>
                            <label htmlFor={`default-checkbox${index+ 1}`} className="  md:w-[450px] sm:w-[400px] vsm:w-[320px] w-[290px] font-medium font-interV md:text-lg sm:text-base text-sm  border border-[#413558] rounded-[30px] md:pr-48 pr-28 px-7 md:py-4 py-3  text-[#afa6c6] bg-[#1e1232]">
                                {item}
                            </label>
                            <input   id={`default-checkbox${index+ 1}`} onChange={() => onChange(index, item)}   type="checkbox" checked={index === selected} value="" className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 absolute checked:bg-[#b969ff] rounded-full shadow right-5 appearance-none "/>
                        </div>
                    ))
                } </div>

            </div>
        </div>
    )
}

export default CompanyAge
