import React from 'react'
import { Icon, SlideBarContainer, SlideBarIcon, SlideBarItems,SlideBarLink, SlideBarButton,SlideBarRoute } from './SlideBarElements'

const SlideBar = ({toggle,isopen}) => {
    return (
        
            <SlideBarContainer onClick={toggle} isopen={isopen}>
          <SlideBarIcon>
                <Icon onClick={toggle}></Icon>
            </SlideBarIcon>
            
                <SlideBarItems>
                     <SlideBarLink>پیتزا</SlideBarLink>
                    <SlideBarLink>دسر</SlideBarLink>
                    <SlideBarLink>منوی کامل</SlideBarLink> 
                </SlideBarItems>
                   
                <SlideBarButton>
                    <SlideBarRoute>سفارش</SlideBarRoute>
                </SlideBarButton>
            </SlideBarContainer>
       
    )
}

export default SlideBar
