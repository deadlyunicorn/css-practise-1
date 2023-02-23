'use client'

import { motion } from "framer-motion";
import { useState } from "react";

export default function TestMe(){


  return(
    <>
      <div className="border p-2 rounded-lg flex flex-col items-center w-44">

          <BlackHole/>

          <Separator/>
          
          <Colourful4D/>

          <Separator/>


          <div className="flex">
            <RedGreenButton content="hello"/>
            <RedGreenButton content="bye"/>
          </div>


                                    {/* 
                                      <div className="text-center">
                                          for the following I got insights <br/> from:&nbsp;
                                          <a href="https://pocket.tailwindui.com" className="text-blue-300 hover:text-blue-500 hover:underline">here</a>
                                      </div>
                                    <div className="border-b w-full my-2"></div>
                                    then i realized it's paid content:(
                                    */}
          <Separator/>

          <MagicSwitch/>
          
          <Separator/>

          <SelectedButton/>
          
          
      </div>
    </>

  )
}

const Separator = () => (<div className="border-b w-full my-2"></div>);


const BlackHole = () =>(
    <motion.div
    className="bg-black h-10 w-10 border-4 border-white rounded-full items-center"
    initial={{opacity:0,scale:0.5}}
    animate={{opacity:1,scale:1,}}
    transition={{duration:2,
    //  repeat:Infinity
    }}
  />
);

const Colourful4D = () =>(
    <motion.div 
      className=" h-10 w-10 opacity-0"
      animate={{
        
        backgroundColor:["#00ff00","#0f00ff","#ff00ff","#00ff00"],
        transition:{
          //repeat:Infinity,
          ease:[1,0.7,0.1,0.45],
          duration:4,
        },
        opacity:[0,1,1,1],
        scale:[0.5,0.7,1,0.5],
        rotate:[0,20,90,360],
        borderRadius:["20%","40%","70%","20%"],
        
      }}
    />
);


const RedGreenButton=(props: { content: string})=>(
    <motion.button
    className=" px-2 py-1 rounded-md mx-1"
    variants={{

      active:{
        backgroundColor: '#ff0000',
      },
      inactive:{
        backgroundColor: '#00ff00'
      }
    }}
    animate="active"
    whileFocus="inactive"
    whileTap="inactive">
      {props.content}
    </motion.button>
);

const MagicSwitch = () =>{ 
  
  const [button1State,setButton1]= useState(true)
  
  return(
  <motion.button
  
    data-justify={button1State} 
    className="w-16 bg-red-300 rounded-full bg-opacity-75 flex items-center p-1 justify-start data-[justify=false]:justify-end cursor-pointer"
            //data-justify
            //data -> keyword for tailwind selectors? -[name]
    animate={{backgroundColor:["#ff0000","#00ff00"]}}
    transition={{repeat:Infinity,duration:2,repeatType:"reverse"}}
    onClick={()=>{setButton1(!button1State)}}

  >
    <motion.div 
    layout 
    className="bg-white h-6 w-6 rounded-full" 
    transition={{  
      type: "spring",
      damping:15,
      bounce:0.5,
      stiffness:200,
      mass:0.2,
      velocity:20,
    }}/>
  </motion.button>
  )
}

const SelectedButton = () =>{
//useStates

return(
  <div className="flex border rounded-xl ">

    <motion.button className="px-2 py-1  "
    layout
    onClick={()=>{
      //states
    }}
    
    >
      hi1
    </motion.button>
    <button className="px-2 py-1  ">
      hi2
    </button>
  </div>
)

}