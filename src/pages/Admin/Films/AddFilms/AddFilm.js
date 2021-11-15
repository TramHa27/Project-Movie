import React, { useState } from 'react';
import { useFormik } from 'formik'
import {
  DatePicker,
  InputNumber,
  Switch,
} from 'antd';



import { GROUP_ID } from '../../../../util/setting';
import { themPhimAction } from '../../../../redux/actions/QuanlyPhimAction';
import { history } from '../../../../App';

export default function AddFilm(prop) {


  const [imgSrc, setImgSrc] = useState('')


  const formik = useFormik({
    initialValues: {
      maPhim: '',
      tenPhim: '',
      trailer: '',
      moTa: '',
      maNhom: GROUP_ID,
      ngayKhoiChieu: '',
      sapChieu: false,
      dangChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {}
    },
    onSubmit: (values) => {
      console.log(values);

      let frmData = new FormData();

      for (let key in values) {
        if (key !== 'hinhAnh') {
          frmData.append(key, values[key]);
        } else {
          frmData.append('File', values.hinhAnh, values.hinhAnh.name)
        }
      }

      themPhimAction(frmData);

    }
  })


  const handleChangeDatePicker = (date, dateString) => {
    formik.setFieldValue('ngayKhoiChieu', dateString)
  }

  const handleChangeSwitch = (name, checked) => {
    formik.setFieldValue(name, checked)
  }

  const handleChangeFile = async (event) => {
    let file = event.target.files[0];
    console.log('file', file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async (e) => {
      setImgSrc(e.target.result);
    }
    formik.setFieldValue('hinhAnh', file);
  }

  const renderImgInput = () => {
    if (imgSrc !== '') {
      return <img style={{ width: 200 }} className="mt-2" src={imgSrc} alt="..." />
    }
    else return <label className="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-gray-100 text-indigo-500 ease-linear transition-all duration-150">
      <i className="fas fa-cloud-upload-alt fa-3x" />
      <span className="mt-2 text-base leading-normal">Select a file</span>
      <input type="file" className="hidden" name="hinhAnh" onChange={handleChangeFile} accept="image/png, image/jpg, image.jpeg,image/gif " />
    </label>

  }



  return (
    <div className="addFilm col-span-full xl:col-span-6">
      <header className="flex justify-between p-3 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800 text-lg">Add Movie</h2>
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
              <input name="taiKhoan" onChange={formik.handleChange} className="block pr-10 shadow appearance-none border border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" />
            </div>
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">&nbsp;*</span>
              Description
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input name="taiKhoan" onChange={formik.handleChange} className="block pr-10 shadow appearance-none border border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" />
            </div>
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">&nbsp;*</span>
              Trailer
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input name="taiKhoan" onChange={formik.handleChange} className="block pr-10 shadow appearance-none border border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" />
            </div>
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">&nbsp;*</span>
              Date
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <DatePicker name="ngayKhoiChieu" format="DD/MM/YYYY" onChange={handleChangeDatePicker} />
            </div>
          </div>
          <div className="mb-5">
            <label className="mr-2 w-32 inline-block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">&nbsp;*</span>
              Now Playing:
            </label>
            <Switch name="dangChieu" onChange={(checked) => { handleChangeSwitch('dangChieu', checked) }} className="bg-gray-300"/>
          </div>
          <div className="mb-5">
            <label className="mr-2 w-32 inline-block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">&nbsp;*</span>
              Coming soon:
            </label>
            <Switch name="sapChieu" onChange={(checked) => { handleChangeSwitch('sapChieu', checked) }} className="bg-gray-300"/>
          </div>
          <div className="mb-5">
            <label className="mr-2 w-32 inline-block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">&nbsp;*</span>
              Hot Movie:
            </label>
            <Switch name="Hot" onChange={(checked) => { handleChangeSwitch('hot', checked) }} className="bg-gray-300"/>
          </div>
          <div className="mb-5">
            <label className="mr-2 w-32 inline-block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">&nbsp;*</span>
              Rating:
            </label>
            <InputNumber name="danhGia" onChange={(value) => { formik.setFieldValue('danhGia', value) }} />
          </div>

          <div className="mb-5">
            <label className="mr-2 w-32 inline-block text-gray-700 text-sm font-bold mb-2">
              <span className="text-red-500">&nbsp;*</span>
              Image:
            </label>
            {renderImgInput()}
          </div>
          <button type="submit" className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
            <svg className="mr-1 w-3 h-3 fill-current flex-shrink-0" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            Add Film
          </button>

        </form>
      </div>
    </div>
  )
}