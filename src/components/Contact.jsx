import {CONTACT} from "../constants";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h1 className="my-10 text-center text-4xl">Contact</h1>
        <div className="text-center tracking-tighter">
            <motion.p 
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:-100}}
              transition={{duration:1}}
              className="my-4">{CONTACT.Location}
            </motion.p>
            <motion.p
              whileInView={{opacity:1,x:0}}
              initial={{opacity:0,x:100}}
              transition={{duration:1}}
              className="my-4">{CONTACT.PhoneNo}
            </motion.p>
            <a href="#" className="border-b">{CONTACT.Email}</a>
        </div>
    </div>
  )
}
export default Contact;