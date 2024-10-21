import React, { useContext, useEffect, useState } from 'react'
import { multiStepContext } from '../../../context/ContextStep';


const TimeFrame = ({ register }) => {

    const [sliderValue, setSliderValue] = useState(0);

    const { setStep, userData, setUserData } = useContext(multiStepContext)


    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
      
        setUserData({ ...userData, "Time_Frame": event.target.value})
    };

    const handleCheckboxChange = (e, field) => {
        // If the checkbox is already checked, remove the data for that field
        const value = e.target.checked ? field : "";
        
        setUserData({ ...userData, [field]: value });
      };


    useEffect(() => {
        // Initialize the sliderValue state with the value from userData
        setSliderValue(userData['Time_Frame'] || 0);
      }, [userData]);

    const monthDivPosition = (sliderValue / 18) * 280;


    return (
        <div>
            <div className={`flex flex-col justify-center items-center z-50 `}>
            <h3 className='lg:text-[36px] md:text-[30px] sm:text-[28px] text-[20px] text-center font-interV font-medium text-white lg:px-48 md:px-20  pt-12 leading-snug'>
                    What is your desired time-frame?
                </h3>
            <div className='pt-16'>
             
                <div className='sm:w-[400px] vsm:w-[310px] '>
                    <div className='relative'>
                        <input 
                  type="range"
                  min={0}
                  max={18}
                  value={sliderValue}
                  className="range bg-[#d3d5d9] range-sm"
                  step={0.5}
                  onChange={handleSliderChange}
                
                />
             
             <div
                style={{
                    position: 'absolute',
                    left: `${monthDivPosition}px`, 
                }}
                className='hidden sm:block'
                > 
                <div className='bg-[#b5abcb] w-[110px] font-interV text-sm text-center rounded-md px-1 py-0.5 textsm mb-2 absolute -top-16     '>
                    {sliderValue} month(s)
              </div>
            </div>

            <div
                style={{
                    position: 'absolute',
                  
                }}
                className='sm:hidden'
                > 
                <div className='bg-[#b5abcb] w-[110px] font-interV text-sm text-center rounded-md px-1 py-0.5 textsm mb-2 absolute -top-16     '>
                    {sliderValue} month(s)
              </div>
            </div>
                    </div>
                
                <div className="w-full flex justify-between text-xs px-2 text-white ">
                    
                    <div className='flex sm:gap-4 gap-2  '>
                        <div className=' flex flex-col justify-center items-center '>
                             <span>|</span>
                             <p className='text-[10px] text-[#cccccc]'>0</p>
                        </div>
                        
                         <span className=''>'</span>
                         <span className=''>'</span>
                         <span className=''>'</span>
                         <span className=''>'</span>
                    </div>


                    <div className='flex sm:gap-4 gap-2 '>
                    <div className=' flex flex-col justify-center items-center '>
                             <span>|</span>
                             <p className='text-[10px] text-[#cccccc]'>4.5</p>
                        </div>
                         <span className=''>'</span>
                         <span className=''>'</span>
                         <span className=''>'</span>
                         <span className=''>'</span>
                    </div>

                    <div className='flex sm:gap-4 gap-2 '>
                    <div className=' flex flex-col justify-between items-center '>
                             <span>|</span>
                             <p className='text-[10px] text-[#cccccc]'>9</p>
                        </div>
                         <span className=''>'</span>
                         <span className=''>'</span>
                         <span className=''>'</span>
                         <span className=''>'</span>
                    </div>

                    <div className='flex sm:gap-4 gap-2 '>
                    <div className=' flex flex-col justify-center items-center '>
                             <span>|</span>
                             <p className='text-[10px] text-[#cccccc]'>13.5</p>
                        </div>
                         <span className=''>'</span>
                         <span className=''>'</span>
                         <span className=''>'</span>
                         <span className=''>'</span>
                    </div>

                    <div className='flex sm:gap-4 gap-2 '>
                    <div className=' flex flex-col justify-center items-center '>
                             <span>|</span>
                             <p className='text-[10px] text-[#cccccc]'>18</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center  pt-20 relative">
                        <label htmlFor="default-checkbox2" className="   md:w-[490px] sm:w-[400px] vsm:w-[320px] w-[290px] font-medium font-interV  text-sm  border border-[#413558] rounded-[35px] md:pr-48 pr-28 px-7 md:py-4 py-3  text-[#afa6c6] bg-[#1e1232]">
                        I'm looking for a long term partnership
                        </label>
                        <input id="default-checkbox2"
                        value={userData['Long_Term_Partnership']}
                        onChange={(e) => handleCheckboxChange(e, 'Long_Term_Partnership')}
                         type="checkbox" className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 absolute checked:bg-[#b969ff] rounded-full shadow right-5 appearance-none "/>
                </div>
                </div>
            </div>
                
        
            </div>
        </div>
    )
}

export default TimeFrame
