import { HStack, Image, Text } from '@chakra-ui/react'

import logo from '../assets/pnghut_chess-rook-download-tree.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchBox from './SearchBox'
import { searchProps } from '../Interfaces/Reuseable'

 const Navbar=({onSearch}:searchProps)=>  {
 
    return (
      <>
      <HStack padding={'10px'} >
        <Image src={logo} boxSize='55px'></Image>
        <SearchBox onSearch={onSearch}/>
        <ColorModeSwitch/>
      </HStack>
      </>
    )
  
}

export default Navbar
