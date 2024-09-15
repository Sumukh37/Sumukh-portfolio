import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Sumukh's_portfolio.jpg"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 1, delay:delay}
    }
})

const container1 = (delay) => ({
    hidden: { x: 100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 1, delay:delay}
    }
})

const Hero = () => {
  return <div className="border-neutral-900 pb-4 lg:mb-35 d-flex">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div 
            className="d-flex flex-col mx-16 lg:items-start">
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                whileInView="visible"
                className="d-flex pb-16 text-6xl font-thin tracking-tight lg:mt-8 lg:text-8xl">
                    Sumukh K J
                </motion.h1>
                <motion.span 
                variants={container(0.5)}
                initial="hidden"
                whileInView="visible"
                style={{ display: "inline-block" }}
                className="bg-gradient-to-r from-orange-500 via-white to-green-700 bg-clip-text text-3xl tracking-tight text-transparent">
                    Software Developer
                </motion.span>
                <motion.p 
                variants={container(1)}
                initial="hidden"
                whileInView="visible"
                className="max-w-xl py-6 font-light text-justify tracking-tighter">
                    {HERO_CONTENT}
                </motion.p>
            </div>
        </div>
        <div className="mx-16" style={{ marginLeft: '70px' }}></div>
        <div className="mx-16 lg:w-1/4 lg:p-8">
            <div className="d-flex justify-center">
                <motion.img 
                variants={container1(1.25)}
                initial="hidden"
                whileInView="visible"
                src={profilePic} 
                className="rounded-2xl" 
                alt="Profile Pic" 
                />
            </div>
        </div>
    </div>
  </div>
  
};

export default Hero
