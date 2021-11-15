import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GROUP_ID } from "../../util/setting";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { dangKyNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";

export default function Register(props) {
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log("userLogin", userLogin);
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
      maNhom: GROUP_ID,
    },
    validationSchema: Yup.object().shape({
      hoTen: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "Name can not a number")
        .required("Name can not be empty!"),
      taiKhoan: Yup.string()
        .min(6, "Account name must be at least 6 characters")
        .max(20, "Account name must be at maximum 32 characters")
        .required("Account name can not be empty!"),
      matKhau: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .max(32, "Password must be at maximum 32 characters")
        .required("Password can not be empty!"),
      email: Yup.string()
        .email("Email is invalid!")
        .required("Email can not be empty!"),
      soDt: Yup.string()
        .min(6, "Phone number must be at least 6 characters")
        .matches(/^[0-9]+$/, "Phone number can not a character")
        .required("Phone number can not be empty!"),
    }),

    onSubmit: (values) => {
      dispatch(dangKyNguoiDungAction(values));
    },
  });
  return (
    <form
      onSubmit={(e) => {
        //chặn page F5 lại trang
        e.preventDefault();
        formik.handleSubmit(e);
      }}
      className="lg:w-1/2 xl:max-w-screen-sm"
    >
      <div className="py-12 lg:bg-white flex justify-center lg:justify-start lg:px-12">
        <NavLink to="/">
        <div className="flex items-center justify-center">
          <img
            src="https://i.imgur.com/lC22izJ.png"
            alt="logo"
            style={{ maxWidth: "40px" }}
          />
          <span className="text-xl font-bold text-red-600 ml-2">
            Movie Cybersoft
          </span>
        </div>
        </NavLink>
      </div>
      <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
        <h2
          className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                xl:text-bold"
        >
          Đăng ký
        </h2>
        <div className="mt-12">
          <div>
            <div>
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Tên tài khoản
              </div>
              <input
                name="taiKhoan"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Your account name"
              />
              {formik.errors.taiKhoan && formik.touched.taiKhoan ? (
                <div className="text-red-500">{formik.errors.taiKhoan}</div>
              ) : (
                ""
              )}
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Mật khẩu
                </div>
                <div>
                  {/* <a
                      className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                    cursor-pointer"
                    >
                      Forgot Password?
                    </a> */}
                </div>
              </div>
              <input
                type="password"
                name="matKhau"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Enter your password"
              />
              {formik.errors.matKhau && formik.touched.matKhau ? (
                <div className="text-red-500">{formik.errors.matKhau}</div>
              ) : (
                ""
              )}
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Tên
              </div>
              <input
                name="hoTen"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Your name"
              />
              {formik.errors.hoTen && formik.touched.hoTen ? (
                <div className="text-red-500">{formik.errors.hoTen}</div>
              ) : (
                ""
              )}
            </div>
            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Email
              </div>
              <input
                name="email"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Your email"
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : (
                ""
              )}
            </div>

            <div className="mt-8">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Số điện thoại
              </div>
              <input
                name="soDt"
                onChange={formik.handleChange}
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                placeholder="Your phone number"
              />
              {formik.errors.soDt && formik.touched.soDt ? (
                <div className="text-red-500">{formik.errors.soDt}</div>
              ) : (
                ""
              )}
            </div>

            <div className="mt-10">
              <button
                // type="button"
                className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                            font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                            shadow-lg"
              >
                Đăng ký
              </button>
            </div>
          </div>
          <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
            Bạn đã có tài khoản ?{" "}
            <NavLink
              to="/login"
              className="cursor-pointer text-indigo-600 hover:text-indigo-800"
            >
              Đăng nhập
            </NavLink>
          </div>
        </div>
      </div>
    </form>
  );
}
