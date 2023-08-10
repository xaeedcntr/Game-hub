import { emojiProps } from "../Interfaces/Reuseable"
import thumb from '../assets/thumb.png'
import target from '../assets/target2.png'
import smily from '../assets/smily.png'
import { Image, ImageProps } from "@chakra-ui/react"

const Emoji = ({rating}:emojiProps) => {
    if(rating<3) return null;
    const emojimap:{[key:number]:ImageProps}={
        3:{src: smily, alt:'Happy'},
        4:{src: thumb, alt:'Thumbs up'},
        5:{src: target, alt:'on Target'}
    }
  return (
    <Image {...emojimap[rating]} boxSize='25px' />
  )
}

export default Emoji