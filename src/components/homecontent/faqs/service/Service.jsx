import React, {useState} from 'react'
import {BsPlusCircle} from 'react-icons/bs';
import {CiCircleMinus} from 'react-icons/ci';
import { motion } from 'framer-motion';

const Service = ({state}) => {

// console.log("state", state);
    const [stateShowPara, setStateShowPara] = useState([]);



    const showText = (id) => {
        setStateShowPara(prevState => {
          if (prevState.includes(id)) {
            // If the ID is already in the state array, remove it to hide the paragraph
            return prevState.filter(item => item !== id);
          } else {
            // If the ID is not in the state array, add it to show the paragraph
            return [...prevState, id];
          }
        });
      };



    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
       
        >
        <div className='flex flex-col gap-4  '>

          {state?.map((togglebar, index) => (
            <div
              className='py-3 rounded-[30px] px-5 bg-[#150b26] lg:w-[620px] md:w-[620px] sm:w-[400px] vsm:w-[359px] w-[290px] '
              style={{ border: '1px solid rgb(48, 45, 56)' }}
              key={togglebar?.id}
            >
              <div className='flex items-center justify-between  '>
                <h3 className='font-interV md:text-xl sm:text-base text-sm font-normal text-white'>{togglebar?.question}</h3>
                <div className='cursor-pointer text-[#9c95a9]' onClick={() => showText(togglebar?.id)}>
                  {stateShowPara.includes(togglebar?.id) ? (
                    <div className='text-2xl'>
                      <CiCircleMinus />
                    </div>
                  ) : (
                    <div className='text-xl'>
                      <BsPlusCircle />
                    </div>
                  )}
                </div>
              </div>
              {stateShowPara.includes(togglebar?.id) && (
                <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className=''
              >
                  <motion.p
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.3 }}
                  className='text-base font-interV text-[#9c95a9] lg:w-[500px] md:w-[550px] sm:w-[370px] vsm:w-[340px] pt-5'>{togglebar?.paragraph}</motion.p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    )
}

export default Service
