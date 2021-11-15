import { GROUP_ID, http, httpBearer } from "../../util/setting";
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "../types/MovieType";
import { history } from '../../App'

export const layDanhSachPhimAction = (tenphim = '') => {
    if (tenphim.trim() !== '') {
        return async (dispatch2) => {
            try {
                const result = await http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&tenPhim=${tenphim}`);
                dispatch2({
                    type: SET_DANH_SACH_PHIM,
                    arrFilm: result.data.content
                })
            } catch (error) {
                console.log(error.response?.data)
            }

        }
    }
    return async (dispatch2) => {
        try {
            const result = await http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`);
            dispatch2({
                type: SET_DANH_SACH_PHIM,
                arrFilm: result.data.content
            })
        } catch (error) {
            console.log(error.response?.data)
        }

    }


}


export const themPhimAction = async (frmData) => {
    try {
        const result = await http.post('/api/QuanLyPhim/ThemPhimUploadHinh', frmData)
        console.log(result.data)
        alert('Thêm phim thành công!')
    } catch (error) {
        console.log(error.response?.data.content)
    }
}


export const layThongTinPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await http.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
            dispatch({
                type: SET_THONG_TIN_PHIM,
                thongTinPhim: result.data.content
            })
        } catch (error) {
            console.log(error.response?.data.content)
        }

    }
}

export const capNhatPhimUploadAction = (frmData) => {
    return async (dispatch) => {
        try {
            const result = await httpBearer.post('/api/QuanLyPhim/CapNhatPhimUpload', frmData)
            console.log(result.data)
            alert('Cập nhật phim thành công!')
            history.push('/admin/films');
        } catch (error) {
            console.log(error.response?.data)
            alert(error.response?.data.content)
        }
    }
}

export const xoaPhimAction = async (maPhim) => {
    try {
        const result = await httpBearer.delete(`api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`)
        console.log(result.data)
        alert(result.data.content)

    } catch (error) {
        console.log(error.response?.data)
    }
}

