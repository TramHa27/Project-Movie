import React, { useState } from 'react';
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
import { themPhimAction } from '../../../redux/actions/QuanlyPhimAction';

export default function AddFilm(prop) {

  const [componentSize, setComponentSize] = useState('default');

  const [imgSrc, setImgSrc] = useState('https://picsum.photos/200/200')

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

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

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
          <Input name="tenPhim" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input name="moTa" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name="trailer" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker name="ngayKhoiChieu" format="DD/MM/YYYY" onChange={handleChangeDatePicker} />
        </Form.Item>
        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch name="dangChieu" onChange={(checked) => { handleChangeSwitch('dangChieu', checked) }} />
        </Form.Item>
        <Form.Item label="sắp chiếu" valuePropName="checked" >
          <Switch name="sapChieu" onChange={(checked) => { handleChangeSwitch('sapChieu', checked) }} />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch name="Hot" onChange={(checked) => { handleChangeSwitch('hot', checked) }} />
        </Form.Item>
        <Form.Item label="Đánh giá">
          <InputNumber name="danhGia" onChange={(value) => { formik.setFieldValue('danhGia', value) }} />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <input type="file" name="hinhAnh" onChange={handleChangeFile} accept="image/png, image/jpg, image.jpeg,image/gif " />
          <img style={{ width: 200 }} className="mt-2" src={imgSrc} alt="..." />
        </Form.Item>
        <Form.Item label="Chức năng">
          <button className="btn btn-outline-primary" type="submit">Thêm phim</button>
        </Form.Item>
      </Form>
    </Fragment>
  )
}