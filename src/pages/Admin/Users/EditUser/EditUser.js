import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { history } from '../../../../App';
import { http } from '../../../../util/setting';
import { capNhatThongTinNguoiDung } from '../../../../redux/actions/QuanLyNguoiDungAction';
import { useSelector } from 'react-redux';


export default function EditUser(prop) {
    const { userModify } = useSelector(state => state.QuanLyNguoiDungReducer)
    const [state, setState] = useState({
        arrLoaiNguoiDung: []
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await http.get(`/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`);
                setState({
                    ...state, arrLoaiNguoiDung: result.data.content
                })
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: userModify.taiKhoan,
            matKhau: userModify.matKhau,
            email: userModify.email,
            soDt: userModify.soDt,
            maNhom: userModify.maNhom,
            maLoaiNguoiDung: userModify.maLoaiNguoiDung,
            hoTen: userModify.hoTen
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required('Tài khoản không được bỏ trống!'),
            matKhau: Yup.string().required('Mật khẩu không được bỏ trống !').min(6, 'Mật khẩu từ 6-32 ký tự').max(32, 'Mật khẩu từ 6 - 32 ký tự'),
            email: Yup.string().required('Email không được bỏ trống !').email('Email không đúng định dạng !'),
            hoTen: Yup.string().required('Họ tên không được bỏ trống !').matches(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/, 'Họ tên không được chứa số !'),
            soDt: Yup.string().required('Số điện thoại không được bỏ trống !').matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3,4}[\s.-]?\d{4}$/, 'Số điện thoại phải đúng định dạng!')
        }),
        onSubmit: (values) => {
            console.log({ values })
            capNhatThongTinNguoiDung(values);
        }
    })




    return (
        <div className="col-span-full xl:col-span-6">
            <header className="flex justify-between p-3 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800 text-lg">Profile Settings</h2>
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
                            Username
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </div>
                            <input name="taiKhoan" disabled value={formik.values.taiKhoan} className="block cursor-not-allowed pr-10 shadow appearance-none border border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" />
                        </div>
                        <strong className="text-red-500 text-xs italic">
                            {formik.touched.taiKhoan && formik.errors.taiKhoan ? <p>{formik.errors.taiKhoan}</p> : ''}
                        </strong>
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            <span className="text-red-500">&nbsp;*</span>
                            Password
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>              </div>
                            <input name="matKhau" onChange={formik.handleChange} value={formik.values.matKhau} className="block pr-10 shadow appearance-none border border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" />
                        </div>
                        <strong className="text-red-500 text-xs italic">
                            {formik.touched.matKhau && formik.errors.matKhau ? <p>{formik.errors.matKhau}</p> : ''}
                        </strong>
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            <span className="text-red-500">&nbsp;*</span>
                            Full Name
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </div>
                            <input name="hoTen" onChange={formik.handleChange} value={formik.values.hoTen} className="block pr-10 shadow appearance-none border border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" />
                        </div>
                        <strong className="text-red-500 text-xs italic">
                            {formik.touched.hoTen && formik.errors.hoTen ? <p>{formik.errors.hoTen}</p> : ''}
                        </strong>
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            <span className="text-red-500">&nbsp;*</span>
                            Email
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </div>
                            <input name="email" onChange={formik.handleChange} value={formik.values.email} className="block pr-10 shadow appearance-none border border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" />
                        </div>
                        <strong className="text-red-500 text-xs italic">
                            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : ''}
                        </strong>
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            <span className="text-red-500">&nbsp;*</span>
                            Phone Number
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            </div>
                            <input name="soDt" onChange={formik.handleChange} value={formik.values.soDt} className="block pr-10 shadow appearance-none border border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" />
                        </div>
                        <strong className="text-red-500 text-xs italic">
                            {formik.touched.soDt && formik.errors.soDt ? <p>{formik.errors.soDt}</p> : ''}
                        </strong>
                    </div>
                    <div className="mb-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            <span className="text-red-500">&nbsp;*</span>
                            Account Type
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                            <select onChange={(e) => formik.setFieldValue('maLoaiNguoiDung', e.target.value)} value={formik.values.maLoaiNguoiDung} className="block cursor-pointer shadow border border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out">
                                {state.arrLoaiNguoiDung.map((item, index) => {
                                    return <option value={item.maLoaiNguoiDung} key={index} className="cursor-pointer">{item.tenLoai}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
                        Save Profile
                    </button>

                </form>
            </div>
        </div>

    )
}