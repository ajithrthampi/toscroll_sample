import {useEffect, useState} from 'react'
import Homepage from './pages/Homepage'
import ClipLoader from "react-spinners/ClipLoader";
import svglogoIcon from "./assets/svg/svglogoIcon.svg"
import {motion, spring} from "framer-motion"
import splash from "./assets/splash/splash.gif"
import ParticleBackground from './components/particle/ParticleBackground';
import logoo from "./assets/logo.png"

function App() {

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },0);
    }, [])

    return (
        <> {
            loading ? <div className='  flex justify-center h-screen items-center flex-col relative'>
              <img className=' lg:h-full sm:h-auto bg-red-5' src={splash} alt="" />
              <motion.h1 
               initial={{ opacity: 1 }} // Initial styles when element enters
               animate={{ opacity: 0 }} // Animation when element is visible 
               exit={{ opacity: 0 }}
               transition={{delay:5}}   // Animation when element is exiting
              className='absolute bottom-36 text-[#776d89] font-interV  text-xl'>
                Welcome to
              </motion.h1>
              <motion.p
                initial={{ opacity: 1 }} // Initial styles when element enters
                animate={{ opacity: 0 }} // Animation when element is visible
                exit={{ opacity: 0 }}
                transition={{delay:5}}   // Animation when element is exiting
              className='bg-clip-text bg-gradient-to-br from-white via-[#bbb8c0] to-[#bbb8c0] text-transparent  font-interV text-4xl absolute bottom-24 tracking-widest'>
                <img className='w-36' src={logoo} alt="" />
              </motion.p>
            </div> : <div>
                <Homepage/>
            </div>
        } </>
    )
}

export default App
