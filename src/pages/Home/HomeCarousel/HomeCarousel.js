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
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div className="w-full">

            <Slider {...settings}>
                {arrImg.map((item, index) => {
                    return <div key={index}>
                        <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }} className="md:h-40v lg:h-80v">

                            <div style={{
                                position: 'relative',
                                top: '0',
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(to top,#000,transparent 20%)',
                            }}>
                                <img src="./img/play-video.png" alt="..." className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                })}

            </Slider>
        </div>

    )
}
