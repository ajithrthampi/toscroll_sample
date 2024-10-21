import React, {useCallback} from 'react'
import LogoPage1 from '../components/homecontent/logopage/LogoPage1'
import Navbar from '../components/navbar/Navbar'
import WinningZesdro from '../components/homecontent/winning/WinningZesdro'
import Benifits from '../components/homecontent/benifits/Benifits'
import Process from '../components/homecontent/process/Process'
import Faqs from '../components/homecontent/faqs/Faqs'
import ProjectRequest from '../components/homecontent/projectRequest/ProjectRequest'
import ZesdroServices from '../components/homecontent/service/ZesdroServices'
import ParticleBackground from '../components/particle/ParticleBackground'
import Particles from 'react-tsparticles';
import {loadSlim} from "tsparticles-slim";


const Homepage = () => {

    const particlesInit = useCallback(async engine => { // console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <>
            <div>
                    <LogoPage1/>
                    <WinningZesdro/>
                        <ZesdroServices/>
                        <Benifits/>
                    <Process/>
                    <Faqs/>
                    <ProjectRequest/>

            </div>
            <div className='fixed bottom-6 z-50'>
                <Navbar/>
            </div>

        </>

    )
}

export default Homepage
