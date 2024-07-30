import {HERO_CONTENT} from "../constants/";
import profilePic from "../assets/anshulPic.jpg"
import { motion } from "framer-motion"
function Hero() {
    return (
        <div className="px-4 md:px-8 border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 initial={{ x: -100, opacity:0 }} animate={{x:0, opacity:100}} transition={{duration:0.5, delay:1}} className="pb-8 text-4xl font-thick tracking-tight lg:mt-8 lg:text-6xl">Anshul Sharma</motion.h1>
                        <span  className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
                            Full Stack Developer
                        </span>
                        <p className="my-2 max-w-xl py-6 feont-light tarcking-tighter">{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img initial={{ x: 100, opacity:0 }} animate={{x:0, opacity:100}} transition={{duration:0.5, delay:1}} src={profilePic} alt="Anshul Sharma" width={320} height={320}></motion.img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero