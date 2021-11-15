import React, { useEffect } from 'react'
import { Table } from 'antd';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { uniqueId } from 'lodash';
import { layDanhSachNguoiDungAction, xoaNguoiDung } from '../../../redux/actions/QuanLyNguoiDungAction';
import { SET_THONG_TIN_NGUOI_DUNG_ADMIN } from '../../../redux/types/QuanLyNguoiDungType';

const { Search } = Input;


const onChange = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
}

export default function Users(props) {

    const { arrUser } = useSelector(state => state.QuanLyNguoiDungReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(layDanhSachNguoiDungAction());
    }, [dispatch])

    const onSearch = value => {
        // console.log(value)
        dispatch(layDanhSachNguoiDungAction(value));
    };

    let datArrUser = arrUser.map((item, index) => {
        return { ...item, index: index + 1 }
    })

    const data = datArrUser;



    const columns = [
        {
            title: '#',
            dataIndex: 'index',
            key: 1,
            width: '10%',
            className: 'text-xs md:text-sm'
        },
        

        {
            title: 'Account Name',
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
            key: 2,
            width: '15%',
            className: 'text-xs md:text-sm'

        },
        {
            title: 'Password',
            dataIndex: 'matKhau',
            key: 3,
            width: '15%',
            ellipsis: true,
            className: 'text-xs md:text-sm'
        },
        {
            title: 'Full Name',
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
            key: 4,
            width: 140,
            ellipsis: true,
            className: 'text-xs md:text-sm',
            responsive:["lg"]
        },
        {
            title: 'Email',
            dataIndex: 'email',
            with: '20%',
            key: 5,
            width: '15%',
            ellipsis: true,
            className: 'text-xs md:text-sm',
            responsive:["lg"]
        },
        {
            title: 'Phone Number',
            dataIndex: 'soDt',
            key: 6,
            width: '15%',
            ellipsis: true,
            className: 'text-xs md:text-sm',
            responsive:["lg"]
        },
        {
            title: 'Actions',
            dataIndex: 'hanhDong',
            render: (text, record, index) => {
                return <Fragment key={index}>
                    <NavLink className="mr-2 text-xl text-gray-600 hover:text-gray-800 transition-all ease-in duration-200" to={`/admin/edituser`} onClick={() => {
                        dispatch({
                            type: SET_THONG_TIN_NGUOI_DUNG_ADMIN,
                            userModify: record
                        })
                    }}>
                        <i className="fa fa-user-edit"></i>
                    </NavLink>

                    <button className="text-xl text-gray-600 hover:text-red-500 transition-all ease-in duration-200" onClick={() => {
                        if (window.confirm('Bạn có muốn xoá tài khoản ' + record.taiKhoan)) {
                            xoaNguoiDung(record.taiKhoan);
                        }
                        dispatch(layDanhSachNguoiDungAction());
                    }}>
                        <i className="fas fa-eraser"></i>
                    </button>
                </Fragment>
            },
            align: 'center',
            key: 7,
            width: '15%',
            className: 'text-xs md:text-sm'
        },
    ];



    return (
        <div className="users w-full">
            <header className="flex justify-between p-3 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800 text-lg">Accounts</h2>
                <Search placeholder="Search account ..." size="middle" allowClear="true" onSearch={onSearch} style={{ width: 200, outline: 'none' }} />
            </header>
            <div className="w-full">
                <Table columns={columns} dataSource={data} onChange={onChange} rowKey={uniqueId} />
            </div>
        </div>
    )
}