import { USER_LOGIN, ACCESS_TOKEN } from "../../util/setting";
import { DANG_NHAP_ACTION, SET_DANH_SACH_NGUOI_DUNG } from "../types/QuanLyNguoiDungType";

let user = {}
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin: user,
    arrUser: []
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case DANG_NHAP_ACTION: {
            const { thongTinDangNhap } = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
            localStorage.setItem(ACCESS_TOKEN, thongTinDangNhap.accessToken);
            return { ...state, userLogin: thongTinDangNhap }
        }
        case SET_DANH_SACH_NGUOI_DUNG: {
            state.arrUser = action.arrUser;
            return { ...state }
        }
        default:
            return { ...state }
    }
}