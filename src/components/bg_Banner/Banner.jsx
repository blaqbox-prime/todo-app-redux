import React from 'react'
import './Banner.css'
import {useSelector} from 'react-redux'
import {useMediaQuery} from '@chakra-ui/react'

function Banner() {

  const [isMobile] = useMediaQuery('(max-width: 768px)')

  const theme = useSelector((state) => state.theme);

  const setThemedImage = () => {
    switch (theme) {
      case 'light':
         return isMobile ? "images/bg-mobile-light.jpg" : "images/bg-desktop-light.jpg"
      case 'dark': return isMobile ? "images/bg-mobile-dark.jpg" : "images/bg-desktop-dark.jpg"
      default:
        return "images/bg-desktop-light.jpg"
    }
  }

  return (
        
          <img src={setThemedImage()} alt="" className="Banner"/>
        
  )
}

export default Banner
