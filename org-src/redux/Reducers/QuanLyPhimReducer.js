import { SET_DANH_SACH_PHIM, SET_CHI_TIET_PHIM, SET_THONG_TIN_PHIM } from "../types/MovieType"

const initialState = {
    arrFilm: [
        // {
        //     "maPhim": 1283,
        //     "tenPhim": "Lat mat 48h123",
        //     "biDanh": "lat-mat-48h123",
        //     "trailer": "",
        //     "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h123_gp01.jpg",
        //     "moTa": "",
        //     "maNhom": "GP01",
        //     "ngayKhoiChieu": "2020-10-10T00:00:00",
        //     "danhGia": 10,
        //     "hot": true,
        //     "dangChieu": true,
        //     "sapChieu": true
        // },
    ],
    filmDetail: {},
    thongTinPhim:{}
}



export const QuanLyPhimReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_DANH_SACH_PHIM: {
            state.arrFilm = action.arrFilm;
            return { ...state }
        }
        case SET_CHI_TIET_PHIM: {
            state.filmDetail = action.filmDetail;
            return {...state}
        }
        case SET_THONG_TIN_PHIM:{
            state.thongTinPhim = action.thongTinPhim;
            return {...state}
        }
        default: return state
    }
}



