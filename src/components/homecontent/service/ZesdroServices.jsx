import React, {useEffect, useState} from 'react'
import square1 from "../../../assets/square/square1.png"
import squareShadow1 from "../../../assets/square/squareShadow1.png"
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import service1 from "../../../assets/serviceasset/service1.png"
import service2 from "../../../assets/serviceasset/service2.png"
import service3 from "../../../assets/serviceasset/service3.png"
import proto1 from "../../../assets/serviceasset/prototyping/proto1.png"
import proto2 from "../../../assets/serviceasset/prototyping/proto2.png"
import proto3 from "../../../assets/serviceasset/prototyping/proto3.png"
import app1 from "../../../assets/serviceasset/app/app1.png"
import web1 from "../../../assets/serviceasset/web1.png"
import it1 from "../../../assets/serviceasset/it1.png"
import custom1 from "../../../assets/serviceasset/custom1.png"
import brand1 from "../../../assets/serviceasset/brand1.png"
import seo1 from "../../../assets/grid/seo/seo1.png"
import branding1 from "../../../assets/serviceasset/branding1.png"


const ZesdroServices = () => {

    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)

    const [disableHoverEvents, setDisableHoverEvents] = useState(false);
    const [disableHoverEvents1, setDisableHoverEvents1] = useState(false);
    const [disableHoverEvents2, setDisableHoverEvents2] = useState(false);
    const [disableHoverEvents3, setDisableHoverEvents3] = useState(false);
    const [disableHoverEvents4, setDisableHoverEvents4] = useState(false);
    const [disableHoverEvents5, setDisableHoverEvents5] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: true, // Animation will only be triggered once
        rootMargin: '-100px 0px', // Adjust the rootMargin as needed
    });

    const handleFlip = () => {
        setShow(!show)
      
    }
    const handleFlip1 = () => {
        setShow1(!show1)
    }
    const handleFlip2 = () => {
        setShow2(!show2)
    }
    const handleFlip3 = () => {
        setShow3(!show3)
    }
    const handleFlip4 = () => {
        setShow4(!show4)
    }
    const handleFlip5 = () => {
        setShow5(!show5)
    }

    const handleMouseEnter = () => {
        if (!disableHoverEvents) {
             setShow(!show)
             console.log("Enter");
        }
       
    }

    const handleMouseLeave = () => {
        if (!disableHoverEvents) {
            setShow(!show)
            console.log("Leave");
        }
        
    }
    const handleMouseEnter1 = () => {
        if (!disableHoverEvents1) {
             setShow1(!show1)
             console.log("Enter");
        }
    }

    const handleMouseLeave1 = () => {
        if (!disableHoverEvents1) {
            setShow1(!show1)
            console.log("Leave");
        } 
    }

    const handleMouseEnter2 = () => {
        if (!disableHoverEvents2) {
             setShow2(!show2)
             console.log("Enter");
        }
    }

    const handleMouseLeave2 = () => {
        if (!disableHoverEvents2) {
            setShow2(!show2)
            console.log("Leave");
        } 
    }

    const handleMouseEnter3 = () => {
        if (!disableHoverEvents3) {
             setShow3(!show3)
             console.log("Enter");
        }
    }

    const handleMouseLeave3 = () => {
        if (!disableHoverEvents3) {
            setShow3(!show3)
            console.log("Leave");
        } 
    }

    const handleMouseEnter4 = () => {
        if (!disableHoverEvents4) {
             setShow4(!show4)
             console.log("Enter");
        }
    }

    const handleMouseLeave4 = () => {
        if (!disableHoverEvents4) {
            setShow4(!show4)
            console.log("Leave");
        } 
    }

    const handleMouseEnter5 = () => {
        if (!disableHoverEvents5) {
             setShow5(!show5)
             console.log("Enter");
        }
    }

    const handleMouseLeave5 = () => {
        if (!disableHoverEvents5) {
            setShow5(!show5)
            console.log("Leave");
        } 
    }

    return (
        <div className=' md:pb-[250px] pb-[150px] ' id="service">
            <hr className="h-px  grbg-ay-900 bg-gradient-to-r from-[#0b011d]  via-[#3e2f5b] to-[#0b011d]  border-0 "/>
            <div className='xl:px-[210px] md:px-[140px]  sm:px-[100px] vsm:px-[12px] px-[7px]'>
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
                <div className='flex flex-col  justify-center items-center sm:pt-28 pt-32 '>
                    <h2 className='bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent md:text-[88px] sm:text-[70px] vsm:text-[40px] text-[40px]  font-interV font-medium '>Services</h2>
                    <p className='text-[#b4abcb] font-interV text font-normal md:text-xl md:pt-0 pt-5'>Our systematic and tailored services.</p>
                </div>

                {/*  */}
                <motion.div className="grid xl:grid-cols-3 lg:grid-cols-2   grid-col-1  grid-rows-2  gap-3 pt-20 text-white "
                    ref={ref}
                    initial={
                        {
                            opacity: 0,
                            y: 50
                        }
                    }
                    animate={
                        inView ? {
                            opacity: 1,
                            y: 0
                        } : {
                            opacity: 0,
                            y: 50
                        }
                    }
                    transition={
                        {duration: 0.8}
                }>

                    <div className='rounded-xl xl:h-[400px] h-[300px]' 
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                       onClick={handleFlip}
                    >
                        <div className='group w-full h-full [perspective:1000px] '  
                         onClick={() => setDisableHoverEvents(!disableHoverEvents)}
                                 >
                            <div className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  ${show  ? '[transform:rotateY(180deg)] ': " " } `}
                                style={
                                    {border: " 1px solid rgb(48, 45, 56)"}
                                }
                               
                                >
                                <div className='absolute inset-0 ' >
                                    <div className='rounded-xl xl:h-[400px] h-[300px] w-full relative'
                                        style={
                                            {border: " 1px solid rgb(48, 45, 56)"}
                                    }>
                                        <div className='flex justify-center items-center h-full w-full'>
                                            <h4 className='font-medium xl:text-2xl text-xl font-interV  text-center pt-44 w-[200px]'>
                                                Custom Software Development
                                            </h4>
                                        </div>
                                        <img className='absolute md:w-44 w-32 left-0 right-0 m-auto xl:top-12 top-8'
                                            src={custom1}
                                            alt=""/>
                                        <img className='absolute  left-0 right-0 m-auto bottom-0 '
                                            src={proto2}
                                            alt=""/>
                                        <img className='absolute  left-0 right-0 m-auto bottom-0 '
                                            src={proto3}
                                            alt=""/>
                                    </div>
                                </div>
                                <div className='absolute inset-0 h-full w-full rounded-xl bg-[#0b011d] sm:px-8 p-5 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                                    <img className='absolute w-full h-full left-0 right-0 m-auto'
                                        src={seo1}
                                        alt=""/>

                                    <p className='text-[#776d89] md:text-base text-sm font-interV pt-2 leading-tig flex justify-center items-center h-full '>
                                        Zesdro technologies is a leading custom software development company that specializes in delivering tailored software solutions to businesses worldwide. 
                                          With a team of skilled developers and cutting-edge technologies, we take pride in crafting bespoke software applications that precisely 
                                         align with your unique business needs and objectives.
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl xl:h-[400px] h-[300px]'  
                    //  onMouseEnter={() => setShow1(!show1)}
                    //         onMouseLeave={() => setShow1(!show1)}
                            //  onClick={handleFlip1}

                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                             onClick={handleFlip1}
                             >
                        <div className='group w-full h-full [perspective:1000px] '
                          onClick={() => setDisableHoverEvents1(!disableHoverEvents1)}
                        >
                        <div className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  ${show1 ? '[transform:rotateY(180deg)] ': " " } `}
                                style={
                                    {border: " 1px solid rgb(48, 45, 56)"}
                            }  
                           
                            >
                                <div className='rounded-xl xl:h-[400px] h-[300px] w-full relative'
                                    style={
                                        {border: " 1px solid rgb(48, 45, 56)"}
                                }>
                                    <div className='flex justify-center items-center h-full '>
                                        <h4 className='font-medium xl:text-2xl text-xl font-interV text-center pt-44 w-[200px]'>
                                            Web Application Development
                                        </h4>
                                        <img className='absolute md:w-44 w-32 left-0 right-0 m-auto xl:top-20 top-10'
                                            src={web1}
                                            alt=""/>
                                        <img className='absolute  left-0 right-0 m-auto bottom-0 '
                                            src={proto2}
                                            alt=""/>
                                    </div>
                                    <img className='absolute top-0'
                                        src={service2}
                                        alt=""/>
                                </div>
                                <div className='absolute inset-0 h-full w-full rounded-xl bg-[#0b011d] px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                                    <img className='absolute w-full h-full left-0 right-0 m-auto'
                                        src={seo1}
                                        alt=""/>
                                    <p className='text-[#776d89] md:text-base text-sm font-interV pt-2 leading-tig flex justify-center items-center h-full '>
                                        Welcome to Zesdro technologies, your premier destination for expert web app development services. As a trusted and innovative company, we specialize in 
                                                                                creating cutting-edge web applications that elevate your online presence and drive business growth.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl xl:h-[400px] h-[300px]'
                    // onMouseEnter={() => setShow2(!show2)}
                    // onMouseLeave={() => setShow2(!show2)}
                    //  onClick={handleFlip2}
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}
                     onClick={handleFlip2}
                    >
                        <div className='group w-full h-full [perspective:1000px] '
                        onClick={() => setDisableHoverEvents2(!disableHoverEvents2)}
                        >
                             <div className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  ${show2 ? '[transform:rotateY(180deg)] ': " " } `}
                                style={
                                    {border: " 1px solid rgb(48, 45, 56)"}
                            }>
                                <div className='rounded-xl xl:h-[400px] h-[300px] w-full relative overflow-hidden'
                                    style={
                                        {border: " 1px solid rgb(48, 45, 56)"}
                                }>
                                    <div className='flex justify-center items-center h-full'>
                                        <h4 className='font-medium xl:text-2xl text-xl font-interV text-center pt-44 w-[230px] '>Mobile Application Development</h4>
                                        <img className='absolute xl:w-24 w-[90px] left-0 right-0 m-auto xl:top-12 top-10'
                                            src={app1}
                                            alt=""/>
                                        <img className='absolute  left-0 right-0 m-auto bottom-0 '
                                            src={proto2}
                                            alt=""/>


                                    </div>

                                </div>
                                <div className='absolute inset-0 h-full w-full rounded-xl bg-[#0b011d] px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                                    <img className='absolute w-full h-full left-0 right-0 m-auto'
                                        src={seo1}
                                        alt=""/>
                                    <p className='text-[#776d89] md:text-base text-sm font-interV pt-2 leading-tig flex justify-center items-center h-full '>
                                        Introducing MobileTech Solutions, your one-stop destination for expert mobile app development services. As a leading company in the industry, we specialize in crafting innovative
                                                                                  and user-centric mobile applications that bring your ideas to life and revolutionize your digital presence.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className='rounded-xl xl:h-[400px] h-[300px]'
                     onMouseEnter={handleMouseEnter3}
                     onMouseLeave={handleMouseLeave3}
                      onClick={handleFlip3}
                    >
                        <div className='group w-full h-full [perspective:1000px] '
                         onClick={() => setDisableHoverEvents3(!disableHoverEvents3)}
                        >
                        <div className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  ${show3 ? '[transform:rotateY(180deg)] ': " " } `}
                                style={
                                    {border: " 1px solid rgb(48, 45, 56)"}
                            }>
                                <div className='rounded-xl xl:h-[400px] h-[300px] w-full relative'
                                    style={
                                        {border: " 1px solid rgb(48, 45, 56)"}
                                }>
                                    <div className='flex justify-center items-center h-full'>
                                        <h4 className='font-medium xl:text-2xl text-xl font-interV text-center pt-44'>IT Consulting</h4>
                                        <img className='absolute xl:w-36 w-32 left-0 right-0 m-auto xl:top-20 top-10'
                                            src={it1}
                                            alt=""/>
                                        <img className='absolute  left-0 right-0 m-auto bottom-0 '
                                            src={proto2}
                                            alt=""/>
                                        <img className='absolute  left-0 right-0 m-auto bottom-0 '
                                            src={proto3}
                                            alt=""/>

                                    </div>

                                </div>
                                <div className='absolute inset-0 h-full w-full rounded-xl bg-[#0b011d] px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                                    <img className='absolute w-full h-full left-0 right-0 m-auto'
                                        src={seo1}
                                        alt=""/>
                                    <p className='text-[#776d89] md:text-base text-sm font-interV pt-2 leading-tig flex justify-center items-center h-full '>
                                        Our team of seasoned IT consultants brings a wealth of knowledge and experience to the table. We take the time to understand your unique business
                                                                             challenges, objectives, and opportunities, allowing us to tailor our services to your specific needs.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl xl:h-[400px] h-[300px]'
                     onMouseEnter={handleMouseEnter4}
                     onMouseLeave={handleMouseLeave4}
                      onClick={handleFlip4}
                    >
                        <div className='group w-full h-full [perspective:1000px] '
                         onClick={() => setDisableHoverEvents4(!disableHoverEvents4)}
                        >
                        <div className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  ${show4 ? '[transform:rotateY(180deg)] ': " " } `}
                                style={
                                    {border: " 1px solid rgb(48, 45, 56)"}
                            }>
                                <div className='rounded-xl xl:h-[400px] h-[300px] w-full relative'
                                    style={
                                        {border: " 1px solid rgb(48, 45, 56)"}
                                }>
                                    <div className='flex justify-center items-center h-full'>
                                        <h4 className='font-medium xl:text-2xl text-xl font-interV text-center pt-44'>Software Prototyping</h4>
                                        <img className='absolute xl:w-44 w-36 left-0 right-0 m-auto xl:top-[89px] top-10'
                                            src={proto1}
                                            alt=""/>
                                        <img className='absolute  left-0 right-0 m-auto bottom-0 '
                                            src={proto2}
                                            alt=""/>
                                        <img className='absolute  left-0 right-0 m-auto bottom-0 '
                                            src={proto3}
                                            alt=""/>

                                    </div>

                                </div>
                                <div className='absolute inset-0 h-full w-full rounded-xl bg-[#0b011d] px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                                    <img className='absolute w-full h-full left-0 right-0 m-auto'
                                        src={seo1}
                                        alt=""/>
                                    <p className='text-[#776d89] md:text-base text-sm font-interV pt-2 leading-tig flex justify-center items-center h-full '>
                                        Our software prototypes serve as powerful tools for communicating ideas, obtaining early user feedback, and making informed decisions. With a focus on user experience (UX) 
                                                                            design, we ensure that the prototypes are intuitive, engaging, and aligned with your target audience's preferences.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='rounded-xl xl:h-[400px] h-[300px]'
                     onMouseEnter={handleMouseEnter5}
                     onMouseLeave={handleMouseLeave5}
                      onClick={handleFlip5}
                    >
                        <div className='group w-full h-full [perspective:1000px] '
                         onClick={() => setDisableHoverEvents5(!disableHoverEvents5)}
                        >
                        <div className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d]  ${show5 ? '[transform:rotateY(180deg)] ': " " } `}
                                style={
                                    {border: " 1px solid rgb(48, 45, 56)"}
                            }>
                                <div className='rounded-xl xl:h-[400px] h-[300px] w-full relative'
                                    style={
                                        {border: " 1px solid rgb(48, 45, 56)"}
                                }>
                                    <div className='flex justify-center items-center h-full'>
                                        <h4 className='font-medium xl:text-2xl text-xl font-interV pt-44'>Branding</h4>
                                        <img className='absolute xl:w-44 w-36  left-0 right-0 m-auto xl:top-16 top-10'
                                            src={branding1}
                                            alt=""/>
                                        <img className='absolute  left-0 right-0 m-auto bottom-0 '
                                            src={proto2}
                                            alt=""/>
                                        <img className='absolute  left-0 right-0 m-auto bottom-0 '
                                            src={proto3}
                                            alt=""/>

                                    </div>

                                </div>
                                <div className='absolute inset-0 h-full w-full rounded-xl bg-[#0b011d] px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
                                    <img className='absolute w-full h-full left-0 right-0 m-auto'
                                        src={seo1}
                                        alt=""/>
                                    <p className='text-[#776d89] md:text-base text-sm font-interV pt-2 leading-tig flex justify-center items-center h-full '>
                                        From logo design and visual identity to brand messaging and positioning, we curate cohesive and memorable brand experiences that resonate with your target audience. Our goal is to help you stand
                                                                             out in the crowded marketplace, fostering brand recognition and building lasting connections with your customers.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>


                </motion.div>
            </div>
        </div>
    )
}
export default ZesdroServices
