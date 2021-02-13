import styled from 'styled-components'
import ImgBg from '../../images/pizza-3.jpg'
export const TopContainer=styled.div`

height:100vh;
width:100%;

background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});

    background-size:cover;
    background-position:center;

`


export const TopContent=styled.div`
height:calc(100vh-80px);
padding:0rem calc((100vh -1300px)/2);
max-height:100%;


`
export const TopItems=styled.div`
display:flex;
justify-content:center;
align-items:flex-start;
width:650px;
height:100vh;
flex-direction:column;
color:#fff;
padding:0 2rem;
text-align:center;
line-height:1.5;
font-weight:bold;
@media screen and (max-width:650px){
  width:100%;
}

h1{
    font-size: clamp(2.5rem,10vw,5rem);
    margin-bottom: 1rem;
    box-shadow:-3px 5px #e9ba23;
    padding-left:1rem;
}
p{
    font-size: clamp(2rem,2.5vw,3rem);
    margin-bottom:2rem;
}

button{
    padding:1rem 4rem;
    color:#fff;
    background:#e31837;
    font-size:1.5rem;
    line-height: 1;
    font-weight: bold;
    border:none;
    transition:0.2s ease-out;
    cursor:pointer;
    &:hover{
        color:#000;
        transition:0.2s ease-out;
        background:#ffc500;
    }
}
`