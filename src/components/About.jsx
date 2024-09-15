import aboutMe from "../assets/About_me.jpg"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"

const About = () => {
  return <div className="pb-4">
      <motion.h1 
      whileInView={{ opacity: 1, y:0 }}
      initial={{ opacity:0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="mx-16 flex flex-wrap">
        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity:0, x: -100}}
        transition={{ duration: 1 }}
        >
            <div className="flex items-center justify-center">
                <img className="rounded-2xl mx-12" style={{ width: '400px', height: 'auto' }} src={aboutMe} alt="About me" />
            </div>
        </motion.div>
        <motion.div 
        whileInView={{ opacity: 1, x: 0}}
        initial={{ opacity: 0, x: 100}}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 lg:p-20 mx-16">
                <div className="flex justify-center lg:justify-start text-justify">
                    <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                </div>
            </motion.div>
      </div>
    </div>
}

export default About
