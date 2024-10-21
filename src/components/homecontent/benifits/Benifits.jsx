import React, { useState, useRef, useEffect } from 'react'
import important from "../../../assets/benifits/important.png"
import "../benifits/benifits.css"
import gridShade from "../../../assets/grid/grid1/gridShade.png"
import gridPhone1 from "../../../assets/grid/design/gridPhone1.png"
import gridPhone2 from "../../../assets/grid/design/gridPhone2.png"
import gridPhone3 from "../../../assets/grid/design/gridPhone3.png"
import security1 from "../../../assets/grid/security/security1.png"
import securityShade from "../../../assets/grid/security/securityShade.png"
import fastDev from "../../../assets/grid/fastdev/fastDev.png"
import fastStrike from "../../../assets/grid/fastdev/fastStrike.png"
import cms from "../../../assets/grid/cms/cms.png"
import cms2 from "../../../assets/grid/cms/cms2.png"
import cms3 from "../../../assets/grid/cms/cms3.png"
import proffessional1 from "../../../assets/grid/proffessional/proffessional1.png"
import proffessional2 from "../../../assets/grid/proffessional/proffessional2.png"
import roi1 from "../../../assets/grid/roi/roi1.png"
import roi2 from "../../../assets/grid/roi/roi2.png"
import seo1 from "../../../assets/grid/seo/seo1.png"
import seo2 from "../../../assets/grid/seo/seo2.png"
import seo3 from "../../../assets/grid/seo/seo3.png"
import contact1 from "../../../assets/grid/contact/contact1.png"
import contact2 from "../../../assets/grid/contact/contact2.png"
import contact3 from "../../../assets/grid/contact/contact3.png"
import contact4 from "../../../assets/grid/contact/contact4.png"
import roi3 from "../../../assets/grid/roi/roi3.png"
import roi4 from "../../../assets/grid/roi/roi4.png"
import roi5 from "../../../assets/grid/roi/roi5.png"
import roi6 from "../../../assets/grid/roi/roi6.png"
import roi7 from "../../../assets/grid/roi/roi7.png"
import roi8 from "../../../assets/grid/roi/roi8.png"
import roi9 from "../../../assets/grid/roi/roi9.png"
import cleancode from "../../../assets/clean/cleancode.png"
import cleancode1 from "../../../assets/clean/cleancode1.png"
import seo7 from "../../../assets/benifits/seo7.png"
import nipe from "../../../assets/benifits/nipe.svg"
import { motion } from 'framer-motion';
import proffessional from "../../../assets/benifits/proffessional.png"
import profesnal from "../../../assets/benifits/profesnal.png"
import roi from "../../../assets/roi/roi.png"


const Benifits = () => {

    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const divRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!divRef.current || isFocused) return;
    
        const div = divRef.current;
        const rect = div.getBoundingClientRect();
    
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      };
    
      const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
      };
    
      const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
      };
    
      const handleMouseEnter = () => {
        setOpacity(1);
      };
    
      const handleMouseLeave = () => {
        setOpacity(0);
        setTimeout(() => {
            setPosition({ x: 0, y: 0 });
          }, 200);
      };


      const activeStyle = {
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), transparent 40%)`,
      };
    
      const inactiveStyle = {
        
      };

      
  

    return (
        <div className=' pb-[130px] ' id="benifits">
            <hr className="h-px  bg-gray-900 bg-gradient-to-r from-[#0b011d]  via-[#3e2f5b] to-[#0b011d]  border-0 "/>
            <div className='xl:px-[210px] md:px-[140px]  sm:px-[100px] vsm:px-[12px] px-[7px]'>
                <div className='pt-32 relative '>
                    <img className='' src={important}
                        alt=""/>
                    <div className='flex flex-col  justify-center items-center absolute top-20 right-0 left-0'>
                        <h2 className=' bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent md:text-[88px] sm:text-[70px] vsm:text-[60px] text-[45px]  font-interV font-medium'>Benefits</h2>
                        <p className='text-white font-interV text font-normal text-xl'>Vision. Magnified</p>
                    </div>
                </div>

                <div className='xl:pt-14 pt-32'>
                    <div
                      ref={divRef}
                      onMouseMove={handleMouseMove}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    

                    style={opacity ? activeStyle : inactiveStyle}
                      
                    className="grid grid-cols-4 grid-rows-4 gap-3 text-white  "
                   
                    >

                        <div 
                         
                        className=" group xl:col-span-2 col-span-4 xl:h-[278px] h-[300px]  relative overflow-hidden  border rounded-xl" style={{border: " 1px solid rgb(48, 45, 56)"}}>
        
                            <img className='absolute bottom-0 w-full  top-0 h-full' src={gridShade} alt="" />
                            
                            <img className='absolute  m-auto left-0 right-64 bottom-0 sm:w-auto sm:h-auto w-[120px] h-[150px]  lg:group-hover:left-[70px]  z-30   transition-all duration-1000 ease-in-out' src={gridPhone1} alt="" />
                            <img className='absolute  m-auto left-0 sm:right-16 vsm:right-28 right-10 -bottom-10  sm:w-auto sm:h-auto w-[80px] h-[80px]  z-30 lg:group-hover:bottom-0   transition-all duration-1000 ease-in-out' src={gridPhone2} alt="" />
                            <img className='absolute  m-auto xl:left-[219px] sm:left-56 vsm:left-36 left-36 sm:right-0 vsm:right-20  right-   sm:-bottom-0 -bottom-4  sm:w-auto sm:h-auto w-auto h-[130px]  lg:group-hover:right-10   transition-all duration-1000 ease-in-out' src={gridPhone3} alt="" />

                            <div className='flex flex-col justify-center items-center absolute left-0 right-0 top-8'>
                              <h4 className='font-medium xl:text-2xl text-xl font-interV'>Bespoke,</h4>
                              <p className='font-normal xl:text-2xl text-xl font-interV text-[#9fa1b4]'>responsive-first design.</p>
                            </div>
                        </div>


                        <div
                         
                        className="xl:col-start-3 group overflow-hidden relative xl:col-end-3 col-start-1 col-end-5  h-[278px] borde rounded-xl" style={{border: " 1px solid rgb(48, 45, 56)"}}>
                           <img className='absolute  m-auto left-0  right-0 top-10   lg:group-hover:pt-32   transition-all duration-1000 ease-in-out ' src={security1} alt="" />
                           <img className='absolute right-0 w-full h-full ' src={securityShade} alt="" />
                           <div className=' flex flex-col justify-center items-center right-0 left-0 m-auto bottom-7 absolute  lg:group-hover:bottom-32   transition-all duration-1000 ease-in-out'>
                              <p className='font-interV xl:text-2xl text-xl font-medium  '>S**iously </p>
                            <p className='font-normal xl:text-2xl text-xl font-interV text-[#9fa1b4] '> Secu**</p>
                           </div>
                        </div>


                        <div className="group xl:row-span-2 relative xl:col-start-4 overflow-hidden md: xl:mt-auto -mt-5   col-start-1 col-end-5 xl:h-full h-[278px]  rounded-xl" style={{border: " 1px solid rgb(48, 45, 56)"}}>
                            <img className='absolute right-0 w-full h-full' src={fastDev} alt="" />

                            <img className='absolute right-0 left-0 m-auto xl:top-9 top-4 xl:w-auto xl:h-auto w-28 h-64 transform transition-transform opacity-80 lg:hover:opacity-100 lg:hover:scale-150 duration-700 ease-in-out' src={fastStrike} alt="" />

                            <div className='flex flex-col justify-center  absolute left-8  top-8'>
                              <h4 className='font-medium xl:text-2xl text-xl font-interV'>Fast dev.</h4>
                              <p className='font-normal  font-interV text-[#9fa1b4] xl:text-2xl text-xl'>Fast loads.</p>
                            </div>
                        </div>


                        <div className="group xl:mt-auto -mt-10  xl:row-start-2 xl:col-start-1 overflow-hidden xl:col-end-2 relative col-start-1 col-end-5  h-[278px] rounded-xl" style={{border: " 1px solid rgb(48, 45, 56)"}}>
                            <img className='absolute top-8 m-auto left-0 right-0  lg:group-hover:top-5   transition-all duration-1000 ease-in-out ' src={cms} alt="" />
                            <img className=' absolute top-0' src={cms2} alt="" />
                            <img className='absolute bottom-0 left-0 h-full w-full' src={cms3} alt="" />
                            <div className='flex flex-col justify-center top-44 bottom-7 left-8 absolute'>
                              <p className='font-interV xl:text-2xl text-xl font-medium'>Powerful CMS. </p>
                              <p className='font-normal xl:text-2xl text-xl font-interV text-[#9fa1b4]'>Scaleable &</p>
                              <p className='font-normal xl:text-2xl text-xl font-interV text-[#9fa1b4]'>teachable.</p>
                           </div>
                        </div>


                        <div className=" group xl:mt-auto -mt-[60px]  xl:col-span-2 xl:row-start-2 relative col-start-1 overflow-hidden col-end-5   h-[278px]  rounded-xl" style={{border: " 1px solid rgb(48, 45, 56)"}}>
                        <img className='absolute z-50 right-0 left-0 w-full h-full opacity-25 transform transition-transform   lg:hover:scale-110 duration-700 ease-in-out ' src={cleancode1} alt="" />
                        <div className='flex flex-col justify-center items-center w-full bottom-10 m-auto  absolute'>
                         
                          <p className=' group font-interV xl:text-2xl text-xl font-medium t'>Clean and Robust code. </p>
                            {/* <p className='font-normal xl:text-2xl text-xl font-interV text-[#9fa1b4]'> Integrations.</p> */}
                          </div>
                        </div>


                        <div className="group  xl:row-span-2 relative xl:row-start-3 overflow-hidden    xl:col-start-1 xl:col-end-2 col-start-1 col-end-5   xl:h-full h-[508px] rounded-xl" style={{border: " 1px solid rgb(48, 45, 56)"}}>
                           <div className='flex flex-col justify-center top-6 left-8 absolute'>
                            <p className='font-interV xl:text-2xl text-xl font-medium'>Professional </p>
                            <p className='font-normal xl:text-2xl text-xl font-interV text-[#9fa1b4]'> Integrations.</p>
                           </div>
                             <img className='absolute w-full h-full' src={proffessional1} alt="" />
                             {/* <img className='absolute xl:top-10  m-auto left-0 right-0' src={proffessional2} alt="" /> */}
                             <img className='absolute xl:top-5  m-auto left-0 right-0 w-full object-contain h-full' src={profesnal} alt="" />
                             <img className='hidden  absolute xl:top-5  m-auto left-0 right-0 w-full object-contain h-full opacity-0 transition-all lg:hover:opacity-100 lg:group-hover:block   duration-1000 ease-in-out' src={proffessional} alt="" />
                        </div>

                        <div className=" group xl:col-span-2 relative overflow-hidden   xl:row-start-3 xl:col-start-2 xl:col-end-4 col-start-1 col-end-5  h-[278px]  rounded-xl" style={{border: " 1px solid rgb(48, 45, 56)"}}>
                            <img className='absolute h-full w-full' src={roi1} alt="" />
                            <img className='absolute -bottom-16' src={roi2} alt="" />

                            
                            <img className='z-10 absolute left-24 top-5  lg:group-hover:top-16   transition-all duration-1000 ease-in-out' src={roi3} alt="" />
                            <img className='z-10 absolute right-10 top-14  lg:group-hover:top-32  group-hover:rotate-[24deg] transition-all duration-1000 ease-in-out' src={roi4} alt="" />
                            <img className='z-10 absolute left-6 top-24  lg:group-hover:top-36   transition-all duration-1000 ease-in-out' src={roi5} alt="" />
                            <img className='  z-40 absolute  m-auto left-0 right-3  top-40  lg:group-hover:top-44   transition-all duration-1000 ease-in-out' src={roi6} alt="" />
                            <img className='z-10 absolute   left-40  right-0  top-44  lg:group-hover:top-[202px] group-hover:rotate-6  transition-all duration-1000 ease-in-out' src={roi7} alt="" />
                            <img className='z-30 absolute   left-20 top-52  lg:group-hover:top-[228px] group-hover:-rotate-[15deg]   transition-all duration-1000 ease-in-out' src={roi8} alt="" />
                            <img className='z-10 absolute   right-48 top-60  lg:group-hover:top-72   transition-all duration-1000 ease-in-out' src={roi9} alt="" />
                            <img className='hidden z-0  lg:block absolute 2xl:top-16 xl:top-32 opacity-0 transition-all lg:hover:opacity-100 lg:group-hover:block   duration-1000 ease-in-out' src={roi} alt="" />
                      
                                <div className='flex z-10 flex-col justify-center items-center   pt-5  absolute  left-0 right-0  '>
                                     <p className='font-interV xl:text-2xl text-xl  font-medium'>ROI-driven focus. </p>
                                </div>                
                        </div>
                        {/* <div className="xl:col-start-2 xl:row-start-4  xl:col-end-2 col-start-1 col-end-5  h-[278px]  rounded-xl" style={{border: " 1px solid rgb(48, 45, 56)"}}>12</div> */}
                        <div className=" group xl:col-span-2 relative overflow-hidden   xl:col-start-2 xl:row-start-4 xl:col-end-5 col-start-1 col-end-5 h-[278px]  rounded-xl" style={{border: " 1px solid rgb(48, 45, 56)"}}>
                            <img className='absolute right-0 left-0' src={contact1} alt="" />
                            <img className='absolute right-0 -bottom-3 z-20 md:w-auto md:h-auto  sm:w-56 w-40 transform transition-transform opacity-80 lg:hover:opacity-100 lg:group-hover:scale-110 group-hover:rotate-12 duration-700 ease-in-out' src={contact2} alt="" />
                            <img className='absolute left-0 right-0 w-full h-full bottom-0   ' src={contact3} alt="" />
                            <img className='absolute left-0 bottom-0  md:w-auto md:h-auto  sm:w-40 w-32   group-hover:-rotate-[45deg] transition-all duration-1000 ease-in-out ' src={contact4} alt="" />
                            <div className='flex flex-col justify-center top-6 left-8 absolute'>
                            <p className='font-interV xl:text-2xl text-xl font-medium'>One point of view </p>
                            <p className='font-normal xl:text-2xl text-xl font-interV text-[#9fa1b4]'>Always.</p>
                            <div className='z-10 hidden '>
                                <div className='w-2 h-2     bg-[#464258]   rounded-full absolute left-32 top-32'></div>
                                <div className='w-3 h-3 bg-[#727275]  rounded-full absolute left-[150px] top-[113px]'></div>
                                <div className='w-3.5 h-3.5 bg-[#464258] rounded-full absolute left-[179px] top-[100px]'></div>
                                <div className='w-4 h-4 bg-[#9fa1b4]  rounded-full absolute left-[215px] top-[89px]'></div>
                               
                                <div className='w-[18px] h-[18px] bg-[#464258] rounded-full  absolute left-[265px] top-[78px]'></div>
                                <div className='w-5 h-5 bg-[#9fa1b4]  rounded-full  absolute left-[320px] top-[74px]'></div>
                                <div className='w-[22px] h-[22px] bg-[#464258] rounded-full  absolute left-[380px] top-[75px]'></div>
                                <div className='w-6 h-6 bg-[#9fa1b4]  rounded-full  absolute left-[445px] top-[87px]'></div>
                                <div className='w-[26px] h-[26px] bg-[#464258] rounded-full  absolute left-[510px] top-[109px]'></div>
                                <div className='w-7 h-7 bg-[#9fa1b4]  rounded-full  absolute left-[590px] top-[149px] z-10 in'></div>
                            </div>
                           </div>
                        </div>
                        <div className=" group xl:col-start-4 relative xl:row-start-3 w-full overflow-hidden  xl:col-end-4 col-start-1 col-end-5  h-[278px]  rounded-xl" style={{border: " 1px solid rgb(48, 45, 56)"}}>
                           <img className='absolute' src={seo1} alt="" />
                           <img className='absolute w-full ' src={seo2} alt="" />
                           <img className='absolute  xl:h-auto   m-auto left-0 right-0 top-1 lg:group-hover:top-7   transition-all duration-1000 ease-in-out' src={nipe} alt="" />
                           <div className='flex flex-col justify-center items-center absolute m-auto bottom-6 left-0 right-0'>
                            <p className='font-interV xl:text-2xl text-xl font-medium'>Unveil Visibility</p>
                            <p className='font-normal xl:text-2xl text-xl font-interV text-[#9fa1b4]'> Branding Pro..</p>
                           </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Benifits
