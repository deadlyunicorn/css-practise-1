'use client'

import { motion } from "framer-motion"

const FooterListItem = (props:{content:string}) => (
  <motion.div
    whileHover={{
      x:-2,
      //scale:1.1
    }}>
    <li className='hover:text-white w-fit text-sm'><a href="#">{props.content}</a></li>
  </motion.div>
)

export default FooterListItem;