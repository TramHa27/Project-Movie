import React, { useEffect } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/styles/circle.scss";
import { Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { layThongTinChiTietPhimAction } from "../../redux/actions/QuanLyRapAction";
import moment from "moment";
import { Rate } from "antd";
import { NavLink } from "react-router-dom";
const { TabPane } = Tabs;

export default function Detail(props) {
  const { filmDetail } = useSelector((state) => state.QuanLyPhimReducer);
  console.log({ filmDetail });
  const dispatch = useDispatch();
  useEffect(() => {
    //lấy param từ url
    let { id } = props.match.params;
    console.log("id", id);
    dispatch(layThongTinChiTietPhimAction(id));
  }, [dispatch]);

  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="detail"
    >
      <CustomCard
        className="min-h-screen"
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid md:grid-cols-12 grid-cols-6 my-20">
          <div className="md:col-span-5 col-span-7 md:col-start-3">
            <div className="grid md:grid-cols-3 gap-4">
              <img className="col-span-1 md:col-span-1 ml-5" src={filmDetail.hinhAnh} alt="..." />
              <div className="col-span-2 md:col-span-2 ml-5 mt-2">
                <p className="text-sm">
                  Ngày chiếu:{" "}
                  {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
                </p>
                <p className="text-3xl mt-2">{filmDetail.tenPhim}</p>
                <p>Mô tả:</p>
                <p className="mt-2">{filmDetail.moTa}</p>
              </div>
            </div>
          </div>
          <div className="col-span-5 mt-4 ml-10">
            <div className="detail__rate">
              <div
                className={`c100 p${filmDetail.danhGia * 10} big mx-auto`}
              >
                <span className="text-white">{filmDetail.danhGia * 10}%</span>
                <div className="slice">
                  <div className="bar" />
                  <div className="fill" />
                </div>
              </div>
              <div
                className="text-green-400 text-2xl mb-2"
              >
                <Rate
                  allowHalf
                  value={filmDetail.danhGia / 2}
                  style={{ color: "#ffb400", fontSize: 20, textAlign: 'center' }}
                />
                <p className="text-center text-white">Đánh giá</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 container mx-auto bg-white p-5">
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Lịch chiếu" key="1">
              <div>
                <Tabs tabPosition={"left"}>
                  {filmDetail.heThongRapChieu?.map((htr, index) => {
                    return (
                      <TabPane
                        tab={
                          <div className="text-center mx-auto">
                            <img
                              src={htr.logo}
                              className="mx-auto rounded-full"
                              width="50"
                              alt="..."
                            />
                              {htr.tenHeThongRap}
                          </div>
                        }
                        key={index}
                      >
                        {htr.cumRapChieu?.map((cumRap, index) => {
                          return (
                            <div className="m-2 flex" key={index}>
                              <img
                                style={{ width: 50, height: 50 }}
                                src={cumRap.hinhAnh}
                                alt="..."
                              />
                              <div className="ml-2">
                                <h4 className="text-xl text-green-700">
                                  {cumRap.tenCumRap}
                                </h4>
                                <p className="text-sm text-black">
                                  {cumRap.diaChi}
                                </p>

                                <div className="thong-tin-lich-chieu grid grid-cols-6 gap-4">
                                  {cumRap.lichChieuPhim
                                    ?.slice(0, 12)
                                    .map((lichChieu, index) => {
                                      return (
                                        <NavLink
                                          to={`/checkout/${lichChieu.maLichChieu}`}
                                          key={index}
                                          className="text-base text-green-400 mb-2"
                                        >
                                          {moment(
                                            lichChieu.ngayChieuGioChieu
                                          ).format("hh:mm A")}
                                        </NavLink>
                                      );
                                    })}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </TabPane>
                    );
                  })}
                </Tabs>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
}
