import React,{useState} from 'react'
import {TopContainer, TopContent, TopItems} from './TopElements'
import NavBar from '../NavBar/index'
import SlideBar from '../SlideBar'

const Top = () => {
const [isOpen,setIsopen]=useState(false);
const toggle=()=>{
    setIsopen(!isOpen);
}
    return (
       <TopContainer>
       <NavBar toggle={toggle} />
       <SlideBar toggle={toggle} isopen={isOpen}/>
       <TopContent>
         <TopItems>   
               <h1>بهترین پیتزاهای دنیا</h1>
               <p> آماده در 60 ثانیه</p>
               <button>سفارش</button>
              
           </TopItems> 
       </TopContent>
       </TopContainer>
    )
}

export default Top