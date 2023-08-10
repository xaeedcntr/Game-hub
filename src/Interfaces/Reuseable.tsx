import {ReactNode} from 'react'

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface sortProps{
  onSelectedSortOrder:(sortOrder : string)=> void;
  sortOrder:string
}

export interface selectedGenre{
  onSelectgenre:(genre:Genre)=>void
  selectedGenre: Genre |null
}

export interface platform{
  id:number;
  name:string;
  slug:string;
}


export interface Sgener{
 
  gameQuery:Gamequery
}

export interface propscore {
  score: number;
}

export interface Genre{
  id:number;
  name:string;
  image_background:string;
}

export interface FetchData<T>{
  count:number;
  results:T[];
}

export interface props2 {
  platforms: Platform[];
}

export interface propContainer{
    children:ReactNode
}

export interface emojiProps{
  rating:number;
}


export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top:number;
}

export interface props {
  game: Game;
}

export interface selectedPlatform{
  onSelectPlatform:(platform:Platform)=>void
  selectedPlatform:Platform|null
}

export interface Gamequery{
  genre:Genre|null;
  platform:Platform|null;
  sortOrder:string;
  searchtext:string;

}

export interface searchProps{
  onSearch:(searchText:string)=>void;
}

