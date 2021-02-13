import styled from 'styled-components'
import FeaturePic from '../../images/featured3.jpg'
export const FeatureContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;

background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
    background-size:cover;
background-position:center;
color:#fff;
    height: 100vh;
  max-height:500px;
flex-direction:column;
padding: 0 1rem;
font-weight:bold;

h1{
    font-size:clamp(3rem,5vw,5rem);
}
p{
    font-size:clamp(1rem,3vw,2rem);
    margin-bottom: 1rem;
}
button{
    background:#ffc500;
    color:#000;
border:none;
outline:none;
padding:0.6rem 5rem;
font-size:1.4rem;
transition:0.2s ease-out;
cursor:pointer;

&:hover{
    color:#fff;
    background:#e31837;
}

}
`