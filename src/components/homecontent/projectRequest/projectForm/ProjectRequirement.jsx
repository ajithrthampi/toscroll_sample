import React, { useContext } from 'react'
import { multiStepContext } from '../../../context/ContextStep'

const ProjectRequirement = () => {

    const { setStep, userData, setUserData } = useContext(multiStepContext)
   

    return (
        <div className='z-50'>
            <div className='flex flex-col justify-center items-center'>
            <h3 className='lg:text-[36px] md:text-[30px] sm:text-[28px] text-[15px] text-center font-interV font-medium text-white lg:mx-20 bg-red-00 md:mx-20  mt-12 leading-snug'>
                What are your project requirements?
                </h3>

                <div className='pt-8'>
                    <p className='text-sm font-interV text-[#b5abcb] sm:px-0 px-5'>Project scope & description</p>
                   <textarea 
                    value={userData['Project_Requirements']}
                      onChange={(e) => setUserData({...userData,'Project_Requirements': e.target.value})}
                   className='rounded-xl  sm:w-[380px] vsm:w-[315px] w-[290px] h-[280px] font-interV font-medium grow p-1 pl-5 mt-2 bg-[#b5abcb]  outline-none'  />
                </div>
            </div>
        </div>
    )
}

export default ProjectRequirement
