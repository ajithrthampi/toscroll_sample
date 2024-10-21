import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
            <h3 className='lg:text-[36px] md:text-[30px] sm:text-[28px] text-[15px] text-center font-interV font-medium text-white lg:px-48 md:px-20  pt-12 leading-snug'>
                    How may I
                    contact you?
                </h3>

                <div className='pt-10'>
                <div className='pb-5 leading-tight sm:w-[380px] vsm:w-[300px] w-[280px]'>
                        <label className='text-[#988cae] font-interV' htmlFor="">First name</label>
                        <input className='w-full bg-[#b5abcb] py-3.5 px-3 rounded-xl mt-2 font-interV font-semibold  outline-none' type="text" />
                    </div>
                    
                    <div className='pb-5 leading-tight sm:w-[380px] vsm:w-[300px] w-[280px]'>
                        <label className='text-[#988cae] font-interV' htmlFor="">Last name</label>
                        <input className='w-full bg-[#b5abcb] py-3.5 px-3 rounded-xl mt-2 font-interV font-semibold  outline-none' type="text" />
                    </div>

                    <div className='pb-5 leading-tight sm:w-[380px] vsm:w-[300px] w-[280px]'>
                        <label className='text-[#988cae] font-interV' htmlFor="">Email</label>
                        <input className='w-full bg-[#b5abcb] py-3.5 px-3 rounded-xl mt-2 font-interV font-semibold  outline-none' type="email" />
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Contact
