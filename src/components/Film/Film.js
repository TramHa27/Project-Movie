import React from "react";
import { Rate } from 'antd';
import { useDispatch } from 'react-redux';
import { SET_VIDEO_MODAL } from "../../redux/types/MovieType";
import { NavLink } from "react-router-dom";


export default function Film(props) {
  const { item } = props;
  let stars = Number(item.danhGia) / 2;
  const dispatch = useDispatch();

  return (

    <div className="group xl:w-56 rounded m-2 p-2 overflow-hidden cursor-pointer">

      <div className="relative h-60 lg:h-72 mx-auto rounded cursor-pointer" style={{
        backgroundImage: `url(${item.hinhAnh})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>

        <div className="film-point absolute top-1 right-1">
          {item.danhGia}
          <Rate disabled allowHalf="true" defaultValue={stars} style={{ fontSize: 8, }} />
        </div>

        <div className="absolute hidden group-hover:flex rounded w-full h-full top-0 left-0 bg-gradient-to-t from-black to-transparent items-center justify-center">
          <button className="hover:opacity-70 z-50" onClick={() => {
            dispatch({
              type: SET_VIDEO_MODAL,
              isOpenModal: true,
              modalTrailer: item.trailer
            })
          }}>
            <img src="./img/play-video.png" alt="..." width={50} height={50} />
          </button>
        </div>
      </div>

      <div className="h-24 overflow-hidden">
        <NavLink to={`/detail/${item.maPhim}`} className="group-hover:hidden group-hover:text-black font-bold text-sm capitalize my-2 line-clamp-2">
          <span className="bg-red-500 text-white leading-7 px-2 py-1 rounded-md mr-2">C18</span>
          {item.tenPhim}
        </NavLink>
        <p className="text-gray-700 text-xs line-clamp-2 hidden group-hover:hidden">
          {item.moTa}
        </p>
        <NavLink to={`/detail/${item.maPhim}`}
          className="bg-red-500 text-white hover:text-white p-2 mt-2 rounded-md w-full text-lg text-center uppercase hidden group-hover:block">
          Mua vé
        </NavLink>
      </div>
    </div>

  );
}
