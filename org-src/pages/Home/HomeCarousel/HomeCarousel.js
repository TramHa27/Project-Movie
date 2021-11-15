import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { getCarouselAction } from "../../../redux/actions/CarouselAction";



export default function HomeCarousel(props) {
    const { arrImg } = useSelector(state => state.CarouselReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        const action = getCarouselAction();
        dispatch(action);
    }, [dispatch])
    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className='slick__next__arrow'
                onClick={onClick}
            />
        );
    }

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className='slick__prev__arrow'
                onClick={onClick}
            />
        );
    }

    const settings = {
        dots: true,
        appendDots: dots => {
            return <ul style={{ bottom: '5%' }}>{dots}</ul>;
        },
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const contentStyle = {
        height: '815px',
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className="w-full">
            <Slider {...settings}>
                {arrImg.map((item, index) => {
                    return <div key={index} >
                        <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>

                        </div>

                    </div>
                })}

            </Slider>
        </div>

    )
}
