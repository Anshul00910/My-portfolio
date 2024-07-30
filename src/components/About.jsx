import { motion } from "framer-motion"
import {ABOUT_TEXT} from "../constants/";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About  
            <span className="text-neutral-500">Me</span>
        </h1>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1,x:0}} initial={{ opacity:0,x:-100 }} transition={{duration:1, delay:1}} className="w-full">
                <div className="flex justify-center lg:justify-center">
                    <p className="my-4 max-w-xl">
                        {ABOUT_TEXT}
                    </p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About