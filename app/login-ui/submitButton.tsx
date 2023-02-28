'use client'
//import "@/app/login-ui/content.css"
import { useState } from "react"
import { motion } from "framer-motion"

const SubmitButt=()=>{
  const [email,setMail] = useState(false)
  const [pass,setPass] = useState(false)

  return(
  <form 
    className="text-center" 
    onSubmit={()=>{alert("Congrats!")}}>

    <div className="px-10  text-white"> 
      <motion.div
        data-state={email}
        className="data-[state=true]:justify-end flex"
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}>
              
        <div className="my-8"> 
          <motion.label
            data-state={email}
            className="
            before:absolute 
            before:-translate-y-0
            before:h-10 before:w-10
            text-md
            data-[state=true]:before:-translate-y-6
            before:content-['Email']
            before:-z-10
          "
          transition={{type:"spring"}}

          />
          <input required type={"email"} 
            onClick={()=>{setMail(!email)}}
            className="text-white placeholder:text-gray-200 h-10 rounded-sm bg-transparent border-b-2"/>

          <label
            data-state={email}
            className="before:absolute before:-translate-x-10 before:pt-1 before:h-10 before:w-10 text-xl"/>
        </div>

      </motion.div>

      <motion.div
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}>
        
        <div className="my-8"> 
          <motion.label
            data-state={pass}
            className="
            before:absolute 
            before:-translate-y-0
            before:h-10 before:w-10
            text-md
            data-[state=true]:before:-translate-y-6
            before:content-['Password']
            before:-z-10
          "/>
          
          <input required type={"password"} 
            onClick={()=>{setPass(true)}}
            className="text-white placeholder:text-gray-200 h-10 rounded-sm bg-transparent border-b-2"/>

          <label
            data-state={pass}
            className="before:absolute before:-translate-x-10 before:pt-1 before:h-10 before:w-10 text-xl"/>
        </div>
      </motion.div>

      <div className="flex justify-center items-center ">
        <input type="checkbox"/>
        <div className="m-2">
          Remember me
        </div>
      </div>
        
        <button className="bg-white h-10 w-full mb-10 rounded-full text-black">Log In</button>
    </div>
  
  </form>

)}

export default SubmitButt;


//Made the code too complicated + CSS too difficult to work with (Tailwind with vanilla..)
//
// const InputField = (props:{
//   placeholder:string,
//   type:string,
//   content:string,
//   setProperty:Dispatch<SetStateAction<boolean>>,
//   propertyState:boolean,

// }) => (
//   <div className="mb-3">
//       <motion.label
//         /// USEFUL
//           data-title={props.placeholder}
//           data-state={props.propertyState}
//           className="titleDisplay before:absolute before:-translate-y-9 before:h-10 before:w-10 text-xl 
//            data-[state=true]:before:-translate-y-0" //before:content-['hello']. When you add data-...=true it overrides the before:content set on the ./content.css file?
//           />
        
//     <input 
//       type={props.type} 
//       required 
//       onClick={()=>{props.setProperty(true)}}
//       className="text-white placeholder:text-gray-200 h-10 rounded-sm bg-transparent border-b-2"/>
      
      
//       <label
//       /// USEFUL
//         data-customContent={props.content}
//       ///
//         data-state={props.propertyState}
//         className="before:absolute before:-translate-x-10 before:pt-1 contentDisplay  before:h-10 before:w-10 text-xl"/>
//   </div>
// )




    //  <div className="mb-3"> 
    //   <motion.label
    //     className="before:absolute before:-translate-y-9 before:h-10 before:w-10 text-xl data-[state=true]:before:-translate-y-0"/>
      
    //   <input required type={} 
    //   onClick={()=>{setProperty(true)}
    //   className="text-white placeholder:text-gray-200 h-10 rounded-sm bg-transparent border-b-2"/>

    //   <label
    //     data-state={props.propertyState}
    //     className="before:absolute before:-translate-x-10 before:pt-1 before:h-10 before:w-10 text-xl"/>
    //  </div>