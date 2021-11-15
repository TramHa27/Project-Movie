import { GROUP_ID, http } from "../../util/setting";
import {
  SET_CHI_TIET_PHIM,
  SET_HE_THONG_RAP_CHIEU,
} from "../types/MovieType";

export const layThongTinLichChieuHeThongRapAction = () => {
  return async (dispatch) => {
    try {
      const result = await http.get(
        `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`
      );
      // console.log(result.data.content)
      dispatch({
        type: SET_HE_THONG_RAP_CHIEU,
        heThongRapChieu: result.data.content,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const layThongTinChiTietPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await http.get(
        `/api/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`);
      dispatch({
        type: SET_CHI_TIET_PHIM,
        filmDetail: result.data.content,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};
