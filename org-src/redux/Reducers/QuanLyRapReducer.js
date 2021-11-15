import { SET_CUM_RAP_THEO_HE_THONG, SET_HE_THONG_RAP_CHIEU} from "../types/MovieType"

const initialState = {
    heThongRapChieu: [],
    cumRap:[],
}

export const QuanLyRapReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_HE_THONG_RAP_CHIEU:{
            state.heThongRapChieu = action.heThongRapChieu;
            return { ...state }
        }

        case SET_CUM_RAP_THEO_HE_THONG:{
            state.cumRap = action.cumRap;
            return {...state}
        }

        default:
            return state
    }
}
