import React, { useEffect } from 'react'
import { Tabs } from 'antd';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { layThongTinLichChieuHeThongRapAction } from '../../../redux/actions/QuanLyRapAction';

export default function Cinema(props) {
    const { TabPane } = Tabs;
    const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layThongTinLichChieuHeThongRapAction());
    }, [dispatch])

    return (
        <div className="hidden xl:w-3/5 md:block lg:w-3/4 md:w-5/6 mx-auto my-10 cinema-tabs">
            <Tabs tabPosition="left">
                {heThongRapChieu.map((heThongRapChieu, index) => {
                    return <TabPane key={index} tab={<img src={heThongRapChieu.logo} alt={heThongRapChieu.maHeThongRap} className="rounded-full" width={50} />}>
                        <Tabs defaultActiveKey="1" tabPosition="left" style={{ height: 500,padding:0 }}>

                            {heThongRapChieu.lstCumRap.map((cumRap, index) => {
                                return <TabPane key={cumRap.maCumRap} tab={
                                    <div className="flex items-center">
                                        <img src={cumRap.hinhAnh} alt={cumRap.tenCumRap} style={{ width: '50px', height: '50px' }} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/50" }} />
                                        <div className="lg:ml-2 ml-1 text-left md:w-32 lg:w-56">
                                            <p className="text-gray-800 font-bold text-xs lg:text-sm lg:block hidden">{cumRap.tenCumRap.length > 30 ? cumRap.tenCumRap.substr(0, 30) + '...' :cumRap.tenCumRap}</p>
                                            <p className="text-gray-800 font-bold text-xs lg:text-sm lg:hidden block">{cumRap.tenCumRap.length > 20 ? cumRap.tenCumRap.substr(0, 20) + '...' :cumRap.tenCumRap}</p>
                                            <p className="text-gray-500 text-xs lg:block hidden">{cumRap.diaChi.length > 40 ? cumRap.diaChi.substr(0, 40) + '...' : cumRap.diaChi}</p>
                                            <p className="text-gray-500 text-xs">{cumRap.diaChi.length > 20 ? cumRap.diaChi.substr(0, 20) + '...' : cumRap.diaChi}</p>
                                            <a href="https://tix.vn/rap-chieu-phim/28-bhd-star-cineplex-icon-68" className="text-xs" style={{ color: '#fa5238' }}>[chi tiết]</a>
                                        </div>
                                    </div>}>
                                    <div style={{ height: '500px', overflow: 'auto' }}>
                                        {cumRap.danhSachPhim.map((phim) => {
                                            return <div className="mx-2 my-4 flex items-center justify-start" key={phim.tenPhim}>
                                                <div className="w-20 h-28 block" style={{
                                                    minWidth:'80px',
                                                    backgroundImage: `url(${phim.hinhAnh})`,
                                                    backgroundSize: "cover",
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundPosition: "center",
                                                }}></div>
                                                <div className="ml-2">
                                                    <NavLink to={`/detail/${phim.maPhim}`} className="text-lg font-bold cursor-pointer" style={{ color: '#fa5238' }}>
                                                        {phim.tenPhim}
                                                    </NavLink>
                                                    <p className="text-xs font-base mb-1">{cumRap.diaChi}</p>
                                                    <div className="grid grid-cols-3 gap-1 lg:grid-cols-6">
                                                        {phim.lstLichChieuTheoPhim.slice(0, 12).map((lichChieu, index2) => {
                                                            return <NavLink key={index2} className="text-xs text-gray-800 font-semibold px-1 py-2 bg-gradient-to-tl from-white to-gray-200 rounded border hover:text-green-500" to={`/checkout/${lichChieu.maLichChieu}`}>
                                                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                            </NavLink>
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                </TabPane>
                            })}
                        </Tabs>
                    </TabPane>
                })}
            </Tabs>
        </div >
    )
}
