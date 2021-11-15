import { http, } from "../../util/setting"
import { SET_CAROUSEL } from "../types/MovieType";

export const getCarouselAction = () => {

    return async (dispatch) => {
        try {
            const result = await http.get('/api/QuanLyPhim/LayDanhSachBanner');
            dispatch({
                type: SET_CAROUSEL,
                arrImg: result.data.content
            })
        } catch (error) {
            console.log('error', error)
        }

    }

}