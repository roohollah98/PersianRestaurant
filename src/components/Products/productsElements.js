import styled from 'styled-components'
export const ProductsContainer=styled.div`

background:#150f0f;
min-height:100vh;
width:100%;
display:flex;
justify-content:center;
padding:2rem 0;
flex-direction:column;
padding:5rem calc((100vw - 1300px)/2);

`
export const ProductsHeading=styled.h1`
color:#fff;
margin-bottom:5rem;
font-size: clamp(2rem,2.5vw,3rem);
text-align:center;

`
export const ProductsWrapper=styled.div`

display:flex;
justify-content:center;
flex-wrap: wrap;
margin: 0 auto;


`
export const ProductCard=styled.div`
width:300px;
line-height:2;
margin:0 2rem;



`
export const ProductImage=styled.img`
min-width:300px;
max-width:100%;
height:300px;
box-shadow:8px 8px #fdc500;


`
export const ProductInfo=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
padding: 2rem;
text-align: center;
color:#fff;
}



`
export const ProductTitle=styled.h2`
font-size:1.5rem;
font-weight:400;
`
export const ProductDesc=styled.p`

`
export const ProductPrice=styled.p`
margin-bottom:1rem;
font-size:2rem;
`
export const ProductButton=styled.button`
border:none;
transition:0.2s ease-out;
color:#fff;
background:#e31837;
padding:16px 4rem;
font-size:1rem;
cursor:pointer;
&:hover{
background:#ffc500;
transition:0.2s ease-out;
color:#000;
}


`
