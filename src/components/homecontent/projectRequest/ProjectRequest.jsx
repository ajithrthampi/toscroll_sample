import React, {useContext, useState} from 'react'
import Request from './projectForm/Request'
import ServiceRequire from './projectForm/ServiceRequire'
import CompanyAge from './projectForm/CompanyAge'
import TimeFrame from './projectForm/TimeFrame'
import Budget from './projectForm/Budget'
import CompanyDetails from './projectForm/CompanyDetails'
import ProjectRequirement from './projectForm/ProjectRequirement'
import Contact from './projectForm/Contact'
import SuccessForm from './projectForm/SuccessForm'
import {useForm, FormProvider} from 'react-hook-form';
import {multiStepContext} from '../../context/ContextStep'
import { BsArrowLeftShort } from 'react-icons/bs';
import shade from "../../../assets/form/shade.png"

const ProjectRequest = () => {

    let max = 5;

    const [formStep, setFormStep, ] = useState(0)

    const {
        currentStep,
        finalData,
        setStep,
        userData,
        setUserData,
        isEmailValid ,
        submitData
    } = useContext(multiStepContext)

    const completeFormStep = (e) => {
        e.preventDefault();
        if (isEmailValid) {
          setStep((cur) => cur + 1);
        } else {
          // Handle validation error, e.g., show an error message
          alert('Please fill in a valid email address before proceeding.');
        }
      };

    // const submitData1 = (e) => {
    //     e.preventDefault()

    //     setStep(cur => cur + 1)
    // }

    const handleNextClick = (e) => {
        e.preventDefault()
        // Your logic to move to the next step
        setStep((prevStep) => prevStep + 1);
      };

    const renderButton = (step) => {
        if (step > 5) {
            return undefined
        } else if (step === 5) {
            return (
                <button
                    onClick={submitData}
                    type='button'
                    className={` py-1.5 px-10 rounded-3xl absolute bottom-16 
       
                     text-lg text-white  bg-[#211434]`}>
                    Submit
                </button>
            )
        } 
          else if (step===4){
            return (
                        <button onClick={completeFormStep}
                            className={` py-1.5 px-10 rounded-3xl absolute bottom-16 hover:bg-[#432c65] text-lg text-white  bg-[#211434]`}>
                            Next
                        </button>
                    )
          }

        else {
            return (
                <button onClick={handleNextClick}
                    className={` py-1.5 px-10 rounded-3xl absolute bottom-16 hover:bg-[#432c65] text-lg text-white  bg-[#211434]`}>
                    Next
                </button>
            )
        }
    }

    const backButton = () => {
        if (currentStep < 1) {
            return undefined
        } else if (currentStep > 5) {
            return undefined
        } else {
            return (
                <div className='absolute bottom-5 left-7'>
                    <h1 className='text-[#7a6f90] font-interV cursor- flex items-center cursor-pointer'
                        onClick={backCurrentStep}><span><BsArrowLeftShort size={25} /></span> Back</h1>
                </div>
            )
        }
    }

    const backCurrentStep = () => {
        setStep(cur => cur - 1)
    }


    const showFormContent = (step) => {
        switch (step) {
            case 0:
                return <div>
                    <Request/></div>
            case 1:
                return <div>
                    <ServiceRequire/>
                </div>
            case 2:
                return <CompanyAge/>
            case 3:
                return <TimeFrame/>
            case 4:
                return <CompanyDetails/>
            case 5:
                return <ProjectRequirement/>
            case 6:
                return <SuccessForm/>
        }
    }

    return (
        <div className='xl:px-[210px] md:px-[140px] sm:px-[100px] vsm:px-[12px] px-[7px] pb-[100px] 'id="contact">
            <hr className="h-px  bg-gray-900 bg-gradient-to-r from-[#0b011d]  via-[#3e2f5b] to-[#0b011d]  border-0 "/>
            <div className='flex flex-col justify-center items-center pt-20'>
            <h1 className='bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent md:text-[88px] sm:text-[70px] vsm:text-[40px] text-[40px]  font-interV font-medium text-center leading-tight '>Project Request</h1>
                <p className='font-interV md:text-xl text-base text-[#b5abcb]'>
                    Things we often get asked.
                </p>
            </div>
            <div>
                <form className='flex justify-center items-center pt-16'>
                   
                    <div className='w-full h-ful rounded-3xl max-w-[745px] sm:h-[655px] h-[600px] relative overflow-hidden'
                        style={{border: " 1px solid rgb(48,35,74)"}}
                    >
                        <img className='absolute top-0 ' src={shade} alt="" />
                        <div className='flex flex-col justify-center items-center space-y-'>
                            {
                            showFormContent(currentStep)
                        }
                            {
                            renderButton(currentStep)
                        }
                            {
                            currentStep < 6 && currentStep > 0 && <div className='absolute bottom-6'>
                                <p className=' font-interV  text-[#b5abcb]'>
                                    {currentStep}/{max}</p>
                            </div>
                        }
                            {
                            backButton()
                        } </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default ProjectRequest
