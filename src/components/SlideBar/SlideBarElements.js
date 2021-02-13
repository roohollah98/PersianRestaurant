import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'


export const SlideBarContainer=styled.div`
position:absolute;
top:0;
right:${({isopen})=>(isopen?'0':'-1000px')};

width:350px;
background:#ffc500;
height:100%;
display:grid;
z-index:999;
position:fixed;
align-items:center;
transition:0.3s ease-in-out;

@media screen and(max-width:650px){
    width:100%;
}

`

export const SlideBarIcon=styled.div`
position:absolute;
top:1.2rem;
right:1.2rem;
cursor:pointer;
border:none;
background:transparent;
font-size:2rem;


`
export const Icon=styled(FaTimes)`
#000;

`

export const SlideBarItems=styled.div`

display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(3,80px);
flex-direction:column;
width:100%;

`


export const SlideBarLink=styled(Link)`
display:flex;
justify-content:center;
align-items:center;
text-decoration:none;
font-size:2rem;
color:#000;
align-items:center;
list-style:none;
cursor:pointer;
transition:0.2s ease-in-out;

&:hover{
    color:#e31837;
    transition:0.2s ease-in-out; 
}

`

export const SlideBarButton=styled.div`
display:flex;
justify-content:center;

`
export const SlideBarRoute=styled(Link)`
text-decoration:none;
border:none;
padding:16px 64px;
color:#fff;
Background:#e31837;
transition:0.3s ease-in-out;
outline:none;

&:hover{
    background:#fff;
    color:#010606;
    transition:0.3s ease-in-out;
}

`