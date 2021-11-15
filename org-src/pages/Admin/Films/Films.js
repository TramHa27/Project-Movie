import React, { useEffect } from 'react'
import { Button, Table } from 'antd';
import { Input } from 'antd';
import { AudioOutlined, EditOutlined, DeleteOutlined, CalendarOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { uniqueId } from 'lodash';
import { layDanhSachPhimAction, xoaPhimAction } from '../../../redux/actions/QuanlyPhimAction';
import { history } from '../../../App';

const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);


const onChange = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
}

export default function Films(props) {

    const { arrFilm } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachPhimAction());
    }, [])

    const onSearch = value => {
        // console.log(value)
        dispatch(layDanhSachPhimAction(value));
    };

    const data = arrFilm;

    const columns = [
        {
            title: 'Mã phim',
            dataIndex: 'maPhim',
            sorter: (a, b) => a.maPhim - b.maPhim,
            sortDirections: ['descend', 'ascend'],
            width: '10%',
            key: 1
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            render: (text, film, index) => {
                return <Fragment key={index}>
                    <img src={film.hinhAnh} alt={film.tenPhim} width={50} height={50} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/50" }} />
                </Fragment>
            },
            width: '10%',
            key: 2
        },
        {
            title: 'Tên phim',
            dataIndex: 'tenPhim',
            sorter: (a, b) => {
                let tenPhimA = a.tenPhim.toLowerCase().trim();
                let tenPhimB = b.tenPhim.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            with: '20%',
            key: 3
        }, {
            title: 'Mô tả',
            dataIndex: 'moTa',
            render: (text, film, index) => {
                return <Fragment key={index}>
                    {film.moTa.length > 50 ? film.moTa.substr(0, 50) + '...' : film.moTa}
                </Fragment>
            },
            sorter: (a, b) => {
                let moTaA = a.moTa.toLowerCase().trim();
                let moTaB = b.moTa.toLowerCase().trim();
                if (moTaA > moTaB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            width: '40%',
            key: 4
        },
        {
            title: 'Hành động',
            dataIndex: 'hanhDong',
            render: (text, film, index) => {
                return <Fragment key={index}>
                    <NavLink className="mr-2 text-2xl" to={`/admin/films/edit/${film.maPhim}`}><EditOutlined /></NavLink>
                    <span className="mr-2 text-2xl text-red-500" style={{ cursor: 'pointer' }} onClick={() => {
                        if (window.confirm('Bạn có muốn xoá phim ' + film.tenPhim)) {
                            // console.log(film.maPhim)
                            xoaPhimAction(film.maPhim);
                        }
                    }}><DeleteOutlined /></span>
                    <NavLink className="mr-2 text-2xl text-green-500" to={`/admin/films/showtime/${film.maPhim}`} onClick={() => {
                        localStorage.setItem('filmParams', JSON.stringify(film))
                    }}><CalendarOutlined /></NavLink>

                </Fragment>
            },
            width: '20%',
            align: 'center',
            key: 5
        },
    ];



    return (
        <div>
            <h3 className="text-3xl">Quản lý phim</h3>
            <Button className="my-3" type="primary" onClick={()=>{
                history.push('/admin/addfilm');
            }}>Thêm phim</Button>
            <Search
                className="w-50 mb-3 block"
                placeholder="Nhập tên phim"
                enterButton="Tìm"
                size="large"
                suffix={suffix}
                onSearch={onSearch}
            />
            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={uniqueId} />
        </div>
    )
}