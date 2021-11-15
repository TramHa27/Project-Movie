import React, { useEffect } from 'react'
import { Tabs } from 'antd';

import { useDispatch, useSelector } from 'react-redux';

import MultipleRowSlick from '../../../components/RSlick/MultipleRowSlick';
import { layDanhSachPhimAction } from '../../../redux/actions/QuanlyPhimAction';



export default function HomeMenu(props) {
    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);

    const arrFilmDangChieu = arrFilm.filter(phim => phim.dangChieu);
    const arrFilmSapChieu = arrFilm.filter(phim => phim.sapChieu);
    const arrFilmHot = arrFilm.filter(phim => phim.hot);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachPhimAction());
    }, [dispatch]);

    const { TabPane } = Tabs;


    return (
        <div className="container mt-2">
            <Tabs defaultActiveKey="1">
                <TabPane tab="Phim đang chiếu" key="1">
                    <MultipleRowSlick arrFilm={arrFilmDangChieu} />
                </TabPane>
                <TabPane tab="Phim sắp chiếu" key="2">
                    <MultipleRowSlick arrFilm={arrFilmSapChieu} />
                </TabPane>
                <TabPane tab="Phim hot" key="3">
                    <MultipleRowSlick arrFilm={arrFilmHot} />
                </TabPane>
            </Tabs>

        </div>
    )
}
