import React, { useEffect, useState } from 'react'
// import './HomeMenu.css'
import { useDispatch, useSelector } from 'react-redux';

import MultipleRowSlick from '../../../components/RSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../../redux/actions/QuanlyPhimAction';
import { SET_PHIM_DANG_CHIEU, SET_PHIM_HOT, SET_PHIM_SAP_CHIEU, SET_VIDEO_MODAL } from '../../../redux/types/MovieType';


import ModalVideo from 'react-modal-video'


export default function HomeMenu(props) {
    const { arrFilm, isOpenModal, modalTrailer } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();

    const [isActive, setActive] = useState(0);

    useEffect(() => {
        dispatch(layDanhSachPhimAction());
    }, [dispatch]);


    const arrButton = [
        { name: 'Đang chiếu', action: { type: SET_PHIM_DANG_CHIEU } },
        { name: 'Sắp chiếu', action: { type: SET_PHIM_SAP_CHIEU } },
        { name: 'Thịnh hành', action: { type: SET_PHIM_HOT } },
    ]

    return (
        <div className="container my-5">
            <div className="text-center lg:my-10 my-2">
                {arrButton.map((item, index) => {
                    return <button key={index} className={isActive === index ? 'home-menu-btn btn-active' : 'home-menu-btn'} onClick={() => {
                        dispatch(item.action)
                        setActive(index)
                    }}>{item.name}</button>
                })}
            </div>
            <ModalVideo channel='youtube' autoplay isOpen={isOpenModal} videoId={modalTrailer} onClose={() => {
                dispatch({
                    type: SET_VIDEO_MODAL,
                    isOpenModal: false
                })
            }} />
            <div className="mx-auto md:w-5/6">
                <MultipleRowSlick arrFilm={arrFilm} />
            </div>
        </div>
    )
}
