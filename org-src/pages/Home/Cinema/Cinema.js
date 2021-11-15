import React, { useEffect } from 'react'
import { Tabs } from 'antd';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachHeThongRapAction, layThongTinCumRapTheoHeThongAction } from '../../../redux/actions/QuanLyRapAction';
import moment from 'moment';

export default function Cinema(props) {
    const { TabPane } = Tabs;
    const { heThongRapChieu, cumRap } = useSelector(state => state.QuanLyRapReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachHeThongRapAction());
        dispatch(layThongTinCumRapTheoHeThongAction('BHDStar'))
    }, [dispatch])

    return (
        <div className="container" style={{ height: '700px' }}>
            <Tabs tabPosition="left" defaultActiveKey="BHDStar" onTabClick={(maHeThongRap) => {
                dispatch(layThongTinCumRapTheoHeThongAction(maHeThongRap));
            }}>

                {heThongRapChieu.map((heThongRapChieu, index) => {
                    return <TabPane key={heThongRapChieu.maHeThongRap} tab={<img src={heThongRapChieu.logo} alt={heThongRapChieu.biDanh} className="rounded-full" width={50} />}>
                        <Tabs tabPosition="left">

                            {cumRap.slice(0, 6).map((cumRap, index1) => {
                                return <TabPane key={index1} tab={
                                    <div className="flex items-center">
                                        <img src={cumRap.hinhAnh} alt={cumRap.tenCumRap} style={{ width: '50px', height: '50px' }} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/50" }} />
                                        <div className="ml-2 text-left">
                                            <p className="text-gray-800 text-base">{cumRap.tenCumRap}</p>
                                            <p className="text-gray-500 text-sm">{cumRap.diaChi.length > 50 ? cumRap.diaChi.substr(0, 50) + '...' : cumRap.diaChi}</p>
                                            <a href="/" className="text-red-500 text-sm">[chi tiết]</a>
                                        </div>
                                    </div>} style={{ padding: 0 }}>


                                    {cumRap.danhSachPhim.slice(0, 5).map((phim) => {
                                        return <div className="m-2 flex" key={phim.tenPhim}>
                                            <img src={phim.hinhAnh} alt={phim.tenPhim} style={{ width: '75px', height: 'auto' }} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75" }} />
                                            <div className="ml-2">
                                                <h4 className="text-xl text-green-700">{phim.tenPhim}</h4>
                                                <p className="font-semibold text-sm">{cumRap.diaChi}</p>
                                                <div className="grid grid-cols-6 gap-6">
                                                    {phim.lstLichChieuTheoPhim.slice(0, 12).map((lichChieu, index2) => {
                                                        return <NavLink key={index2} className="text-base text-green-400" to="/">
                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                        </NavLink>
                                                    })}

                                                </div>
                                            </div>
                                        </div>
                                    })}

                                </TabPane>

                            })}

                        </Tabs>
                    </TabPane>
                })}
            </Tabs>
        </div >
    )
}
