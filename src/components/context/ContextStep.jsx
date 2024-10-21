import React, {useEffect, useState} from 'react'
import App from '../../App'
import axios from 'axios';

export const multiStepContext = React.createContext();

const ContextStep = () => {

    const [currentStep, setStep] = useState(0);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);
    const [isEmailValid, setEmailValid] = useState(false);

   


    function submitData() {
        setFinalData(finalData => [
            ...finalData,
            userData
        ])
    }

    useEffect(() => {
        const data = {
            Website_Development: finalData[0] ?. Website_Development || finalData[0] ?. Design_Brand_Animatioin || finalData[0] ?. Copywriting_Storytelling || finalData[0] ?. other,
            Company_Age: finalData[0] ?. Company_Age,
            Time_Frame: finalData[0] ?. Time_Frame,
            Long_Term_Partnership: finalData[0] ?. Long_Term_Partnership,
            Company_or_Projectname: finalData[0] ?. Company_or_Projectname,
            Your_position: finalData[0] ?. Your_position,
            Website_URL: finalData[0] ?. Website_URL,
            Email: finalData[0] ?. Email,
            Project_Requirements: finalData[0] ?. Project_Requirements
        }

        // console.log("data",data);

        if (finalData.length !== 0 ) {
            axios.post("https://sheet.best/api/sheets/9b6b8964-ed1b-415c-9b68-cb2ab3584c6b", data).then((response) => {
                // console.log(response);
                setUserData('')
                setStep(cur => cur + 1)
            })
        }


    }, [finalData])

    // console.log("finalData", finalData[0]?.Company_Age);
    // console.log("position ceo---",finalData[0]?.Your_position);
    // console.log("website url---",finalData[0]?.Website_URL);


    return (

        <div>
            <multiStepContext.Provider value={
                {
                    currentStep,
                    setStep,
                    userData,
                    setUserData,
                    finalData,
                    setFinalData,
                    isEmailValid,
                    setEmailValid,
                    submitData
                }
            }>
                <App/>
            </multiStepContext.Provider>
        </div>
    )
}

export default ContextStep
