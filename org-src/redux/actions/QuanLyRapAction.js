import { GROUP_ID, http } from "../../util/setting";
import {
  SET_CHI_TIET_PHIM,
  SET_CUM_RAP_THEO_HE_THONG,
  SET_HE_THONG_RAP_CHIEU,
} from "../types/MovieType";

export const layDanhSachHeThongRapAction = () => {
  return async (dispatch) => {
    try {
      const result = await http.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
      dispatch({
        type: SET_HE_THONG_RAP_CHIEU,
        heThongRapChieu: result.data.content,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const layThongTinCumRapTheoHeThongAction = (maHeThongRap) => {
  return async (dispatch) => {
    try {
      const result = await http.get(
        `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${GROUP_ID}`
      );
      dispatch({
        type: SET_CUM_RAP_THEO_HE_THONG,
        cumRap: result.data.content[0].lstCumRap,
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
