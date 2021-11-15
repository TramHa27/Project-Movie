import { http } from "../../util/setting";

export const taoLichChieuAction = async (thongTinLichChieu) => {
    try {
        const result = await http.post(`/api/QuanLyDatVe/TaoLichChieu`, thongTinLichChieu);
        alert(result.data.content)
    } catch (error) {
        console.log( error);
    }
};