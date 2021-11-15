import React, { useEffect } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/styles/circle.scss";
import { Tabs} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { layThongTinChiTietPhimAction } from "../../redux/actions/QuanLyRapAction";
import moment from "moment";
import { Rate } from "antd";
import {NavLink} from 'react-router-dom'
const { TabPane } = Tabs;

export default function Detail(props) {
  
  const {filmDetail} = useSelector(state => state.QuanLyPhimReducer)
  console.log({ filmDetail });
  const dispatch = useDispatch();
  useEffect(() => {
    //lấy param từ url
    let { id } = props.match.params;
    console.log("id", id);
    dispatch(layThongTinChiTietPhimAction(id));
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <CustomCard
        style={{ paddingTop: 150, minHeight: "100vh" }}
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid grid-cols-12">
          <div className="col-span-5 col-start-3">
            <div className="grid grid-cols-2">
              <img src={filmDetail.hinhAnh} alt="..." />
              <div className="mt-20">
                <p className="text-sm">
                  Ngày chiếu:{" "}
                  {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
                </p>
                <p className="text-3xl mt-2">{filmDetail.tenPhim}</p>
                <p className="mt-4">{filmDetail.moTa}</p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <h1
              style={{
                marginLeft: "18%",
                color: "yellow",
                fontWeight: "bold",
                fontSize: "15px",
              }}
              className="mb-2"
            >
              Đánh giá
            </h1>
            <h1
              style={{ marginLeft: "6%" }}
              className="text-green-400 text-2xl mb-2"
            >
              <Rate
                allowHalf
                value={filmDetail.danhGia / 2}
                style={{ color: "#78ed78", fontSize: 30 }}
              />
            </h1>
            <div className={`c100 p${filmDetail.danhGia * 10} big dark`}>
              <span>{filmDetail.danhGia * 10}%</span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 ml-72 w-2/3 container bg-white px-5 py-5">
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab="Lịch chiếu" key="1">
              <div>
                <Tabs tabPosition={"left"}>
                  {filmDetail.heThongRapChieu?.map((htr, index) => {
                    return (
                      <TabPane
                        tab={
                          <div className="flex flex-row items-center justify-center">
                            <img
                              src={htr.logo}
                              className="rounded-full"
                              width="50" alt="..."
                            />
                            <div className="text-center ml-2">
                              {htr.tenHeThongRap}
                            </div>
                          </div>
                        }
                        key={index}
                      >
                        {htr.cumRapChieu?.map((cumRap, index) => {
                          return (
                            <div className="m-2  flex" key={index}>
                                <img
                                  style={{ width: 50, height: 50 }}
                                  src={cumRap.hinhAnh} alt="..."
                                />
                                <div className="ml-2">
                                  <h4 className="text-xl text-green-700">
                                    
                                    {cumRap.tenCumRap}
                                  </h4>
                                  <p className="text-sm text-gray-400">
                                
                                    {cumRap.diaChi}
                                  </p>
                                
                              <div className="thong-tin-lich-chieu grid grid-cols-6 gap-4">
                                  {cumRap.lichChieuPhim?.slice(0,12).map((lichChieu,index) => {
                                    return <NavLink to="/" key={index} className="text-base text-green-400">
                                      {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                    </NavLink>
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
            <TabPane tab="Thông tin" key="2">
              Thông tin
            </TabPane>
            <TabPane tab="Đánh giá" key="3">
              Đánh giá
            </TabPane>
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
}
