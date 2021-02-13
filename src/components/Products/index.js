import React from 'react'
import { ProductCard, ProductsContainer, ProductsHeading, ProductsWrapper,ProductImage, ProductInfo, ProductTitle, ProductDesc, ProductPrice, ProductButton } from './productsElements'

const Product = ({data}) => {
    return (
       <ProductsContainer>
       <ProductsHeading>غذای مورد علاقه خودرا انتخاب کنید</ProductsHeading>
     
       <ProductsWrapper>
         
       {data.map((product,index)=>{

     return(
       <ProductCard key={index}>
         
       <ProductImage src={product.image}/>
     
       <ProductInfo>
     
        <ProductTitle>{product.name}</ProductTitle>
       <ProductDesc>{product.desc}</ProductDesc>
       <ProductPrice>{product.price}</ProductPrice>
       <ProductButton>سفارش</ProductButton>
     
       </ProductInfo>
      
       
       </ProductCard> 
       )


       })}
           
       
      
       </ProductsWrapper>
       
       </ProductsContainer>
    )
}

export default Product
