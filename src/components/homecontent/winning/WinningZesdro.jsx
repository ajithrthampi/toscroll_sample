import React from 'react'
import square1 from "../../../assets/square/square1.png"
import squareShadow1 from "../../../assets/square/squareShadow1.png"
import web_line_gradiant from "../../../assets/lineGradient/web_line_gradiant.png"
import  { motion  } from "framer-motion"

const WinningZesdro = () => {
    return (
        <div className=' mx- pb-24 ' id="vision">
            <div className='  g-red-400 relative '>
                <div className=''>
                      <hr className="h-px  bg-gray-900 bg-gradient-to-r from-[#0b011d] via-[#372c4b] to-[#0b011d]  border-0 "/>
                      {/* <img className='absolute top-40  w-[900px] right-0 left-0 m-auto' src={web_line_gradiant} alt="" /> */}
                </div>
              
                <div className='relative top-10 left-0 right-0 bottom-0 w-[100%] h-auto  xl:max-w-[1128px] lg:max-w-[1000px] md:max-w-  mr-auto ml-auto  '>

                    <div className='absolute left-0 top-0 right-auto bottom-auto  hidden lg:block'>
                        <img src={square1}
                            alt=""/>
                        <div className='absolute top-0'>
                            <img 
                            src={squareShadow1}
                                alt=""/>
                        </div>
                    </div>
                    <div className='absolute right-0 left-auto top-0 bottom-auto transform -rotate-90 hidden lg:block'>
                        <img src={square1}
                            alt=""/>
                        <div className='absolute top-0'>
                            <img 
                            src={squareShadow1}
                                alt=""/>
                        </div>
                    </div>

                    {/* second */}
                    <div className='lg:mt-auto -mt-20'>
                         <div className='absolute top-24 lg:left-28 md:left-10 sm:left-0 left-0  transform rotate-90'>
                        <img className='sm:w-full sm:h-full w-16 h-16'
                            src={square1}
                            alt=""/>
                        <div className='absolute top-0 '>
                            <img
                                src={squareShadow1}
                                alt=""/>
                        </div>
                    </div>
                    <div className='absolute top-24 lg:right-28 md:right-10 sm:right-0 right-0  transform rotate-180'>
                        <img
                         className='sm:w-full sm:h-full w-16 h-16'
                        src={square1}
                            alt=""/>
                        <div className='absolute top-0 '>
                            <img 
                            src={squareShadow1}
                                alt=""/>
                        </div>
                    </div>
                    </div>
                   

                    {/* Third */}
                    <div className='absolute sm:top-48  lg:left-64 md:left-48 sm:left-32 vsm:left-20 left-20 vsm:top-48 top-44      transform otate-180 '>
                        <img src={square1}
                         className='sm:w-full sm:h-full vsm:w-16 h-16'
                            alt=""/>
                        <div className='absolute top-0 '>
                            <img src={squareShadow1}
                                alt=""/>
                        </div>
                    </div>
                    <div className='absolute lg:right-64 md:right-48 sm:right-32  sm:top-48 vsm:right-20 right-20 vsm:top-48 top-44 transform -rotate-90 '>
                        <img src={square1}
                         className='sm:w-full sm:h-full vsm:w-16 h-16'
                            alt=""/>
                        <div className='absolute top-0 '>
                            <img src={squareShadow1}
                                alt=""/>
                        </div>
                    </div>
                </div>

                <div className='grid '>
                    <div className='flex flex-col justify-center items-center xl:mt-28 lg:mt-10'>
                        <h1 className='text-[#bbb8c0  bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent xl:text-[82px] lg:text-[62px] md:text-[70px] sm:text-[46px] vsm:text-[40px] text-[30px] font-interV font-medium xl:w-[800px] lg:w-[600px] sm:w-[600px] vsm:w-[300px] w-[180px]  bg-red-00  text-center xl:mt-0 lg:mt-20 md:mt-40 sm:mt-32 mt-24  leading-tight'>Expand Your Horizons</h1>
                        <p className=' font-interV lg:text-xl md:text-base text-sm leading-relaxed text-[#ada2c2] md:w-[552px] sm:w-[400px] vsm-[350px] font-normal sm:leading-normal text-center xl:pt-10 lg:pt-10    md:pt-9 sm:pt-12 pt-24 md:px-0 px-5'>
                        Amplifying the well crafted charm of complex challenges, our luminous mission embarks on a ride to redefine possibilities, leaving an unforgettable mark on the technological environment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WinningZesdro
