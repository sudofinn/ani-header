import React, {useState}from 'react'

import {HStack, IconButton} from "@chakra-ui/react"
import {AiFillHome, AiFillFire, AiOutlineAliwangwang, AiOutlineHeart, AiTwotoneCrown} from "react-icons/ai"
import {motion} from "framer-motion"

import classes from "./NavBar.module.css"


function NavBar() {
    const MotionIconButton = motion(IconButton)
    const MotionHStack = motion(HStack)



  return (
    <MotionHStack display="flex" justifyContent="center" marginTop="80px" spacing="30px"
    animate={{y:[0, 100, 50]}} 
    >
        <MotionIconButton icon={<AiFillHome />} size="lg" whileHover={{scale:1.5}}  
         className={classes.general}
        />


        <MotionIconButton icon={<AiFillFire />} size="lg"  whileHover={{scale:1.5}}
         className={classes.general}
        />
         

        <MotionIconButton icon={<AiOutlineAliwangwang />} size="lg" whileHover={{scale:1.5}}
         className={classes.general}
        />
         

        <MotionIconButton icon={<AiOutlineHeart/>} size="lg" whileHover={{scale:1.5}} 
         className={classes.general}
        />
         

        <MotionIconButton icon={<AiTwotoneCrown />} size="lg" whileHover={{scale:1.5}}
         className={classes.general}
        />
          
    </MotionHStack>
  )
}

export default NavBar