import React, {Fragment, useCallback} from 'react'
import {loadSlim} from "tsparticles-slim";
import ZESDROLOGO2 from "../../../assets/zesdro/ZESDROLOGO2.png"
import blackhole from "../../../assets/gif/blackhole.gif"
import  { motion  } from "framer-motion"
import ZESDROLOGOedited from "../../../assets/logo/ZESDROLOGOedited.svg"
import image from "../../../assets/logo/image.png"
import divhero_bg from "../../../assets/logo/divhero_bg.png"
import Particles from 'react-tsparticles';

const LogoPage1 = () => {

    const particlesInit = useCallback(async engine => { // console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // await console.log(container);
    }, []);

    return (
        <Fragment>
            <div className=' xl:h-[673px] lg:h-[650px] md:h-[590px] sm:h-[475px] h-[420px] pb-1 flex flex-col justify-center items-center gap z-50 ' id="logo">
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        // value: "#0d47a1",
                    },
                },
                fullScreen: {
                    enable: false,
                    zIndex: 0
                  },
                
                fpsLimit: 120,
                interactivity: {
                    
                    detect_on: "canvas",
                    events: {
                      onhover: {
                        enable: true,
                        mode: "bubble"
                      },
                      onclick: {
                        enable: true,
                        mode: "push"
                      },
                      resize: true
                    },
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                          opacity: 1
                        }
                      },
                      bubble: {
                        distance: 83.91608391608392,
                        size: 1,
                        duration: 3,
                        opacity: 1,
                        speed: 3
                      },
                      repulse: {
                        distance: 200,
                        duration: 0.4
                      },
                },

               particles: {
    number: {
      value: 355,
      density: {
        enable: true,
        value_area: 789.1476416322727
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
    sr: "img/github.svg",
    widt: 100,
    heigh: 100
      }
    },
    opacity: {
      value: 0.48927153781200905,
      random: false,
      anim: {
        enable: true,
        speed: 0.2,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
                detectRetina: true,
            }}
        />

{/* <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        // value: "#0d47a1",
                    },
                },
                fullScreen: {
                  enable: false,
                  zIndex: 0
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "split",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        /> */}
          
                <div className='z-50  '>
                    
                    <div className='absolute top-0 bg-transparent cursor-poinr left-0'>
                        <img className=' lg:h-[600px] md:h-[500px] sm:h-[400px] vsm:h-[300px] h-[200px]  sm:block hidden '
                             src="https://uploads-ssl.webflow.com/63c6b6a8e34f347803dc4c5a/63d279fb46be2a0d42ddba36_Lights%20(7)%20(1).png"
                            alt=""/>
                    </div>
    
                         <div className='xl:w-[1200px] lg:w-[800px] md:w-[600px] sm:w-[500px] vsm:w-[350px] w-[300px] md:mt-auto -mt-32  absolute left-0  md:top-40 top-80 right-0 m-auto overflow-hidden'>
                            <img className=' ' src={ZESDROLOGOedited} alt="" />  
                        </div>
                        
                </div>

            </div>
        </Fragment>

    )
}

export default LogoPage1
