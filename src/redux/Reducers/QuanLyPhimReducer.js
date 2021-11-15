import { SET_DANH_SACH_PHIM, SET_CHI_TIET_PHIM, SET_PHIM_SAP_CHIEU, SET_PHIM_DANG_CHIEU, SET_PHIM_HOT, SET_THONG_TIN_PHIM, SET_VIDEO_MODAL } from "../types/MovieType"

const initialState = {
    arrFilm: [],
    arrFilmDefault: [],
    filmDetail: {},
    thongTinPhim: {},
    isOpenModal:false,
    modalTrailer:'L61p2uyiMSo'
}



export const QuanLyPhimReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_DANH_SACH_PHIM: {
            state.arrFilmDefault = action.arrFilm;
            state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu)
            return { ...state }
        }

        case SET_PHIM_DANG_CHIEU: {

            state.arrFilm = state.arrFilmDefault.filter(film => film.dangChieu)
            return { ...state }
        }
        case SET_PHIM_SAP_CHIEU: {
            state.arrFilm = state.arrFilmDefault.filter(film => film.sapChieu)
            return { ...state }
        }

        case SET_PHIM_HOT: {
            state.arrFilm = state.arrFilmDefault.filter(film => film.hot)
            return { ...state }
        }

        case SET_CHI_TIET_PHIM: {
            state.filmDetail = action.filmDetail;
            return { ...state }
        }
        
        case SET_THONG_TIN_PHIM:{
            state.thongTinPhim = action.thongTinPhim;
            return {...state}
        }

        case SET_VIDEO_MODAL:{
            state.isOpenModal = action.isOpenModal;
            state.modalTrailer = action.modalTrailer;
            return {...state}
        }

        default: return state
    }
}



