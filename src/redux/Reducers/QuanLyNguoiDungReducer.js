import { USER_LOGIN, ACCESS_TOKEN, GROUP_ID } from "../../util/setting";
import {
  DANG_NHAP_ACTION,
  SET_DANH_SACH_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG,
  SET_THONG_TIN_NGUOI_DUNG_ADMIN,
  LAY_THONG_TIN_NGUOI_DUNG_USER,
} from "../types/QuanLyNguoiDungType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
  userLogin: user,
  thongTinNguoiDung: {},
  arrUser: [],
  userModify: {
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: GROUP_ID,
    maLoaiNguoiDung: "",
    hoTen: "",
  },
  thongTinNguoiDungUser: {},
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(ACCESS_TOKEN, thongTinDangNhap.accessToken);
      return { ...state, userLogin: thongTinDangNhap };
    }
    case SET_DANH_SACH_NGUOI_DUNG: {
      state.arrUser = action.arrUser;
      return { ...state };
    }
    case SET_THONG_TIN_NGUOI_DUNG: {
      state.thongTinNguoiDung = action.thongTinNguoiDung;
      return { ...state };
    }
    case SET_THONG_TIN_NGUOI_DUNG_ADMIN: {
      state.userModify = { ...action.userModify, maNhom: GROUP_ID };
      return { ...state };
    }
    case LAY_THONG_TIN_NGUOI_DUNG_USER: {
      state.thongTinNguoiDungUser = { ...action.thongTinNguoiDungUser };
      return { ...state };
    }
    default:
      return { ...state };
  }
};
