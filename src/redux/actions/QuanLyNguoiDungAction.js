import { DANG_NHAP_ACTION, SET_DANH_SACH_NGUOI_DUNG, SET_THONG_TIN_NGUOI_DUNG, LAY_THONG_TIN_NGUOI_DUNG_USER } from "../types/QuanLyNguoiDungType";
import {history} from "../../App"
import { GROUP_ID, http, httpBearer } from "../../util/setting";
import { notificationFunction } from "../../templates/Notification/Notification";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await http.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);

      if(result.data.statusCode === 200) {
          dispatch({
              type: DANG_NHAP_ACTION,
              thongTinDangNhap: result.data.content
          });
          //Chuyển hướng đăng nhập về trang trước đó
          history.goBack()
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
    const result = await httpBearer.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, thongTinNguoiDung)
    console.log(result)
    alert('Đăng ký thành công !');
  } catch (error) {
    console.log(error.response?.data)
    alert(error.response?.data.content)
  }
}



export const capNhatThongTinNguoiDung = async (thongTinNguoiDung) => {
  try {
    const result = await httpBearer.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, thongTinNguoiDung)
    console.log(result);
    notificationFunction("success", "Update is successful");
  } catch (error) {
    console.log(error.response?.data)
    notificationFunction("error", "Update is unsuccessful")
  }
}


export const xoaNguoiDung = async (taiKhoan) => {
    try {
      const result = await httpBearer.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
      console.log(result)
      alert(result.data.message);
    } catch (error) {
      console.log(error.response?.data)
      alert(error.response?.data.content)
    }
}
export const layThongTinNguoiDungAction = () => {
  return async (dispatch) => {
    try {
      const result = await httpBearer.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);

      if(result.data.statusCode === 200) {
          dispatch({
              type: SET_THONG_TIN_NGUOI_DUNG,
              thongTinNguoiDung: result.data.content
          });
      }
      console.log("result", result);
    } catch (error) {
      console.log("error", error.response.data);
    }
  };
};

export const dangKyNguoiDungAction = (thongTinNguoiDung) => {
  return async(dispatch) => {
    try {
      const result = await httpBearer.post(`/api/QuanLyNguoiDung/DangKy`,thongTinNguoiDung);
      console.log({ result });
      notificationFunction("success", "Register is successful");
      history.push("/login");
    } catch (error) {
      notificationFunction("error", "Register is unsuccessful");
      console.log("error", error.response?.data);
    }
  }
}

export const layThongTinNguoiDungUserAction = () => {
  return async (dispatch) => {
    try {
      const result = await httpBearer.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
      console.log({ result });
      if (result.status === 200) {
        dispatch({
          type: LAY_THONG_TIN_NGUOI_DUNG_USER,
          thongTinNguoiDungUser: result.data.content
        });
      }
    } catch (err) {
      console.log("err", err);
      console.log("err", err.response?.data);
    }
  };
};

