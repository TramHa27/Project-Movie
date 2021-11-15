import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik'
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
import { Fragment } from 'react';



import { GROUP_ID } from '../../../util/setting';
import { useDispatch, useSelector } from 'react-redux';
import { capNhatPhimUploadAction, layThongTinPhimAction } from '../../../redux/actions/QuanlyPhimAction';
import moment from 'moment';

export default function EditFilm(props) {

  const [componentSize, setComponentSize] = useState('default');

  const [imgSrc, setImgSrc] = useState('')

  const dispatch = useDispatch();
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layThongTinPhimAction(id));
  }, [])

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
          if(values.hinhAnh !== null){
            frmData.append('File', values.hinhAnh, values.hinhAnh.name)
          }
        }
      }
      dispatch(capNhatPhimUploadAction(frmData));

    }
  })

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleChangeDatePicker = (date, dateString) => {
    formik.setFieldValue('ngayKhoiChieu', moment(dateString,"DD/MM/YYYY"))
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
    <Fragment>
      <h3>Thêm phim</h3>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên phim">
          <Input name="tenPhim" onChange={formik.handleChange} value={formik.values.tenPhim} />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input name="moTa" onChange={formik.handleChange} value={formik.values.moTa} />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name="trailer" onChange={formik.handleChange} value={formik.values.trailer} />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker name="ngayKhoiChieu" format="DD/MM/YYYY" onChange={handleChangeDatePicker} value={moment(formik.values.ngayKhoiChieu)} />
        </Form.Item>
        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch name="dangChieu" onChange={(checked) => { handleChangeSwitch('dangChieu', checked) }} checked={formik.values.dangChieu} />
        </Form.Item>
        <Form.Item label="sắp chiếu" valuePropName="checked" >
          <Switch name="sapChieu" onChange={(checked) => { handleChangeSwitch('sapChieu', checked) }} checked={formik.values.sapChieu} />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch name="Hot" onChange={(checked) => { handleChangeSwitch('hot', checked) }} checked={formik.values.hot} />
        </Form.Item>
        <Form.Item label="Đánh giá">
          <InputNumber name="danhGia" onChange={(value) => { formik.setFieldValue('danhGia', value) }} value={formik.values.danhGia} />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <input type="file" name="hinhAnh" onChange={handleChangeFile} accept="image/png, image/jpg, image.jpeg,image/gif " />
          <img style={{ width: 200 }} className="mt-2" src={imgSrc === '' ? thongTinPhim.hinhAnh : imgSrc} alt="..." />
        </Form.Item>
        <Form.Item label="Chức năng">
          <button className="btn btn-outline-primary" type="submit">Cập nhật</button>
        </Form.Item>
      </Form>
    </Fragment>
  )
}