import React from 'react'
import Slider from "react-slick";
import Film from '../Film/Film';


export default function MultipleRowSlick(props) {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className='slick__next__arrow hidden lg:block'
        onClick={onClick}
        style={{ transform: 'translateX(100%)' }}
      />
    );
  }

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className='slick__prev__arrow hidden lg:block'
        onClick={onClick}
        style={{ transform: 'translateX(-100%)' }}
      />
    );
  }

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          rows: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2,
        }
      }
    ]
  };


  return (
    <Slider {...settings} >
      {props.arrFilm.map((item, index) => {
        return <div key={index}>
          <Film item={item} />
        </div>
      })}
    </Slider>
  )
}

