import React from 'react'
import { Button,Slide,Box, useDisclosure } from '@chakra-ui/react'
import {motion} from "framer-motion"


function SlideBottom() {
    const {isOpen, onToggle} = useDisclosure()
    const MotionButton = motion(Button)

  return (
      <div>
          <MotionButton colorScheme="blue" size="lg" variant="outline"  marginTop="150px" marginLeft="480px"
          animate={{y:[500, 80, 50] }} 
          transition={{ ease: "easeOut", duration: 1 }}
          whileHover={{scale:1.5}}

          onClick={onToggle} 
          >What is takes to get inspired</MotionButton>
          <Slide direction='bottom' in={isOpen} style={{zIndex:10}}>
            <Box
             p='25px'
            color='white'
            mt='4'
            bg='teal.500'
            rounded='md'
            shadow='md' 
            >
               “Most good programmers do programming not because they expect to get paid 
               or get adulation by the public, but because it is fun to program.” 

               “In open source, we feel strongly that to really do something well, you
                have to get a lot of people involved.”

                “There is innovation in Linux. There are some really good technical features that
                 I am proud of. There are capabilities in Linux that are not in other operating systems.”
                </Box> 
          </Slide>

      </div>
  )
}

export default SlideBottom