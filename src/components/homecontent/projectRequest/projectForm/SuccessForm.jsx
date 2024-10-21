import React, { useContext } from 'react'
import {IoMdTime} from 'react-icons/io'
import svglogoIcon from "../../../../assets/svg/svglogoIcon.svg"
import { multiStepContext } from '../../../context/ContextStep'
import web_line_gradiant from "../../../../assets/lineGradient/web_line_gradiant.png"

const SuccessForm = () => {
    const { setStep, userData, setUserData,currentStep, finalData } = useContext(multiStepContext)

    const backToPageOne = () => {
        setStep(0)
    }

  

    return (
        <div className='z-50'>
            <div className={`flex flex-col justify-center items-center sm:pt-20 pt-10 `}>
                <div className='rounded-full w-28 h-28 bg-whit'>
                    <img src={svglogoIcon}
                        alt=""/>
                </div>
                <div className='sm:pt-10 pt-5 flex flex-col justify-center items-center'>
                    <h3 className='sm:text-[38px] text-[30px] font-interV font-medium text-[#b5abcb] text-center'>
                        Submitted Successfully
                    </h3>
                    <p className='sm:text-base vsm:text-sm text-xs   font-normal text-[#b5abcb] sm:px-24 text-center font-interV pt-10 '>
                        Thanks so much for showing an interest in our work. This form helps us to quickly
                         understand what your project is about, the scope of the task(s), whilst also
                         clarifying any important questions in advance.
                    </p>
                    <button type='button' className='sm:text-sm text-xs font-interV py-1.5 mt-6 bg-[#19102a] font-normal text-[#b5abcb] rounded-3xl px-5 flex items-center gap-2'
                        style={
                            {border: " 1px solid rgb(140,129,163)"}
                    }>
                        <span><IoMdTime className='text-lg'/></span>
                        We will get back to you within 48 hours.
                    </button>
                    <div className='pt-10'>
                        {/* <button type='button' className='sm:text-sm text-xs font-interV py-1.5 mt-6 bg-[#19102a] font-normal text-[#b5abcb] rounded-3xl px-5 flex items-center gap-2'>
                            Place another Enquiry
                        </button> */}

                        <div className="relative cursor-pointer font-interV inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-[#0b011d] transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-[#0b011d]"
                         onClick={backToPageOne}
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-br via-[#0b011d] from-[#06fffc] to-[#152569]"></span>
                            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#0b011d] rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                            <span className="relative text-white"> Place another Enquiry</span>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessForm
