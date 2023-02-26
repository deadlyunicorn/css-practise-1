'use client'

import { motion } from "framer-motion";
import Link from "next/link";


const PageSelect = (props:{page:string})=>(
  <div id="box" className='border   border-gray-600 rounded-lg  text-md'>

    <motion.div className="flex"
    
    >


          <motion.div 
            data-page={props.page}
            className='data-[page="repo"]:bg-neutral-700 rounded-md my-1 mx-1'
            initial={{scale:0.3,x:65}}
            animate={{scale:1,x:0}}
            
            transition={{
              type: "spring",
              damping:9,
              bounce:0.5,
              stiffness:50,
              mass:0.2,
              velocity:5,
            }}
            
            >
              <Link href='/repo' className="hover:text-white active:text-white  text-gray-400  rounded-md px-2  ">
                      Repo
              </Link>
          </motion.div>

          <motion.div 
            data-page={props.page}
            className='data-[page="pack"]:bg-neutral-700 rounded-md my-1 mx-1'
            initial={{scale:0.3,x:-65}}
            animate={{scale:1,x:0}}
            transition={{
              type: "spring",
              damping:9,
              bounce:0.5,
              stiffness:200,
              mass:0.2,
              velocity:5,
            }}
            >
              <Link href='/pack' className="hover:text-white active:text-white  text-gray-400  rounded-md px-2  ">
                Pack
              </Link>
          </motion.div>


      
    </motion.div>

</div>
)

export default PageSelect;



//     <motion.div 
//     layout 
//     className="bg-white h-6 w-6 rounded-full" 
//     transition={{  
//       type: "spring",
//       damping:15,
//       bounce:0.5,
//       stiffness:200,
//       mass:0.2,
//       velocity:5,
//     }}/>
//   </motion.div>
//   )
// }