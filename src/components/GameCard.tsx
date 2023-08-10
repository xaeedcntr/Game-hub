import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { props } from "../Interfaces/Reuseable"
import Platformicons from "./platformicons"
import Cricticscore from "./Cricticscore"
import getCroppedImageurl from "../Services/imageurl"
import Emoji from "./Emoji"

const GameCard=({game}:props)=> {

  return (
    <Card >
        <Image src={getCroppedImageurl( game.background_image)}/>
       <CardBody>
        <HStack marginBottom={3} justifyContent='space-between'>
        <Platformicons platforms={game.parent_platforms.map(p=>p.platform)}/>
        <Cricticscore score={game.metacritic}/>
        </HStack>
        <Heading fontSize={'2xl'}>{game.name} <Emoji rating={game.rating_top} /></Heading>
       </CardBody>
    </Card>
  )

}

export default GameCard