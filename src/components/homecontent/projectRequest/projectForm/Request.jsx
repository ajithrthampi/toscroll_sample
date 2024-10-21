import React from 'react'
import { IoMdTime } from 'react-icons/io';
import svglogoIcon from "../../../../assets/svg/svglogoIcon.svg"

const Request = ({}) => {
    return (
        <div className={`flex flex-col justify-center items-center sm:pt-20 pt-10 z-50 `}>
            <div className='rounded-full w-28 h-28 bg-whit'>
                <img className='' src={svglogoIcon} alt="" />
            </div>
            <div className='sm:pt-10 pt-5 flex flex-col justify-center items-center'>
                <h3 className='sm:text-[38px] text-[30px] font-interV font-medium text-[#b5abcb]'>
                    Project Request
                </h3>
                <p className='sm:text-base vsm:text-sm text-xs   font-normal text-[#b5abcb] sm:px-24 text-center font-interV pt-3 '>
                    Thanks so much for showing an interest in our work. This form helps us to quickly
                    understand what your project is about, the scope of the task(s), whilst also
                    clarifying any important questions in advance.
                </p>
                <p className='text-base font-normal text-[#b5abcb] px-3 text-center font-interV pt-6'>
                    please be as detailed and precise as possible--it's appreciated.
                </p>
                <div className='sm:text-sm text-xs font-interV py-1.5 mt-6 bg-[#19102a] font-normal text-[#b5abcb] rounded-3xl px-5 flex items-center gap-2'
                    style={{border: " 1px solid rgb(140,129,163)"}}
                    >
                         <span><IoMdTime className='text-lg' /></span>  
                    We will get back to you within 48 hours.
                </div>
            </div>
        </div>
    )
}

export default Request
