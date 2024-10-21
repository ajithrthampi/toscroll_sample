import React, {useEffect, useState} from 'react'
import Service from './service/Service'
import {motion} from 'framer-motion';

const Faqs = () => {


    const [state, setState] = useState()
    const [buttonData, setButtonData] = useState("")
    const [showService, setShoeService] = useState(false)
    const [isLoading, setIsLoading] = useState(false);


    const data = [
        {
            id: 1,
            question: "What specific services do you offer?",
            paragraph: "Our IT service company offers a comprehensive range of services, including website and app development, custom software development, branding solutions, and more, tailored to meet your business needs."
        },
        {
            id: 2,
            question: "What other services do you offer?",
            paragraph: "In addition to website and app development, custom software development, and branding solutions, we provide IT consulting, digital marketing, cloud solutions, and cybersecurity services to support your business growth and success."
        },
        {
            id: 3,
            question: "What do you build your websites with?",
            paragraph: "We build our websites and apps using the latest technologies and a robust toolstack, ensuring high-performance, user-friendly interfaces, and seamless user experiences that align with your business objectives and brand identity."
        },
        {
            id: 4,
            question: "What auxiliary toolstack do you use?",
            paragraph: "We leverage a variety of auxiliary tools such as React, Angular, Vue.js, Node.js, and Django, complementing our primary toolstack, to deliver exceptional results in website, app, and custom software development, and branding projects."
        }, 
        {
            id: 5,
            question: "Ensuring custom software security and scalability?",
            paragraph: "We implement stringent security protocols, conduct regular code reviews, and perform thorough testing to ensure custom software's security. Additionally, we design scalable architectures to meet clients' evolving needs and growth requirements."
        }

    ]


    const data1 = [
        {
            id: 6,
            question: "How much does a project cost?",
            paragraph: "The cost of a project varies based on specific requirements and the project timeline. We provide customized quotes to ensure you get accurate pricing aligned with your unique needs."
        },
        {
            id: 7,
            question: "How long does a project take?",
            paragraph: "The project duration depends on its complexity and scope. We strive to provide realistic timelines that ensure high-quality deliverables, meeting your expectations and business objectives efficiently."
        },
        {
            id: 8,
            question: "How does payment work for a project?",
            paragraph: "We offer flexible payment options tailored to your project. Typically, a deposit is required upfront, followed by milestone payments as we progress. Our team will discuss details during project initiation."
        },
        {
            id: 9,
            question: "Do you work internationally?",
            paragraph: "Yes, we work with clients internationally, offering our IT services, including website and app development, custom software development, branding, and more, to businesses worldwide."
        }, {
            id: 10,
            question: "Do you offer discounts?",
            paragraph: "We offer discounts on a case-by-case basis, taking into account project scope and requirements. Our goal is to provide competitive and fair pricing while delivering exceptional value and quality."
        }

    ]

    const data2 = [
        {
            id: 11,
            question: "Ensuring project details' confidentiality and security?",
            paragraph: "Rest assured, we prioritize the confidentiality and security of your project details. We implement robust data protection measures and adhere to strict privacy protocols to safeguard your sensitive information at all times."
        },
        {
            id: 12,
            question: "Past clients' references for web/app development?",
            paragraph: "As a new company, we are yet to have past clients. However, we are committed to providing excellent web/app development services, and we welcome your trust and support as we grow."
        },
        {
            id: 13,
            question: "What differentiates us in customer satisfaction?",
            paragraph: "We stand out in customer satisfaction by prioritizing personalized solutions, seamless communication, transparent processes, and a dedicated team, ensuring your unique needs are met with excellence and a delightful experience."
        },
        {
            id: 14,
            question: "Handling unexpected challenges and delays efficiently?",
            paragraph: "We tackle unexpected challenges and delays with efficiency and agility, swiftly finding effective solutions to keep projects on track and delivering high-quality results within agreed timelines."
        }, {
            id: 15,
            question: "Ensuring constant communication during development process?",
            paragraph: "We maintain open lines of communication throughout the development process, providing regular updates, progress reports, and promptly addressing any questions or concerns, ensuring a collaborative and transparent partnership."
        }

    ]

    const showContent = (buttonData) => {
        if (buttonData === "service") {
            setState(data)
        } else if (buttonData === "pricing") {
            setState(data1)
        } else {
            setState(data2)
        }
        setButtonData(buttonData)
        setIsLoading(true);
        if (buttonData) {
            setTimeout(() => {
                setIsLoading(false);
            }, 0);
        }

        setShoeService(false)
    }
    useEffect(() => {
        setState(data)
        setShoeService(true)
    }, [])


    return (
        <>
            <div className='xl:px-[210px] md:px-[140px] sm:px-[100px] vsm:px-[12px] px-[7px] ' id='faqs'>
                <hr className="h-px  bg-gray-900 bg-gradient-to-r from-[#0b011d]  via-[#3e2f5b] to-[#0b011d]  border-0 "/>
                <div className='pt-20 flex flex-col items-center justify-center'>
                    <h1 className='font-interV lg:text-[88px] md:text-[80px] sm:text-[70px] text-[50px] bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent'>FAQs</h1>
                    <p className='font-interV md:text-xl text-base text-[#b5abcb]'>Things we often get asked.</p>
                    <div className='flex md:flex-row flex-col gap-6 pt-14'>

                        <button type='button'
                            className={
                                `font-interV  text-white   rounded-[50px] lg:py-4 py-3 lg:px-10 px-8 lg:text-lg text-base
                          md:w-48 sm:w-[400px] vsm:w-[360px] w-[290px] leading-tight bg-[#150b26]  ${
                                    buttonData === "service" || showService == true ? "border border-[#bd9fff]" : "hover:border hover:border-[#47454b]"
                                }`
                            }

                            onClick={
                                () => showContent("service")
                        }>
                            Service & Toolstack
                        </button>
                        <button type='button'
                            className={
                                `font-interV  text-white hover:border  hover:border-[#47454b] rounded-[50px] lg:py-4 py-3 lg:px-10 px-8 lg:text-lg text-base
                          md:w-48 sm:w-[400px] vsm:w-[360px] w-[290px] leading-tight bg-[#150b26]   ${
                                    buttonData === "pricing" ? "border border-[#bd9fff]" : "hover:border hover:border-[#47454b]"
                                }  `
                            }

                            onClick={
                                () => showContent("pricing")
                        }>
                            Pricing & Timescale
                        </button>
                        <button type='button'
                            className={
                                `font-interV  text-white  rounded-[50px] lg:py-4 py-3 lg:px-10 px-8 lg:text-lg text-base
                          md:w-48 sm:w-[400px] vsm:w-[360px] w-[290px] leading-tight bg-[#150b26]   ${
                                    buttonData === "honest" ? "border border-[#bd9fff]" : "hover:border hover:border-[#47454b]"
                                } `
                            }

                            onClick={
                                () => showContent("honest")
                        }>
                            Honest & Personal
                        </button>
                    </div>
                </div>
                <motion.div initial={
                        {opacity: 0}
                    }
                    // Step 1: Set initial opacity to 0
                    animate={
                        {
                            opacity: isLoading ? 0 : 1
                        }
                    }
                    // Step 2: Animate opacity to 0 when isLoading is true, 1 otherwise
                    exit={
                        {opacity: 0}
                    }
                    transition={
                        {
                            duration: 0.5,
                            delay: 1
                        }
                    }
                    className='flex justify-center pt-10 mb-32'>
                    {/* {isLoading ? null :  */}
                    <Service state={state}/>
                     {/* //    }  */} </motion.div>
            </div>
        </>
    )
}

export default Faqs
