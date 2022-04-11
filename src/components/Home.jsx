import React from 'react'
import {Heading} from "@chakra-ui/react"
import {motion} from "framer-motion"

function Home() {
    const MotionHeading = motion(Heading)
  return (
    <MotionHeading fontSize="6xl" display="flex" justifyContent="center" marginTop="10px" backgroundColor="#fff"bgClip="text"
     animate={{y:[0, 60, 50] }} 
     
     transition={{ ease: "easeOut", duration: 1 }}
     whileHover={{scale:1.5}}
     
    
    >Inspire us</MotionHeading>

  )
}

export default Home