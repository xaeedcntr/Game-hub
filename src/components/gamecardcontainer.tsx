import { Box } from "@chakra-ui/react"
import { propContainer } from "../Interfaces/Reuseable"
const Gamecardcontainer = ({children}:propContainer) => {
  return (
    <Box borderRadius={10} overflow={"hidden"}>
{children}
    </Box>
  )
}

export default Gamecardcontainer