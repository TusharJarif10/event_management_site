
import React, { useEffect, useState } from 'react'
import '../style/Carousel.css';

export default function Carousel({images}) {

    const [current, setCurrent] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    let timeOut = null;

    useEffect ( ()=>
    {
        setTimeout( ()=> {slideRight()}, 2500)
    }) 
    const slideRight = () => {
        if (current===images.length-1)
        {
            setCurrent(0)
        }
        else{
            setCurrent(current+1)
        }
        
    };
    const slideLeft = () => {
        if (current=== 0)
        setCurrent(images.length-1)
        else
        {
            setCurrent(current-1)
        }
    };
  return (
    <div className='carousel'>
        <div className="carousel_wrapper">
            {images.map((images, index)=>{
                return ( <div key = {index} className={index== current ? 'carousel_card carousel_card-active' : 'carousel_card'}>  
                            <img className='card_image' src={images.image} alt="" />
                            <div className='card_overlay'>
                                <h2 className='card_title'>{images.title}</h2>
                            </div>
                            <div className="carousel_arrow_left" onClick={slideLeft}>&lsaquo;</div>
                            <div className="carousel_arrow_right" onClick={slideRight}>&rsaquo;</div>
                        </div>
                        
                        )
            } )}
           
           

        </div>
        
        
    </div>
  )

}
