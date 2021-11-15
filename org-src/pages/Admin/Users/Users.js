import React, { useEffect } from 'react'
import { Button, Table } from 'antd';
import { Input } from 'antd';
import { AudioOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { uniqueId } from 'lodash';
import {  layDanhSachNguoiDungAction } from '../../../redux/actions/QuanLyNguoiDungAction';

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

export default function Users(props) {

    const { arrUser } = useSelector(state => state.QuanLyNguoiDungReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachNguoiDungAction());
    }, [])

    const onSearch = value => {
        // console.log(value)
        dispatch(layDanhSachNguoiDungAction(value));
    };

    const data = arrUser;

    const columns = [
        {
            title: 'STT',
            dataIndex: '',
            width: '5%',
            key: 1
        },

        {
            title: 'Tài khoản',
            dataIndex: 'taiKhoan',
            sorter: (a, b) => {
                let tenPhimA = a.taiKhoan.toLowerCase().trim();
                let tenPhimB = b.taiKhoan.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            with: '20%',
            key: 2
        },
        {
            title: 'Mật khẩu',
            dataIndex: 'matKhau',
            with: '20%',
            key: 2
        },
        {
            title: 'Họ tên',
            dataIndex: 'hoTen',
            sorter: (a, b) => {
                let tenPhimA = a.hoTen.toLowerCase().trim();
                let tenPhimB = b.hoTen.toLowerCase().trim();
                if (tenPhimA > tenPhimB) {
                    return 1;
                }
                return -1;
            },
            sortDirections: ['descend', 'ascend'],
            with: '20%',
            key: 2
        },
        {
            title: 'Email',
            dataIndex: 'email',
            with: '20%',
            key: 2
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'soDt',
            with: '20%',
            key: 2
        },
        {
            title: 'Thao tác',
            dataIndex: 'hanhDong',
            render: (text, film, index) => {
                return <Fragment key={index}>
                    <NavLink className="mr-2 text-2xl" to={`/admin/films`}><EditOutlined /></NavLink>
                    
                    <NavLink className="mr-2 text-2xl text-red-500" to={`/admin/films`}><CloseOutlined /></NavLink>
                </Fragment>
            },
            width: '10%',
            align: 'center',
            key: 5
        },
    ];



    return (
        <div>
            <h3 className="text-3xl mb-3">Quản lý người dùng</h3>
            <Search
                className="w-50 mb-3 block"
                placeholder="Nhập vào tài khoản hoặc họ tên người dùng"
                enterButton="Tìm"
                size="large"
                suffix={suffix}
                onSearch={onSearch}
            />
            <Table columns={columns} dataSource={data} onChange={onChange} rowKey={uniqueId} />
        </div>
    )
}