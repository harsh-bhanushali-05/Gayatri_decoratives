import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    IconButton,
    MenuDivider,
  } from '@chakra-ui/react'
  import { Link } from 'react-router-dom';
 import  {HamburgerIcon} from '@chakra-ui/icons'
  import "./NavStyles.css";
export default function HamMenu() {
  return (
    <Menu>
    <MenuButton
    className='hamburger'
    as={IconButton}
    background="none"
    aria-label='Options'
    icon={<HamburgerIcon />}
  />
    <MenuList>
    <Link to="/AllProdsMob"><MenuItem>All Products</MenuItem></Link>
    <Link to="/"><MenuItem>Category</MenuItem></Link>
    <Link to="/NewArrivalsMob"><MenuItem>New Arrivals</MenuItem></Link>
    </MenuList>
  </Menu>
  );
}