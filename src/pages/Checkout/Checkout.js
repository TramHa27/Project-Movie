import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  datGheAction,
  DatVeAction,
  layChiTietPhongVeAction,
} from "../../redux/actions/QuanLyDatVeAction";
import style from "./Checkout.module.css";
import "./Checkout.css";
import {
  CloseOutlined,
  UserOutlined,
  CheckOutlined,
  TeamOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import {
  CHANGE_TAB_ACTIVE,
  DAT_GHE,
  DAT_VE,
} from "../../redux/types/QuanLyDatVeType";
import _, { result } from "lodash";
import { ThongTinDatVe } from "../../_cores/models/ThongTinDatVe";
import { Button, Tabs } from "antd";
import { layThongTinNguoiDungAction } from "../../redux/actions/QuanLyNguoiDungAction";
import moment from "moment";
import { connection } from "../../index";
import { history } from "../../../src/App";
import { ACCESS_TOKEN, USER_LOGIN } from "../../util/setting";
import { NavLink } from "react-router-dom";
import ChairOutlinedIcon from "@mui/icons-material/ChairOutlined";
import ChairOutlined from "@mui/icons-material/ChairOutlined";
import UserMenu from "../../templates/AdminTemplate/partials/header/UserMenu";

function Checkout(props) {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  const { chiTietPhongVe, danhSachGheDangDat, danhSachGheKhachDat } =
    useSelector((state) => state.QuanLyDatVeRuducer);
  // console.log({ danhSachGheDangDat });
  const dispatch = useDispatch();
  useEffect(() => {
    //Gọi hàm tạo ra 1 async function
    const action = layChiTietPhongVeAction(props.match.params.id);
    //dispatch function này đi
    dispatch(action);
    //Có 1 client nào thực hiện việc đặt vé thành công mình sẽ load lại danh sách phòng vé của lịch chiếu đó
    connection.on("datVeThanhCong", () => {
      dispatch(action);
    });
    //vừa vào trang load tất cả ghế của người khác đặt
    connection.invoke("loadDanhSachGhe", props.match.params.id);
    //Load danh sách ghế đang đặt từ sever về(lắng nghe tin hiệu từ server)
    connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
      console.log("danhSachGheKhachDat", dsGheKhachDat);
      //Bước 1: loại mình ra khỏi danh sách
      dsGheKhachDat = dsGheKhachDat.filter(
        (item) => item.taiKhoan !== userLogin.taiKhoan
      );
      //Bước 2: gộp danh sách ghế khách đặt ở tất cả user thành 1 mảng
      let arrGheKhachDat = dsGheKhachDat.reduce((result, item, index) => {
        let arrGhe = JSON.parse(item.danhSachGhe);
        return [...result, ...arrGhe];
      }, []);
      //ghế k bị trùng nhau, Đưa dữ liệu cập nhật lên redux
      arrGheKhachDat = _.uniqBy(arrGheKhachDat, "maGhe");
      //đưa dữ liệu ghế khách đặt về redux
      dispatch({
        type: DAT_GHE,
        arrGheKhachDat,
      });
      //Cài đặt sự kiện khi reload trang
      window.addEventListener("beforeunload", clearGhe);

      return () => {
        clearGhe();
        window.addEventListener("beforeunload", clearGhe);
      };
    });
  }, [dispatch]);
  // console.log({ chiTietPhongVe });

  const clearGhe = function (event) {
    connection.invoke("huyDat", userLogin.taiKhoan, props.match.params.id);
  };

  const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

  const renderSeats = () => {
    return danhSachGhe.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDangDat = "";
      //Kiểm tra từng ghế render xem có trong mảng ghế đang đặt hay không
      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );
      //Kiểm tra từng ghế render xem có phải ghế khách đặt hay không
      let classGheKhachDat = "";
      let indexGheKD = danhSachGheKhachDat.findIndex(
        (gheKD) => gheKD.maGhe === ghe.maGhe
      );
      if (indexGheKD !== -1) {
        classGheKhachDat = "gheKhachDat";
      }

      let classGheDaDuocDat = "";
      if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = "gheDaDuocDat";
      }

      if (indexGheDD != -1) {
        classGheDaDat = "gheDangDat";
      }
      return (
        <Fragment key={index}>
          <button
            onClick={() => {
              const action = datGheAction(ghe, props.match.params.id);
              dispatch(action);
            }}
            disabled={ghe.daDat || classGheKhachDat !== ""}
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} ${classGheKhachDat} text-center`}
            key={index}
          >
            {ghe.daDat ? (
              classGheDaDuocDat != "" ? (
                <UserOutlined style={{ marginBottom: 5, fontWeight: "bold" }} />
              ) : (
                <CloseOutlined
                  style={{ marginBottom: 5, fontWeight: "bold" }}
                />
              )
            ) : classGheKhachDat !== "" ? (
              <TeamOutlined style={{ marginBottom: 5, fontWeight: "bold" }} />
            ) : (
              ghe.stt
            )}
          </button>

          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="min-h-screen">
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-9">
          <div className="flex flex-col items-center mt-5">
            <div
              className="bg-black w-4/5"
              style={{ width: "75%", height: "15" }}
            >
              aadadaada{" "}
            </div>
            <div className={`${style["trapezoid"]}`}>
              <h3 className="mt-3 text-center font-bold">Màn hình</h3>
            </div>
            <div>{renderSeats()}</div>
          </div>

          <div className="mt-5 flex justify-center">
            <table
              className="min-w-full divide-y divide-gray-200 w-2/3"
              style={{ border: "none" }}
            >
              <thead className="bg-gray-50 p-5">
                <tr className="text-left pl-6">
                  <th>Ghế chưa đặt</th>
                  <th>Ghế đang đặt</th>
                  <th>Ghế VIP</th>
                  <th>Ghế đã đặt</th>
                  <th>Ghế đã được đặt</th>
                  <th>Ghế khách đang đặt</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td>
                    <button className="ghe text-center">
                      <ChairOutlinedIcon></ChairOutlinedIcon>
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheDangDat text-center">
                      <ChairOutlinedIcon></ChairOutlinedIcon>
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheVip text-center">
                      <ChairOutlinedIcon></ChairOutlinedIcon>
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheDaDat text-center">
                      <ChairOutlinedIcon></ChairOutlinedIcon>
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheDaDuocDat text-center">
                      <ChairOutlinedIcon></ChairOutlinedIcon>
                    </button>
                  </td>
                  <td>
                    <button className="ghe gheKhachDat text-center">
                      <ChairOutlinedIcon></ChairOutlinedIcon>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:col-span-3">
          <h3 className="text-green-400 text-center text-2xl my-3">
            THÔNG TIN ĐẶT VÉ
          </h3>
          <hr />
          <h3 className="text-xl mt-3">{thongTinPhim.tenPhim}</h3>
          <p>
            Địa điểm: {thongTinPhim.tenCumRap} - {thongTinPhim.tenRap}
          </p>
          <p className="mb-3">
            Ngày chiếu: {thongTinPhim.ngayChieu} - {thongTinPhim.gioChieu}
          </p>
          <hr />
          <div className="flex  justify-between align-center">
            <div className="w-4/5 font-semibold">
              Ghế
              {_.sortBy(danhSachGheDangDat, "stt").map((gheDD, index) => {
                return (
                  <div key={index}>
                    <div className="text-green-500 text-xl"> {gheDD.stt}</div>
                  </div>
                );
              })}
            </div>
            <div className="font-semibold">
              Giá
              <div>
                {danhSachGheDangDat?.map((gheDD, index) => {
                  return (
                    <div key={index}>
                      <div className="text-blue-600 text-xl">
                        {gheDD.giaVe.toLocaleString()}đ
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <hr />
          </div>
          <div className="flex justify-between">
            <div className="font-semibold my-auto">Thành Tiền:</div>
            <div className="text-3xl text-red-600">
              {danhSachGheDangDat
                .reduce((tongTien, ghe, index) => {
                  return (tongTien += ghe.giaVe);
                }, 0)
                .toLocaleString()}
              đ
            </div>
          </div>
          <hr />
          <div className="my-3">
            <i>Email</i> <br />
            {userLogin.email}
          </div>
          <hr />
          <div className="my-3">
            <i>Phone</i> <br />
            {userLogin.soDT}
          </div>
          <hr />
          <div className="mb-0 h-full flex flex-col items-center">
            <div
              onClick={() => {
                const thongTinDatVe = new ThongTinDatVe();
                thongTinDatVe.maLichChieu = props.match.params.id;
                thongTinDatVe.danhSachVe = danhSachGheDangDat;
                // console.log({thongTinDatVe});
                dispatch(DatVeAction(thongTinDatVe));
              }}
              className="bg-green-500 text-white w-full text-center py-2 font-bold text-xl cursor-pointer"
            >
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const { TabPane } = Tabs;
export default function CheckoutTab(props) {
  const { tabActive } = useSelector((state) => state.QuanLyDatVeRuducer);
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  useEffect(() => {
    return () => {
      dispatch({
        type: CHANGE_TAB_ACTIVE,
        number: "1",
      });
    };
  }, []);
  const operations = (
    <Fragment>
      {!_.isEmpty(userLogin) ? (
        <Fragment>
          <div className="flex items-center mt-4">
            {/* <Help /> */}
            {/*  Divider */}
            <hr className="w-px h-6 bg-gray-200 mx-3" />
            <UserMenu />
          </div>
        </Fragment>
      ) : (
        ""
      )}
    </Fragment>
  );
  return (
    <div className="p-2 checkout">
      <Tabs
        tabBarExtraContent={operations}
        defaultActiveKey="1"
        activeKey={tabActive}
        onChange={(key) => {
          dispatch({
            type: CHANGE_TAB_ACTIVE,
            number: key,
          });
        }}
      >
        <TabPane tab="01 CHỌN GHẾ & THANH TOÁN" key="1">
          <Checkout {...props} />
        </TabPane>
        <TabPane tab="02 KẾT QUẢ ĐẶT VÉ" key="2">
          <KetQuaDatVe {...props} />
        </TabPane>
        <TabPane
          tab={
            <NavLink className=" text-3xl" to="/">
              <HomeOutlined className=" mb-3" style={{ marginLeft: 10 }} />
            </NavLink>
          }
          key="3"
        ></TabPane>
      </Tabs>
    </div>
  );
}

function KetQuaDatVe(props) {
  const dispatch = useDispatch();
  const { thongTinNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungReducer
  );
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log("thongTinNguoiDung", thongTinNguoiDung);
  useEffect(() => {
    const action = layThongTinNguoiDungAction();
    dispatch(action);
  }, [dispatch]);

  const renderTicketItem = function () {
    return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
      const seats = _.first(ticket.danhSachGhe);
      return (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
              src={ticket.hinhAnh}
            />
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">
                {ticket.tenPhim}
              </h2>
              <p className="text-gray-500">
                Giờ chiếu: {moment(ticket.ngayDat).format("hh:mm A")} - Ngày
                chiếu: {moment(ticket.ngayDat).format("DD-MM-YYYY")}
              </p>
              <p className="text-gray-500">Địa điểm: {seats.tenHeThongRap}</p>
              <p className="text-gray-500">
                Tên rạp: {seats.tenCumRap} - Ghế:{" "}
                {ticket.danhSachGhe.map((ghe, index) => {
                  return <span key={index}>[ {ghe.tenGhe} ] </span>;
                })}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="p-5">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Lịch sử đặt vé khách hàng
            </h1>
          </div>
          <div className="flex flex-wrap -m-2">
            {renderTicketItem()}
            {/* <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p className="text-gray-500">UI Designer</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
