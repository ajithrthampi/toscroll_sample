import React, { useContext } from 'react'

import { multiStepContext } from '../../../context/ContextStep';

const CompanyDetails = ( { } ) => {

    const { userData, setUserData, isEmailValid, setEmailValid } = useContext(multiStepContext);


   const handleEmailChange = (e) => {
    const email = e.target.value;
    setUserData({ ...userData, Email: email });
    setEmailValid(e.target.validity.valid); 
  };


  const handleCompanyProjectChange = (e) => {
    const companyProject = e.target.value;
    setUserData({ ...userData, Company_or_Projectname: companyProject });
  };


  const handleChange = (e) => {
    const companyName = e.target.value;
    setUserData({...userData, Company_or_Projectname: companyName})
  }

  console.log(userData);
    return (
        <div className='z-50'>
            <div className='flex flex-col justify-center items-center '>
            <h3 className='lg:text-[36px] md:text-[30px] sm:text-[28px] text-[15px] text-center font-interV font-medium text-white lg:px-48 md:px-20  pt-8 leading-snug'>
                What is your company / project?
                </h3>

                <div className='pt-8'>
                    <div className='pb-3 leading-tight sm:w-[380px] vsm:w-[300px] w-[280px]'>
                        <label className='text-[#988cae] font-interV' htmlFor=""> Name of company / project  </label>
                        <input className='w-full bg-[#b5abcb] py-3.5 px-3 rounded-xl mt-2 font-interV text-black  outline-none' 

                        // value={userData['Company_or_Projectname']}
                        onChange={handleCompanyProjectChange}
                        required
                        pattern='^[a-zA-Z0-9 ]+$' 
                      
                        type="text" />
                         {!userData['Company_or_Projectname'] && (
              <p className='text-red-500'>Please enter your company/project name.</p>
            )}
                    </div>
                    
                    <div className='pb-3 leading-tight sm:w-[380px] vsm:w-[300px] w-[280px]'>
                        <label className='text-[#988cae] font-interV' htmlFor="">Your position <span className='text-xs'>(optional)</span></label>
                        <input className='w-full bg-[#b5abcb] py-3.5 px-3 rounded-xl mt-2 font-interV  text-black   outline-none' 
                        
                        //  value={userData['Your_position']}
                        onChange={(e) => setUserData({...userData,'Your_position': e.target.value})}
                        type="text" />
                    </div>

                    <div className='pb-3 leading-tight sm:w-[380px] vsm:w-[300px] w-[280px]'>
                        <label className='text-[#988cae] font-interV' htmlFor="">Website URL<span className='text-xs'>(optional)</span></label>
                        <input className='w-full bg-[#b5abcb] py-3.5 px-3 rounded-xl mt-2 font-interV  text-black  outline-none' 
                        
                        //  value={userData['Website_URL']}
                        onChange={(e) => setUserData({...userData,'Website_URL': e.target.value})}
                        type="text" />
                    </div>
                    
                    <div className='pb-3 leading-tight sm:w-[380px] vsm:w-[300px] w-[280px]'>
                        <label className='text-[#988cae] font-interV' htmlFor="">Email</label>
                        <input className='w-full bg-[#b5abcb] py-3.5 px-3 rounded-xl mt-2 font-interV  text-black  outline-none' 
                        
                        //  value={userData['Email']}
                         onChange={handleEmailChange}
                         required 
                            pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
               
                        // onChange={(e) => setUserData({...userData,'Email': e.target.value})}
                       
                        type="email" />
                         {!userData['Email'] && (
              <p className='text-red-500'>Please enter your email</p>
            )}
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default CompanyDetails
