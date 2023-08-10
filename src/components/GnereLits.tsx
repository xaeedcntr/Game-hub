import { Button, HStack, Heading, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGeners from "../Hooks/useGnere";
import getCroppedImageurl from "../Services/imageurl";
import { selectedGenre } from "../Interfaces/Reuseable";


const GnereLits = ({onSelectgenre, selectedGenre}:selectedGenre) => {
    const {data, isLoading, error}=useGeners();
    if(isLoading)
    {
      return <Spinner/>
    }
    if(error) {
      return null;
    }
  return (
  <>
  <Heading fontSize='2xl' marginBottom={3} >Genres</Heading>
  <List>
    {data.map(gener=><ListItem paddingY='5px' key={gener.id}>
      <HStack>
        
        <Image objectFit='cover' boxSize='30px' borderRadius={8} src={getCroppedImageurl(gener.image_background)}></Image>
       <Button textAlign='left' whiteSpace='normal' fontWeight={gener.id===selectedGenre?.id ? 'bold':'normal'} onClick={()=>onSelectgenre(gener)} variant={"ghost"} fontSize={"lg"}>{gener.name}</Button>
      </HStack>
    </ListItem>)}
  </List>
  </>
  )
}

export default GnereLits