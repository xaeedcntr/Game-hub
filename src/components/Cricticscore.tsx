
import { propscore } from '../Interfaces/Reuseable'
import { Badge } from '@chakra-ui/react'

const Cricticscore = ({score}:propscore) => {
    let color=score>75 ? 'green' : score>60?'yellow':''
  return (
    <Badge colorScheme={color} fontSize='14px' paddingY={2} borderRadius='4px'>
        {score}
    </Badge>
  )
}

export default Cricticscore