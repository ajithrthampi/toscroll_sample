import React from 'react'
import square1 from "../../../assets/square/square1.png"
import squareShadow1 from "../../../assets/square/squareShadow1.png"
import process1 from "../../../assets/process/process1.png"
import process2 from "../../../assets/process/process2.png"
import process3 from "../../../assets/process/process3.png"
import process4 from "../../../assets/process/process4.png"
import process5 from "../../../assets/process/process5.png"
import process6 from "../../../assets/process/process6.png"
import process7 from "../../../assets/process/process7.png"
import "../process/Process.css"

import {BsStars} from 'react-icons/bs'

const Process = () => {
    return (
        <div className='pb-[140px] xl:px-[210px] md:px-[140px] sm:px-[100px] vsm:px-[12px] px-[7px]' id='support'>
            <hr className="h-px  bg-gray-900 bg-gradient-to-r from-[#0b011d]  via-[#3e2f5b] to-[#0b011d]  border-0 "/>
            <div className='relative top-28  left-0 right-0 bottom-0 w-[100%] h-auto  xl:max-w-[1128px] lg:max-w-[1000px] md:max-w-  mr-auto ml-auto  '>

                <div className='absolute '>
                    <img className='md:w-full sm:w-20 w-16 '
                        src={square1}
                        alt=""/>
                    <div className='absolute top-0'>
                        <img src={squareShadow1}
                            alt=""/>
                    </div>
                </div>


                <div className='absolute    sm:top-20 top-10 right-0 transform -rotate-90'>
                    <img className='md:w-full sm:w-20 w-16'
                        src={square1}
                        alt=""/>
                    <div className='absolute top-0'>
                        <img src={squareShadow1}
                            alt=""/>
                    </div>
                </div>
            </div>

            <div className='flex flex-col  justify-center items-center sm:pt-28 pt-32'>
                <h2 className='bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent md:text-[88px] sm:text-[70px] vsm:text-[40px] text-[40px]  font-interV font-medium '>Support</h2>
                <p className='text-[#b4abcb] font-interV text font-normal md:text-xl md:pt-0 pt-5'>Structured and tuned</p>
            </div>

            <div className=''>
                <div className='flex justify-center mt-20 sticky sm:top-40 vsm:top-24 top-14'>
                    <div className='w-[740px] h-full pb-5 overflow-hidden rounded-2xl relative bg-[#0b011d]'
                        style={
                            {border: " 1px solid rgb(48, 45, 56)"}
                    }>
                        <img className='w-full absolute transform rotate-90'
                            src={process1}
                            alt=""/>
                        <img className=' absolute right-0'
                            src={process2}
                            alt=""/>
                        <img className='absolute bottom-0 right-0'
                            src={process3}
                            alt=""/>
                        <div className='md:p-10 p-5'>
                            <button className='px-4 py-2 rounded-3xl bg-[rgba(19, 9, 36, 0.215)] hver:bg-[#504a54] hover:opacity-75 '
                                style={
                                    {border: " 1px solid rgb(48, 45, 56)"}
                            }>
                                <div className='flex gap-1'>
                                    <div className='text-[#bd64ff]'>
                                        <BsStars/>
                                    </div>
                                    <p className='text-white font-interV text-sm'>Tier 0</p>
                                </div>
                            </button>
                            <div className='mt-5 pb-10 md:pb-0'>
                                <h3 className='md:text-3xl text-2xl text-[#a8a4af] font-interV capitalize'>Self Service Unit</h3>
                                <p className='md:text-lg text-base text-[#776d89] font-tinos pt-6'>Our Gateway to Connectivity: Explore, Engage, and Stay Informed!</p>
                                <p className='text-[#776d89] md:text-base text-sm font-interV pt-2 leading-tig'>
                                    Our chatbots, blogs, and websites are open to all users. Additionally, you can reach us through various social media channels, including 
                                                                    Twitter, LinkedIn, and Facebook. Feel free to engage with us and stay updated on the latest information and updates.
                                </p>
                                <div className='md:invisible md:block hidden'>
                                    <div className='pt-10 flex justify-start gap-5   '>
                                        <p className='text-[#776d89] md:text-base text-sm font-interV'>+91 9876543210</p>
                                        <span className='text-[#776d89]'>|</span>
                                        <p className='text-[#776d89] md:text-base text-sm font-interV'>info-4@celozis.com</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex justify-center mt-20 sticky sm:top-44 vsm:top-28 top-16'>
                    <div className='w-[740px] h-full md:pb-5 pb-7 overflow-hidden rounded-2xl relative bg-[#0b011d]'
                        style={
                            {border: " 1px solid rgb(48, 45, 56)"}
                    }>
                        <img className='w-full absolute transform rotate-90'
                            src={process1}
                            alt=""/>
                        <img className=' absolute right-0'
                            src={process2}
                            alt=""/>
                        <img className='absolute top-0 right-0'
                            src={process4}
                            alt=""/>
                        <div className='md:p-10 p-5 '>
                            <button className='px-4 py-2 rounded-3xl bg-[rgba(19, 9, 36, 0.215)] hver:bg-[#504a54] hover:opacity-75 '
                                style={
                                    {border: " 1px solid rgb(48, 45, 56)"}
                            }>
                                <div className='flex gap-1'>
                                    <div className='text-[#bd64ff]'>
                                        <BsStars/>
                                    </div>
                                    <p className='text-white font-interV text-sm'>Tier 1</p>
                                </div>
                            </button>
                            <div className='mt-5 '>
                                <h3 className='md:text-3xl text-2xl text-[#a8a4af] font-interV'>Customer Support Division</h3>
                                <p className='md:text-lg text-base text-[#776d89] font-tinos pt-6'>Customer First: Speedy Support for a Seamless Experience and Satisfaction!</p>
                                <p className='text-[#776d89] md:text-base text-sm font-interV pt-2 leading-tig'>
                                    Our dedicated Customer Support Team promptly addresses user issues, providing responses within 24-48 hours.
                                                                                                 Rest assured, we strive to resolve your concerns swiftly and efficiently for an enhanced user experience.
                                </p>
                                <div className='md:invisible md:block hidden'>
                                    <div className='pt-10 flex justify-start gap-5   '>
                                        <p className='text-[#776d89] md:text-base text-sm font-interV'>+91 9876543210</p>
                                        <span className='text-[#776d89]'>|</span>
                                        <p className='text-[#776d89] md:text-base text-sm font-interV'>info-4@celozis.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex justify-center mt-20 sticky sm:top-48 vsm:top-32 top-[74px]'>
                    <div className='w-[740px] h-full md:pb-5 pb-6 overflow-hidden rounded-2xl relative bg-[#0b011d]'
                        style={
                            {border: " 1px solid rgb(48, 45, 56)"}
                    }>
                        <img className='w-full absolute transform rotate-90'
                            src={process1}
                            alt=""/>
                        <img className=' absolute right-0'
                            src={process2}
                            alt=""/>
                        <img className='absolute top-0 right-0'
                            src={process5}
                            alt=""/>
                        <img className='absolute top-0 h-full right-0 bottom-0'
                            src={process6}
                            alt=""/>
                        <div className='md:p-10 p-5 '>
                            <button className='px-4 py-2 rounded-3xl bg-[rgba(19, 9, 36, 0.215)] hver:bg-[#504a54] hover:opacity-75 '
                                style={
                                    {border: " 1px solid rgb(48, 45, 56)"}
                            }>
                                <div className='flex gap-1'>
                                    <div className='text-[#bd64ff]'>
                                        <BsStars/>
                                    </div>
                                    <p className='text-white font-interV text-sm'>Tier 2</p>
                                </div>
                            </button>
                            <div className='mt-5'>
                                <h3 className='md:text-3xl text-2xl text-[#a8a4af] font-interV'>Technical Support Division</h3>
                                <p className='md:text-lg text-base text-[#776d89] font-tinos pt-6'>Empowering Solutions: Tier 2 Experts On Standby, Swiftly Resolving Issues!</p>
                                <p className='text-[#776d89] md:text-base text-sm font-interV pt-2 leading-tig'>
                                    In the event of an unsatisfactory solution, our Tier 2 technical team will closely monitor the situation. You will receive notification
                                                                                                 within 3 to 5 business days, ensuring we address your concerns thoroughly and provide a resolution that meets your expectations.
                                </p>
                                <div className='md:invisible md:block hidden'>
                                    <div className='pt-10 flex justify-start gap-5   '>
                                        {/* <p className='text-[#776d89] md:text-base text-sm font-interV'>+91 9876543210</p>
                                        <span className='text-[#776d89]'>|</span>
                                        <p className='text-[#776d89] md:text-base text-sm font-interV'>info-4@celozis.com</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mt-20 sticky sm:top-52 vsm:top-36 top-[82px]'>
                    <div className='w-[740px] h-full pb-5 overflow-hidden rounded-2xl relative bg-[#0b011d]'
                        style={
                            {border: " 1px solid rgb(48, 45, 56)"}
                    }>
                        <img className='w-full absolute transform rotate-90'
                            src={process1}
                            alt=""/>
                        <img className=' absolute right-0'
                            src={process2}
                            alt=""/> {/* <img className='absolute bottom-0 right-0'
                        src={process5}
                        alt=""/> */}
                        <img className='absolute bottom-0 h-full right-0'
                            src={process6}
                            alt=""/>
                        <div className='md:p-10 p-5 '>
                            <button className='px-4 py-2 rounded-3xl bg-[rgba(19, 9, 36, 0.215)] hver:bg-[#504a54] hover:opacity-75 '
                                style={
                                    {border: " 1px solid rgb(48, 45, 56)"}
                            }>
                                <div className='flex gap-1'>
                                    <div className='text-[#bd64ff]'>
                                        <BsStars/>
                                    </div>
                                    <p className='text-white font-interV text-sm'>Tier 3</p>
                                </div>
                            </button>
                            <div className='mt-5  pb-10 md:pb-0'>
                                <h3 className='md:text-3xl text-2xl text-[#a8a4af] font-interV'>Nodal Service Region</h3>
                                <p className='md:text-lg text-base text-[#776d89] font-tinos pt-6'>Elevate Your Concerns: Tier III Nodal Officer, Ensuring Swift Resolution!</p>
                                <p className='text-[#776d89] md:text-base text-sm font-interV pt-2 leading-tig'>
                                    If inquiries remain unresolved, they will be escalated to our Tier III Nodal Officer. 
                                                                                                Within 3 to 5 business days, you will be informed of further actions taken to ensure your concern receives appropriate attention and resolution.
                                </p>
                                <div className='md:invisible md:block hidden'>
                                    <div className='pt-10 flex justify-start gap-5   '>
                                        <p className='text-[#776d89] md:text-base text-sm font-interV'>+91 9876543210</p>
                                        <span className='text-[#776d89]'>|</span>
                                        <p className='text-[#776d89] md:text-base text-sm font-interV'>info-4@celozis.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mt-20 sticky sm:top-56 vsm:top-40 top-[90px] '>
                    <div className='w-[740px] h-full md:pb-5 pb-16 overflow-hidden rounded-2xl relative bg-[#0b011d]'
                        style={
                            {border: " 1px solid rgb(48, 45, 56)"}
                    }>
                        <img className='w-full absolute transform rotate-90'
                            src={process1}
                            alt=""/>
                        <img className=' absolute right-0'
                            src={process2}
                            alt=""/> {/* <img className='absolute bottom-0 right-0'
                        src={process5}
                        alt=""/> */}
                        <img className='absolute bottom-0'
                            src={process7}
                            alt=""/>
                        <div className='md:p-10 p-5  '>
                            <button className='px-4 py-2  rounded-3xl bg-[rgba(19, 9, 36, 0.215)] hver:bg-[#504a54] hover:opacity-75 '
                                style={
                                    {border: " 1px solid rgb(48, 45, 56)"}
                            }>
                                <div className='flex gap-1'>
                                    <div className='text-[#bd64ff]'>
                                        <BsStars/>
                                    </div>
                                    <p className='text-white font-interV text-sm'>Tier 4</p>
                                </div>
                            </button>
                            <div className='mt-5'>
                                <h3 className='md:text-3xl text-2xl text-[#a8a4af] font-interV'>Grievance Service Centre</h3>
                                <p className='md:text-lg text-base text-[#776d89] font-tinos pt-6'>Beyond Expectations: Level IV Complaints Officer Resolving Your Concerns!</p>
                                <p className='text-[#776d89] md:text-base text-sm font-interV pt-2 leading-tig'>
                                    If the resolution remains unmet, our Complaints Officer at Level IV is available. You will be notified 
                                                                                                within 30-45 days regarding the next steps taken to address your concern and ensure a satisfactory resolution.
                                </p>
                                <div className='md:invisible md:block hidden'>
                                    <div className='pt-10 flex justify-start gap-5   '>
                                        <p className='text-[#776d89] md:text-base text-sm font-interV'>+91 9876543210</p>
                                        <span className='text-[#776d89]'>|</span>
                                        <p className='text-[#776d89] md:text-base text-sm font-interV'>info-4@celozis.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Process
