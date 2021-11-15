import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik'
import {
  DatePicker,
  InputNumber,
  Switch,
} from 'antd';
import { GROUP_ID } from '../../../../util/setting';
import { useDispatch, useSelector } from 'react-redux';
import { capNhatPhimUploadAction, layThongTinPhimAction } from '../../../../redux/actions/QuanlyPhimAction';
import moment from 'moment';
import { history } from '../../../../App';



export default function EditFilm(props) {


  const [imgSrc, setImgSrc] = useState('')
  const dispatch = useDispatch();
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layThongTinPhimAction(id));
  }, [dispatch])

  const { thongTinPhim } = useSelector(state => state.QuanLyPhimReducer);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: thongTinPhim.maPhim,
      tenPhim: thongTinPhim.tenPhim,
      trailer: thongTinPhim.trailer,
      moTa: thongTinPhim.moTa,
      maNhom: GROUP_ID,
      ngayKhoiChieu: thongTinPhim.ngayKhoiChieu,
      sapChieu: thongTinPhim.sapChieu,
      dangChieu: thongTinPhim.dangChieu,
      hot: thongTinPhim.hot,
      danhGia: thongTinPhim.danhGia,
      hinhAnh: null
    },
    onSubmit: (values) => {
      console.log(values);

      let frmData = new FormData();

      for (let key in values) {
        if (key !== 'hinhAnh') {
          frmData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            frmData.append('File', values.hinhAnh, values.hinhAnh.name)
          }
        }
      }
      dispatch(capNhatPhimUploadAction(frmData));

    }
  })

  const handleChangeDatePicker = (date, dateString) => {
    formik.setFieldValue('ngayKhoiChieu', moment(dateString, "DD/MM/YYYY"))
  }

  const handleChangeSwitch = (name, checked) => {
    formik.setFieldValue(name, checked)
  }

  const handleChangeFile = async (event) => {
    let file = event.target.files[0];
    console.log('file', file);
    await formik.setFieldValue('hinhAnh', file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImgSrc(e.target.result);
    }
  }



  return (
    <div className="editFilm col-span-full xl:col-span-6">
      <header className="flex justify-between p-3 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800 text-lg">Update Movie</h2>
        <button onClick={history.goBack} className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
          Go Back
          <i className="fas fa-chevron-circle-left fa-fw ml-1" />
        </button>
      </header>
      <div className="p-3 w-full">
        <form onSubmit={formik.handleSubmit}>

          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">&nbsp;*</span>
              Title
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim} className="block pr-10 shadow appearance-none border border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" />
            </div>
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">&nbsp;*</span>
              Description
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input name="moTa" onChange={formik.handleChange} value={formik.values.moTa} className="block pr-10 shadow appearance-none border border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" />
            </div>
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">&nbsp;*</span>
              Trailer
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input name="trailer" onChange={formik.handleChange} value={formik.values.trailer} className="block pr-10 shadow appearance-none border border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" />
            </div>
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">&nbsp;*</span>
              Date
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <DatePicker name="ngayKhoiChieu" format="DD/MM/YYYY" onChange={handleChangeDatePicker} value={moment(formik.values.ngayKhoiChieu)} />
            </div>
          </div>
          <div className="mb-5">
            <label className="mr-2 w-32 inline-block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">&nbsp;*</span>
              Now Playing:
            </label>
            <Switch name="dangChieu" onChange={(checked) => { handleChangeSwitch('dangChieu', checked) }} checked={formik.values.dangChieu} className="bg-gray-300"/>
          </div>
          <div className="mb-5">
            <label className="mr-2 w-32 inline-block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">&nbsp;*</span>
              Coming soon:
            </label>
            <Switch name="sapChieu" onChange={(checked) => { handleChangeSwitch('sapChieu', checked) }} checked={formik.values.sapChieu}  className="bg-gray-300"/>
          </div>
          <div className="mb-5">
            <label className="mr-2 w-32 inline-block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">&nbsp;*</span>
              Hot Movie:
            </label>
            <Switch name="Hot" onChange={(checked) => { handleChangeSwitch('hot', checked) }} checked={formik.values.hot} className="bg-gray-300"/>
          </div>
          <div className="mb-5">
            <label className="mr-2 w-32 inline-block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">&nbsp;*</span>
              Rating:
            </label>
            <InputNumber name="danhGia" onChange={(value) => { formik.setFieldValue('danhGia', value) }} value={formik.values.danhGia}/>
          </div>

          <div className="mb-5">
            <label className="mr-2 w-32 inline-block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">&nbsp;*</span>
              Image:
            </label>
            <label className="flex flex-col items-center w-40 px-2 py-2 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-gray-100 text-indigo-500 ease-linear transition-all duration-150">
              <span className="text-base">Select a file <i className="fas fa-cloud-upload-alt text-lg"></i></span>
              <input type="file" className="hidden" name="hinhAnh" onChange={handleChangeFile} accept="image/png, image/jpg, image.jpeg,image/gif " />
            </label>
            <img style={{ width: 200 }} className="mt-2" src={imgSrc === '' ? thongTinPhim.hinhAnh : imgSrc} alt="..." />
          </div>
          <button type="submit" className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
            Update Movie
          </button>

        </form>
      </div>
    </div>
  )
}