import React from 'react'

import {IconButton} from "@chakra-ui/react"
import {useColorMode} from "@chakra-ui/react"

import {FaSun, FaMoon} from "react-icons/fa"

function Darkmode() {
    const {colorMode, toggleColorMode} = useColorMode()



  return (
    <IconButton float="right" marginRight="30px" position="relative" marginTop="-150px" 
      icon={colorMode === "light" ? <FaSun /> : <FaMoon/>}
      isRound="true"
      size="lg"
      onClick={toggleColorMode}>

      </IconButton>
  )
}

export default Darkmode