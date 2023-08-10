import { HStack, Icon, Text } from "@chakra-ui/react"
import { props2 } from "../Interfaces/Reuseable"
import { IconType } from "react-icons/lib/esm/iconBase"
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'

const Platformicons = ({platforms}:props2) => {

    const iconMap:{[key:string]:IconType}={
        pc:FaWindows,
        playstation:FaPlaystation,
        xbox:FaXbox,
        nintendo:SiNintendo,
        mac:FaApple,
        linux:FaLinux,
        ios:MdPhoneIphone,
        web:BsGlobe,
        android:FaAndroid
    }

  return (
    <HStack marginY={2}>
          {platforms.map((platform)=><Icon key={platform.id} color="gray.500" as={iconMap[platform.slug]}/>)}
    </HStack>
   
  )

}

export default Platformicons