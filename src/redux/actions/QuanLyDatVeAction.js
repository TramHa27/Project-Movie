// import { httpBearer } from "../../util/setting";
import { http, httpBearer } from "../../util/setting";
import { ThongTinDatVe } from "../../_cores/models/ThongTinDatVe";
import { CHUYEN_TAB, SET_CHI_TIET_PHONG_VE } from "../types/QuanLyDatVeType";
import { DAT_VE_HOAN_TAT } from "../types/QuanLyDatVeType";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { DAT_VE } from "../types/QuanLyDatVeType";
import { connection } from "../../index";
import { notificationFunction } from "../../templates/Notification/Notification";

export const taoLichChieuAction = async (thongTinLichChieu) => {
    try {
        const result = await httpBearer.post(`/api/QuanLyDatVe/TaoLichChieu`, thongTinLichChieu);
        alert(result.data.content)
    } catch (error) {
        console.log( error.response?.data.content);
    }
};

export const layChiTietPhongVeAction = (maLichChieu) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction)
      const result = await http.get(
        `api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
      );
      // console.log('resultlayChiTietPhongVeAction', result)
      if (result.status === 200) {
        dispatch({
          type: SET_CHI_TIET_PHONG_VE,
          chiTietPhongVe: result.data.content,
        });
      await dispatch(hideLoadingAction)
      }
    } catch (error) {
      console.log("error", error);
      console.log("error", error.response?.data);
    }
  };
};

export const DatVeAction = (thongTinDatVe = new ThongTinDatVe()) => {
  console.log("DatVeAction", thongTinDatVe);
  return async (dispatch, getState) => {
    try {
      dispatch(displayLoadingAction);
      const result = await httpBearer.post(`/api/QuanLyDatVe/DatVe`, thongTinDatVe);
      notificationFunction("success", "Booking Ticket is successful")
      console.log(result.data.content);
      //Đặt vé thành công gọi api load lại phòng vé
      await dispatch(layChiTietPhongVeAction(thongTinDatVe.maLichChieu));
      await dispatch({ type: DAT_VE_HOAN_TAT });
      await dispatch(hideLoadingAction);
      let userLogin = getState().QuanLyNguoiDungReducer.userLogin;
      await connection.invoke('datGheThanhCong',userLogin.taiKhoan,thongTinDatVe.maLichChieu)
      dispatch({ type: CHUYEN_TAB });
    } catch (error) {
      dispatch(hideLoadingAction);
      console.log("errorDatVeAction", error);
      console.log(error.response?.data);
    }
  };
};

export const datGheAction = (ghe, maLichChieu) => {
  return async (dispatch, getState) => {
      //Đưa thông tin ghế lên reducer
    await dispatch({
      type: DAT_VE,
      gheDuocChon: ghe,
    });
        //Call api về backend
        // let danhSachGheDangDat = getState().QuanLyDatVeRuducer.danhSachGheDangDat;
        // let taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan;
        // console.log('dsGhe',danhSachGheDangDat);
        // console.log('tk',taiKhoan);
        // console.log('ma',maLichChieu);
        // //Biến mãng thành chuổi
        // danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);
        // //call api.signalR
        // connection.invoke('datGhe',taiKhoan,danhSachGheDangDat,maLichChieu);
        let danhSachGheDangDat = getState().QuanLyDatVeRuducer.danhSachGheDangDat;
        //Biến mảng thành chuỗi
        danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);
        let taiKhoan = getState().QuanLyNguoiDungReducer.userLogin.taiKhoan;

        console.log('danhSachGheDangDat',danhSachGheDangDat);
        console.log('taiKhoan',taiKhoan);
        console.log('maLichChieu',maLichChieu);
        
        //Call api signalR
        // connection.invoke('datGhe',taiKhoan,danhSachGheDangDat,maLichChieu);
  };
};
