'use client'

import { motion, spring } from "framer-motion";
import { useState } from "react";
import NavigationBar from "@/app/components/navbar";

export default function TestMe(){





  return(
    <>

      <NavigationBar page="Framer" />
      <div 
        className='flex flex-col justify-center items-center pt-14 text-white'>
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

            <Separator/>
                                    
            <DraggableElement/>

            <Separator/>

            <VariantsMotion/>
          </div>
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
  

  const [switch1,activateSwitch1]=useState("homepage");
  //plus also make on each button click redirect to said page.


  return(
    <div className="flex border rounded-xl">
      
      <div>

        
      <motion.div 
        data-switch={switch1} //based on the useState we get the position of the background (flex start or end)
        //I couldn't make it not be a seperate bg from the button elements. I initially had in mind changnig the bg
        // of each button element on the corresponding click, but I couldn't animate it that way..
        // maybe if I could animate the position of the background only (and not text)
        // I could achieve a similar effect by starting the bg offset towards the other button
        
        className="w-20 h-0 flex data-[switch=hi2]:justify-end data-[switch=hi1]:justify-start "
        transition={{type:spring}}>
          <motion.div layout className="bg-neutral-800 w-10 h-8 rounded-xl -z-10 "/>
        </motion.div>

        
        <button
        data-switch={switch1}
        className="px-2 py-1  rounded-xl" //data-[switch=hi1]:bg-neutral-400 didn't manage to make it work
        onClick={()=>{activateSwitch1("hi1")}}
        >
          hi1
        </button>


        <button 
        data-switch={switch1}
        className="px-2 py-1  rounded-xl" //data-[switch=hi2]:bg-neutral-400
        onClick={()=>{activateSwitch1("hi2")}}
        >
          hi2
        </button>


      </div>

      
    </div>
  )

}

const DraggableElement = () =>{
  return(
    <>

      <motion.button
      className="border rounded-lg p-1 px-2 bg-gradient-to-b from-purple-900 to-black"
      drag={true}
      dragConstraints={{left:-17,right:17,top:-9,bottom:9}}
      >
        this is draggable
      </motion.button>
    </>
  )
}

const VariantsMotion = () => {

  const container = {
    hidden:{opacity:1,scale:0},
    visible:{
      opacity:1,
      scale:1,
      transition: {
        delayChildren:0.3,
        staggerChildren: 0.2  
      }

    }
  }
  const item ={
    hidden: {y:20, opacity:0},
    visible: {y:0, opacity:1}
  }

  return(
    <>
      <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="h-14 w-14 border-2 border-white rounded-lg grid grid-cols-2 gap-1 place-items-center bg-gray-900"
      >
        {[0,1,2,3].map(index=>(
          <motion.div key="item" 
          className="h-5 w-5 border  bg-white rounded-full  "
          variants={item}/>
          ))}
      </motion.div>    
    </>
  )
}