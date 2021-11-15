import { GROUP_ID, http } from "../../util/setting";
import { DANG_NHAP_ACTION, SET_DANH_SACH_NGUOI_DUNG } from "../types/QuanLyNguoiDungType";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await http.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);

      if (result.data.statusCode === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap: result.data.content
        })
      }
      console.log("result", result);
    } catch (error) {
      alert("Tài khoản không tồn tại!");
      console.log("error", error.response.data);
    }
  };
};


export const layDanhSachNguoiDungAction = (tuKhoa = '') => {
  if (tuKhoa.trim() !== '') {
    return async (dispatch) => {
      try {
        const result = await http.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${tuKhoa}`);
        dispatch({
          type: SET_DANH_SACH_NGUOI_DUNG,
          arrUser: result.data.content
        })
      } catch (error) {
        console.log(error)
      }

    }
  }
  return async (dispatch) => {
    try {
      const result = await http.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`);
      // console.log(result.data.content)
      dispatch({
        type: SET_DANH_SACH_NGUOI_DUNG,
        arrUser: result.data.content
      })
    } catch (error) {
      console.log(error)

    }
  }


}


export const themNguoiDungAction = async (thongTinNguoiDung) => {
    try {
      const result = await http.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, thongTinNguoiDung)
      console.log(result)
      alert('Đăng ký thành công !');
    } catch (error) {
      console.log(error?.response)
    }
}
