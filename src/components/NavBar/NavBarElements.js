import styled from 'styled-components'
import {Link} from 'react-router-dom'
import{FaPizzaSlice} from 'react-icons/fa'

export const NavBarContainer =styled.div`

height:80px;
display:flex;
justify-content:center;
align-items:center;


`;


export const NavBarLink = styled(Link)`
font-size:2rem;
font-weight:bold;
text-decoration:none;
color:#fff;
@media screen and(max-width:400px){
    position:absolute;
    top:10px;
    left:25px;
}


`

export const NavBarIcon=styled.div`
top:0;
right:0;
color:#fff;
display:block;
position:absolute;
cursor:pointer;

p{
transform:translate(-175%,45%);
font-weight:bold;
font-size:1.6rem;


}


`
export const Icon=styled(FaPizzaSlice)`
font-size:2rem;
transform:translate(-50%,-55%);



`

