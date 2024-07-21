import React, { useEffect } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules'

import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DashboardCard from '../Cards/DashboardCard';




const Slider = (props) => {

    const adjustSlidesOpacity = (swiper) => {
        console.log('Active index : ', swiper.activeIndex)
        swiper.slides.forEach(slide => {
            slide.style.opacity = 0.8; // Set all slides to opacity 0.5
        });
        swiper.slides[swiper.activeIndex].style.opacity = 1; // Set active slide to full opacity        

        const activeSlide = swiper.slides[swiper.activeIndex];
        console.log('activeSlide : ', activeSlide)
        props.setActiveCard(props.cards[swiper.activeIndex]);
        console.log('props.cards : ', props.cards)
    };

  return (
    <div>
        <Swiper
            effect = {'coverflow'}
            grabCursor = {true}
            centeredSlides = {true}
            slidesPerView = {'auto'}
            coverflowEffect = {{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5        
            }}
           
            navigation = {{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true
            }}
            
            modules={[EffectCoverflow, Pagination, Navigation]}
            onSwiper={(swiper) => adjustSlidesOpacity(swiper)} // Adjust opacity on initial load
            onSlideChange={(swiper) => adjustSlidesOpacity(swiper)} // Adjust opacity on slide change
            className='swiper_container'
            
        >   
         {
            props.cards.map((card) => {    
                return (
                    <SwiperSlide
                        style={{
                            height: '200px',
                            width: '200px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#F9F871',
                            borderRadius: '10px'
                        }}
                    >
                        <DashboardCard
                            cardTitle={card.title}
                            cardHeadline = {card.headline}
                            cardDescription={card.description}
                            cardTimeStamp={card.timeStamp}
                            cardVisibility={card.visibility}
                        />
                    </SwiperSlide>
                )
            })
        }
        


            <div className="slider-controller">
                <div className="swiper-button-prev slider-arrow">
                </div>
                <div className="swiper-button-next slider-arrow">
                </div>               
            </div>

        </Swiper>

    </div>
  )
}

export default Slider