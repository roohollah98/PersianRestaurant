import React from 'react'
import {NavBarContainer,NavBarLink,NavBarIcon,Icon} from './NavBarElements'
const NavBar = ({toggle}) => {
    return (
       <NavBarContainer>
       <NavBarLink to='/'> های پیتزا</NavBarLink>
        
       <NavBarIcon>
       <p onClick={toggle}>منو</p>
       <Icon onClick={toggle}/>
       </NavBarIcon>
       </NavBarContainer>
    )
}

export default NavBar
