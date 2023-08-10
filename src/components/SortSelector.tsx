import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import { sortProps } from "../Interfaces/Reuseable"

const SortSelector = ({onSelectedSortOrder,sortOrder}:sortProps) => {

  const sortOrders = [
    {value:'',label:'Relevance'},
    {value:'-added',label:'Date Added'},
    {value:'name',label:'Name'},
    {value:'-released',label:'Release Date'},
    {value:'-metacritic',label:'Popularity'},
    {value:'-rating',label:'Averaeg Rating'}
  ]
const currentsortOrder=sortOrders.find(order=>order.value===sortOrder);


  return (
    <>
    
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
         Order by: {currentsortOrder?.label || 'Relevance'}
           
        </MenuButton>
        <MenuList>
          {sortOrders
          .map(order=><MenuItem 
         onClick={()=> onSelectedSortOrder(order.value)}
          key={order.value} value={order.value}>{order.label}</MenuItem>)}
        </MenuList>
    </Menu></>
  )
}

export default SortSelector