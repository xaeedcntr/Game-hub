import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";
import Gamecardcontainer from "./gamecardcontainer";
import { Sgener } from "../Interfaces/Reuseable";

function GameGrid({gameQuery}:Sgener) {
  const { data, error ,isLoading} = useGames(gameQuery);
  const skeletons=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading && skeletons.map(skeleton=><Gamecardcontainer key={skeleton}><GameCardSkelton /></Gamecardcontainer>)}
        {data.map((game) => (
          <Gamecardcontainer key={game.id}>  <GameCard key={game.id} game={game}></GameCard></Gamecardcontainer>
        
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
