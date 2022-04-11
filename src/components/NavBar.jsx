import React from 'react'

import {HStack, IconButton} from "@chakra-ui/react"
import {AiFillHome, AiFillFire, AiOutlineAliwangwang, AiOutlineHeart, AiTwotoneCrown} from "react-icons/ai"
import {motion} from "framer-motion"


function NavBar() {
    const MotionIconButton = motion(IconButton)
  return (
    <HStack display="flex" justifyContent="center" marginTop="50px" spacing="30px">
        <MotionIconButton icon={<AiFillHome />} size="lg" whileHover={{scale:1.5}} />
        <MotionIconButton icon={<AiFillFire />} size="lg"  whileHover={{scale:1.5}}/>
        <MotionIconButton icon={<AiOutlineAliwangwang />} size="lg" whileHover={{scale:1.5}} />
        <MotionIconButton icon={<AiOutlineHeart/>} size="lg" whileHover={{scale:1.5}} />
        <MotionIconButton icon={<AiTwotoneCrown />} size="lg" whileHover={{scale:1.5}} />
    </HStack>
  )
}

export default NavBar