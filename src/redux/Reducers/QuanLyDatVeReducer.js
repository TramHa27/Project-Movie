import { DAT_VE, SET_CHI_TIET_PHONG_VE, DAT_VE_HOAN_TAT, CHUYEN_TAB, CHANGE_TAB_ACTIVE, DAT_GHE } from "../types/QuanLyDatVeType"
import {ThongTinLichChieu} from "../../_cores/models/ThongTinPhongVe"

const stateDefault ={
    chiTietPhongVe: new ThongTinLichChieu(), //{thongTinPhim:{}}
    danhSachGheDangDat: [],
    danhSachGheKhachDat: [],
    tabActive: '1',
}

export const QuanLyDatVeRuducer = (state = stateDefault,action) => {
    switch(action.type) {
        case SET_CHI_TIET_PHONG_VE: {
            state.chiTietPhongVe =action.chiTietPhongVe;
            return{...state}
        }
        case DAT_VE: {
            //Cập nhật danh sách ghế đang đặt
            let danhSachGheCapNhat = [...state.danhSachGheDangDat];
            let index = danhSachGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.gheDuocChon.maGhe);
            if(index !== -1) {
                //Nếu tìm thấy ghế được chọn trong mãng có nghĩa là trước đó đã click vào rồi => xóa đi
                danhSachGheCapNhat.splice(index,1)
            }else{
                danhSachGheCapNhat.push(action.gheDuocChon)
            }
            return {...state, danhSachGheDangDat:danhSachGheCapNhat}
        }
        case DAT_VE_HOAN_TAT: {
            state.danhSachGheDangDat = [];
            return {...state}
        }
        case CHUYEN_TAB: {
            state.tabActive = '2';
            return {...state}
        }
        case CHANGE_TAB_ACTIVE : {
            state.tabActive = action.number
            return {...state}
        }
        case DAT_GHE : {
            state.danhSachGheKhachDat = action.arrGheKhachDat;
            return {...state}
        }
        default: return {...state}
    }
}