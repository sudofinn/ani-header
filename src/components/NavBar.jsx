import React, {useState}from 'react'

import {HStack, IconButton} from "@chakra-ui/react"
import {AiFillHome, AiFillFire, AiOutlineAliwangwang, AiOutlineHeart, AiTwotoneCrown} from "react-icons/ai"
import {motion} from "framer-motion"


function NavBar() {
    const MotionIconButton = motion(IconButton)
    const MotionHStack = motion(HStack)



  return (
    <MotionHStack display="flex" justifyContent="center" marginTop="80px" spacing="30px"
    animate={{y:[0, 80, 50]}}
    >
        <MotionIconButton icon={<AiFillHome />} size="lg" whileHover={{scale:1.5}}  
         
        />


        <MotionIconButton icon={<AiFillFire />} size="lg"  whileHover={{scale:1.5}}
         
        />

        <MotionIconButton icon={<AiOutlineAliwangwang />} size="lg" whileHover={{scale:1.5}}
         

        />
        <MotionIconButton icon={<AiOutlineHeart/>} size="lg" whileHover={{scale:1.5}} 
         

        />
        <MotionIconButton icon={<AiTwotoneCrown />} size="lg" whileHover={{scale:1.5}}
          
         />
    </MotionHStack>
  )
}

export default NavBar