import React, { useState, useEffect } from "react";
import { Tabs } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Input, Button } from "antd";
import _ from "lodash";
import { Table } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { history } from "../../App";
import {
  capNhatThongTinNguoiDung,
  layThongTinNguoiDungUserAction,
} from "../../redux/actions/QuanLyNguoiDungAction";
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import moment from "moment";
import { uniqueId } from "lodash";

export default function Profile(props) {
  const { TabPane } = Tabs;
  // const { arrTypeUser } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { thongTinNguoiDungUser } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  const { thongTinDatVe } = thongTinNguoiDungUser;
  console.log({ thongTinDatVe });
  const seat = _.first(thongTinNguoiDungUser.thongTinDatVe);
  console.log("seat", seat);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layThongTinNguoiDungUserAction());
  }, [dispatch]);
  const columns = [
    {
      title: "Mã vé",
      dataIndex: "maVe",
      sorter: (a, b) => a.maVe - b.maVe,
      sortDirections: ["descend"],
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => a.tenPhim - b.tenPhim,
      sortDirections: ["descend"],
    },
    {
      title: "Ngày Đặt",
      dataIndex: "ngayDat",
      render: (text, thongTinDatVe, index) => {
        return (
          <Fragment key={index}>
            {moment(thongTinDatVe.ngayDat).format("DD/MM/YYYY")} -{" "}
            {moment(thongTinDatVe.ngayDat).format("hh:mm A")}
          </Fragment>
        );
      },
    },
  ];
  const data = thongTinDatVe;
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: thongTinNguoiDungUser.taiKhoan,
      matKhau: thongTinNguoiDungUser.matKhau,
      email: thongTinNguoiDungUser.email,
      soDT: thongTinNguoiDungUser.soDT,
      maNhom: thongTinNguoiDungUser.maNhom,
      maLoaiNguoiDung: thongTinNguoiDungUser.maLoaiNguoiDung,
      hoTen: thongTinNguoiDungUser.hoTen,
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Tài khoản không được bỏ trống!"),
      matKhau: Yup.string()
        .required("Mật khẩu không được bỏ trống !")
        .min(6, "Mật khẩu từ 6-32 ký tự")
        .max(32, "Mật khẩu từ 6 - 32 ký tự"),
      email: Yup.string()
        .required("Email không được bỏ trống !")
        .email("Email không đúng định dạng !"),
      hoTen: Yup.string()
        .required("Họ tên không được bỏ trống !")
        .matches(
          /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
          "Họ tên không được chứa số !"
        ),
      soDT: Yup.string()
        .required("Số điện thoại không được bỏ trống !")
        .matches(
          /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3,4}[\s.-]?\d{4}$/,
          "Số điện thoại phải đúng định dạng!"
        ),
    }),
    onSubmit: (values) => {
      console.log({ values });
      dispatch(capNhatThongTinNguoiDung(values));
    },
  });
  function callback(key) {
    console.log(key);
  }

  return (
    <div className="md:w-full md:flex profile">
      <div className="container mx-auto p-5 ">
        <div className="md:flex no-wrap md:-mx-2 mt-20 ">
          {/* Left Side */}
          <div className="w-full md:w-3/12 md:mx-2">
            <div
              className="capitalize  text-center h-32 w-32 rounded-full bg-indigo-400 object-cover mt-2 mb-6 text-white text-6xl transition
				duration-500 ease-in-out ml-20"
              style={{ lineHeight: "2" }}
            >
              {thongTinNguoiDungUser.taiKhoan?.slice(0, 1)}
            </div>
            <h1 className="text-center text-4xl mb-10 uppercase mr-20">
              {thongTinNguoiDungUser.taiKhoan}
            </h1>
            <div className="divide-y divide-light-blue-400 ">
              <div className="text-xl mb-2 uppercase">Thẻ quà tặng</div>
              <div className="text-xl mb-2 uppercase">coupon</div>
              <div className="text-xl mb-2 uppercase">Voucher</div>
            </div>
          </div>
          <div className="w-full md:w-9/12 mx-2 min-h-screen md:h-screen">
            {/* Right Section */}
            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="THÔNG TIN TÀI KHOẢN" key="1">
                <Form
                  onSubmitCapture={formik.handleSubmit}
                  labelCol={{
                    span: 4,
                  }}
                  wrapperCol={{
                    span: 14,
                  }}
                >
                  <Form.Item label="Tài khoản">
                    <Input
                      disabled
                      name="taiKhoan"
                      onChange={formik.handleChange}
                      value={formik.values.taiKhoan}
                    />
                    {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                      <div className="text-red-500">
                        {formik.errors.taiKhoan}
                      </div>
                    ) : null}
                  </Form.Item>
                  <Form.Item label="Mật khẩu">
                    <Input
                      name="matKhau"
                      onChange={formik.handleChange}
                      value={formik.values.matKhau}
                    />
                    {formik.touched.matKhau && formik.errors.matKhau ? (
                      <div className="text-red-500">
                        {formik.errors.matKhau}
                      </div>
                    ) : null}
                  </Form.Item>
                  <Form.Item label="Họ tên">
                    <Input
                      name="hoTen"
                      onChange={formik.handleChange}
                      value={formik.values.hoTen}
                    />
                    {formik.touched.hoTen && formik.errors.hoTen ? (
                      <div className="text-red-500">{formik.errors.hoTen}</div>
                    ) : null}
                  </Form.Item>
                  <Form.Item label="Email">
                    <Input
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500">{formik.errors.email}</div>
                    ) : null}
                  </Form.Item>
                  <Form.Item label="Số điện thoại">
                    <Input
                      name="soDT"
                      onChange={formik.handleChange}
                      value={formik.values.soDT}
                    />
                    {formik.touched.soDT && formik.errors.soDT ? (
                      <div className="text-red-500">{formik.errors.soDT}</div>
                    ) : (
                      ""
                    )}
                  </Form.Item>

                  <div className="text-center flex justify-between w-3/4">
                    <Button
                      type="primary"
                      htmlType="button"
                      className="mr-2"
                      onClick={history.goBack}
                    >
                      <ArrowLeftOutlined /> Go back
                    </Button>
                    <Button type="primary" htmlType="submit" className="mr-2">
                      Cập nhật thông tin
                    </Button>
                  </div>
                </Form>
              </TabPane>
              <TabPane tab="LỊCH SỬ ĐẶT VÉ" key="2">
                <Table
                  className="components-table-demo-nested"
                  columns={columns}
                  rowKey={uniqueId}
                  dataSource={data}
                />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
