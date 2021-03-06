import React, { useEffect, useState } from 'react'
import { Form, Button, DatePicker, InputNumber } from 'antd';
import { http } from '../../../util/setting';
import { Select } from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import { taoLichChieuAction } from '../../../redux/actions/QuanLyDatVeAction';


export default function ShowTime(props) {

    const formik = useFormik({
        initialValues: {
            maPhim: props.match.params.id,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: ''
        },
        onSubmit: (values) => {
            console.log('values', values)
            taoLichChieuAction(values)
        }
    })

    const [state, setState] = useState({
        heThongRapChieu: [],
        cumRapChieu: []
    });

    useEffect(async () => {
        try {
            let result = await http.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
            setState({
                ...state, heThongRapChieu: result.data.content
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

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

    const handleChangeCumRap = value => {
        formik.setFieldValue('maRap', value)
    }

    const handleChangeDatePicker = (date, dateString) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(date).format('DD/MM/YYYY hh:mm:ss'))
    }

    const onOk = () => {

    }

    const handleChangeInputNumber = value => {
        formik.setFieldValue('giaVe', value)
    }

    let film = {};
    if (localStorage.getItem('filmParams')) {
        film = JSON.parse(localStorage.getItem('filmParams'))
    }

    return (
        <div>
            <h3 className="text-2xl mb-4 ml-16">T???o l???ch chi???u - {film.tenPhim}</h3>
            <div className="flex">
                <img src={film.hinhAnh} alt="..." width={200} className="w-1/4"/>
                <Form
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 10 }}
                    onSubmitCapture={formik.handleSubmit}
                    className="w-3/4"
                >

                    <Form.Item label="H??? th???ng r???p:">
                        <Select options={state.heThongRapChieu?.map((item, index) => ({ label: item.tenHeThongRap, value: item.maHeThongRap }))} onChange={handleChangeHeThongRap} placeholder="Ch???n h??? th???ng r???p" />
                    </Form.Item>
                    <Form.Item label="C???m r???p:">
                        <Select options={state.cumRapChieu.map((item, index) => ({ label: item.tenCumRap, value: item.maCumRap }))} onChange={handleChangeCumRap} placeholder="Ch???n c???m r???p" />
                    </Form.Item>
                    <Form.Item label="Ng??y chi???u gi??? chi???u:">
                        <DatePicker showTime onChange={handleChangeDatePicker} onOk={onOk} />
                    </Form.Item>
                    <Form.Item label="Gi?? v??:">
                        <InputNumber onChange={handleChangeInputNumber} />
                    </Form.Item>
                    <Form.Item label="Ch???c n??ng:">
                        <Button type="primary" htmlType="submit">
                            T???o l???ch chi???u
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    )
}
