import React, { useEffect, useState } from 'react'
import { DatePicker } from 'antd';

import { useFormik } from 'formik';

import * as Yup from 'yup'
import { taoLichChieuAction } from '../../../../redux/actions/QuanLyDatVeAction';
import { http } from '../../../../util/setting';
import { history } from '../../../../App';
import { Tabs } from 'antd';

import { Modal } from 'antd';


export default function ShowTime(props) {

    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: ''
        },
        validationSchema: Yup.object({
            giaVe: Yup.number().typeError('Giá vé phải là số!').required('Giá vé không được bỏ trống!').min(75000, 'Giá vé từ 75000 đến 200000!').max(200000, 'Giá vé từ 75000 đến 200000!')
        }),
        onSubmit: (values) => {
            console.log('values', values)
        }
    })

    const [state, setState] = useState({
        heThongRapChieu: [],
        cumRapChieu: []
    });

    const [ngayChieu, setNgayChieu] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                let result = await http.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
                setState({
                    ...state, heThongRapChieu: result.data.content
                })
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);


    const handleChangeHeThongRap = async (value) => {
        try {
            let result = await http.get(`/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${value}`);
            setState({
                ...state, cumRapChieu: result.data.content
            })
        } catch (error) {
            console.log(error)
        }

    }

    const handleChangeDatePicker = (date, dateString) => {
        setNgayChieu(dateString)
    }


    const { TabPane } = Tabs;

    let film = {};
    if (localStorage.getItem('filmParams')) {
        film = JSON.parse(localStorage.getItem('filmParams'))
    }

    let showtime = [
        { time: "09:00 AM", value: '09:00:00' },
        { time: "09:45 AM", value: '09:45:00' },
        { time: "10:30 AM", value: '10:30:00' },
        { time: "10:45 AM", value: '10:45:00' },
        { time: "11:45 AM", value: '11:45:00' },
        { time: "12:30 PM", value: '12:30:00' },
        { time: "02:30 PM", value: '14:30:00' },
        { time: "03:15 PM", value: '15:15:00' },
        { time: "04:05 PM", value: '16:05:00' },
        { time: "04:40 PM", value: '16:40:00' },
        { time: "05:15 PM", value: '17:15:00' },
        { time: "06:00 PM", value: '18:00:00' },
        { time: "06:45 PM", value: '18:45:00' },
        { time: "08:00 PM", value: '20:00:00' },
        { time: "08:45 PM", value: '20:45:00' },
        { time: "09:20 PM", value: '21:20:00' },
        { time: "10:45 PM", value: '22:45:00' },
        { time: "11:30 PM", value: '23:30:00' },
    ]


    const newCumRap = state.cumRapChieu.map((item, index) => {
        return { ...item, showtime }
    })

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        // console.log(formik.values)
        taoLichChieuAction(formik.values);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <div className="showtimes col-span-full xl:col-span-6">
            <header className="flex justify-between p-3 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800 text-lg">Showtimes</h2>
                <button onClick={history.goBack} className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
                    Go Back
                    <i className="fas fa-chevron-circle-left fa-fw ml-1" />
                </button>
            </header>
            <div className="p-3 w-full">
                <form onSubmit={formik.handleSubmit}>
                    <div className="mx-auto flex md:flex-row flex-col items-center md:items-start">
                        <div className="md:w-1/3 w-1/2 mb-10 md:mb-0">
                            <img className="block w-full rounded" alt="hero" src={film.hinhAnh} />
                        </div>
                        <div className="lg:pl-8 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-3xl text-2xl mb-2 font-medium text-gray-900">
                                {film.tenPhim}
                            </h1>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                <span className="text-red-500">&nbsp;*</span>
                                Rating:
                                <span><i className="fa fa-star text-yellow-400 ml-2"></i> {film.danhGia}</span>
                            </label>

                            <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    <span className="text-red-500">&nbsp;*</span>
                                    Description
                                </label>
                                <p className="ml-2 text-sm mt-2">{film.moTa}</p>
                            </div>
                            <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    <span className="text-red-500">&nbsp;*</span>
                                    Ticket Price:
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <input name="giaVe" onChange={formik.handleChange} className="block pr-10 shadow appearance-none border border-orange-100 rounded w-full py-2 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-orange-500 transition duration-500 ease-in-out" />
                                </div>
                                <strong className="text-red-500 text-xs italic">
                                    {formik.touched.giaVe && formik.errors.giaVe ? <p>{formik.errors.giaVe}</p> : ''}
                                </strong>
                            </div>
                            <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    <span className="text-red-500">&nbsp;*</span>
                                    Date
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">
                                    <DatePicker name="ngayKhoiChieu" format="DD/MM/YYYY" onChange={handleChangeDatePicker} />
                                </div>
                                <strong className="text-red-500 text-xs italic">
                                    {formik.touched.taiKhoan && formik.errors.taiKhoan ? <p>{formik.errors.taiKhoan}</p> : ''}
                                </strong>
                            </div>
                            <div className="mb-3">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    <span className="text-red-500">&nbsp;*</span>
                                    Cinema
                                </label>
                                <Tabs onChange={(key) => { handleChangeHeThongRap(key) }}>
                                    {state.heThongRapChieu?.map((item, index) => {
                                        return <TabPane key={item.maHeThongRap} tab={<img src={item.logo} alt={item.maHeThongRap} className="rounded-full mx-auto w-16 md:w-12" />}>
                                            <div style={{ maxHeight: '600px', overflow: 'auto', width: "100%" }}>

                                                {newCumRap.map((item, index) => {
                                                    return <div className="flex border-b w-full sm:flex-row flex-col items-start justify-center" key={index}>
                                                        <div className="md:w-1/4 flex flex-row md:flex-col py-3">
                                                            <img src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png" className="w-14 h-14 md:w-16 md:h-16 rounded mb-3" alt="..." />
                                                            <div className="text-left pl-3 md:pl-0">
                                                                <p className="text-gray-600 text-sm font-bold">{item.tenCumRap}</p>
                                                                <p className="text-gray-500 text-xs">{item.diaChi.length > 50 ? item.diaChi.substr(0, 50) + '...' : item.diaChi}</p>
                                                                <span className="text-gray-500 text-xs">
                                                                    <svg className="inline-block mr-1 align-baseline" aria-hidden="true" role="img" width="0.75em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 768 1024"><path d="M388 0q-78 0-149.5 31.5t-123.5 84T31.5 240T0 390q0 44 12 92t28 89t46 91t53.5 84.5t63.5 84t62 75.5t62 72q12 14 18 20q2 3 7 7.5t18 11.5t25 7h3q28 0 50-26q320-368 320-608q0-167-102-277Q560 0 388 0zm12 955q-1 2-4 4l-4-4l-17-19q-38-44-59-68.5T257 796t-60-79.5t-51-79t-44.5-84t-26.5-81T64 390q0-87 44-162.5T226.5 108T388 64q79 0 141 27.5t99.5 74.5T685 270t19 120q0 216-304 565zm-15-762q-31 0-60.5 10t-53 27.5T230 272t-27.5 53t-9.5 60q0 80 56.5 136t136 56T521 521t56-136q0-39-15-74.5t-41-61t-61.5-41T385 193zm0 320q-53 0-91-38t-38-91t37.5-90.5T384 256t90.5 37.5T512 384q0 66-53 105q-33 24-74 24z" fill="currentColor" /></svg>
                                                                    GET DIRECTION
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-6 w-full md:w-3/4 py-3">
                                                            {item.showtime.map((time, index1) => {
                                                                return <button type="button" className="text-xs text-gray-600 font-semibold px-0 py-2 mr-2 mb-2 bg-gradient-to-tl from-white to-gray-200 rounded border bg-opacity-50 hover:text-green-500 active:text-green-500 focus:text-green-500 focus-within:text-green-500 focus-within:bg-opacity-100" key={index1} onClick={() => {
                                                                    { formik.setFieldValue('maRap', item.maCumRap) }
                                                                    { formik.setFieldValue('ngayChieuGioChieu', ngayChieu + ' ' + time.value) }
                                                                }}>
                                                                    {time.time}
                                                                </button>
                                                            })}
                                                        </div>
                                                    </div>

                                                })}

                                            </div>
                                        </TabPane>
                                    })}
                                </Tabs>
                            </div>

                        </div>
                    </div>

                    <button type="submit" onClick={showModal} className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
                        <svg className="mr-1 w-3 h-3 fill-current flex-shrink-0" viewBox="0 0 16 16">
                            <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                        </svg>
                        Apply
                    </button>

                </form>
            </div>
            <Modal
                title="Showtimes"
                visible={isModalVisible}
                footer={[
                    <button type="button" onClick={handleCancel} className="inline-flex items-center justify-center px-4 py-2 mr-2 text-xs font-medium text-center text-gray-500 border rounded-lg shadow-sm cursor-pointer hover:text-gray-800">
                        Cancel
                    </button>,
                    <button type="button" onClick={handleOk} className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-center text-indigo-100 border border-indigo-500 rounded-lg shadow-sm cursor-pointer hover:text-white bg-gradient-to-br from-purple-500 via-indigo-500 to-indigo-500">
                        Ok
                    </button>,
                ]}
                className="rounded-lg"
            >
                <div className="h-full w-full flex items-center">
                    <img
                        alt="team"
                        className="w-1/3 bg-gray-100 object-cover object-center flex-shrink-0 rounded mr-4"
                        src={film.hinhAnh}
                    />
                    <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium md:text-lg">
                            {film.tenPhim}
                        </h2>
                        <p className="text-gray-500 text-xs md:text-base">
                            Ngày chiếu, giờ chiếu: {formik.values.ngayChieuGioChieu}
                        </p>
                        <p className="text-gray-500 text-xs md:text-base">
                            Giá vé: {formik.values.giaVe + ' VND'}
                            {formik.touched.giaVe && formik.errors.giaVe ? <p className="text-red-500 text-xs md:text-base italic">{formik.errors.giaVe}</p> : ''}
                        </p>
                        <p className="text-gray-500 text-xs md:text-base">
                            Địa điểm: {state.cumRapChieu.find(rap => rap.maCumRap === formik.values.maRap)?.diaChi}
                        </p>
                        <p className="text-gray-500 text-xs md:text-base">
                            Tên rạp: {state.cumRapChieu.find(rap => rap.maCumRap === formik.values.maRap)?.tenCumRap}
                        </p>
                    </div>
                </div>
            </Modal>
        </div>

    )
}
