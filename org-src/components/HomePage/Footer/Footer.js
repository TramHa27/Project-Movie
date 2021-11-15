import React from 'react'
import { useSelector } from 'react-redux'

export default function Footer(props) {
    const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer)

    return (
        <footer className="text-gray-600 body-font bg-gray-100">
            <div className="container px-5 py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex flex-col title-font font-medium items-center md:justify-start justify-center text-gray-900" href="/">
                        <img src="https://i.imgur.com/lC22izJ.png" alt="logo" style={{ maxWidth: '70px' }} />
                        <p className="ml-3 text-xl">Movie Cybersoft</p>
                    </a>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">MOVIE CYBERSOFT</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" href="/">FAQ</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" href="/">Brand Guidelines</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" href="/">Thỏa thuận sử dụng</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800" href="/">Chính sách bảo mật</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">ĐỐI TÁC</h2>
                        <div className="grid grid-cols-3 justify-items-center">
                            {heThongRapChieu.map((item, index) => {
                                return <a key={index} className="w-8 mr-3 mb-3 inline-block" href="/" >
                                    <img src={item.logo} alt="..." />
                                </a>
                            })}

                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">MOBILE APP</h2>
                        <div className="flex justify-center">
                            <a className="w-8 mr-3" href="/" >
                                <img src="https://tix.vn/app/assets/img/icons/apple-logo.png" alt="..." />
                            </a>
                            <a className="w-8" href="/">
                                <img src="https://tix.vn/app/assets/img/icons/android-logo.png" alt="..." />
                            </a>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SOCIAL</h2>
                        <div className="flex justify-center">
                            <a className="w-8 mr-3" href="/" >
                                <img src="https://tix.vn/app/assets/img/icons/facebook-logo.png" alt="..." />
                            </a>
                            <a className="w-8" href="/">
                                <img src="https://tix.vn/app/assets/img/icons/zalo-logo.png" alt="..." />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 border-t-2">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2021
                        <a href="/" rel="noopener noreferrer" className="text-blue-500 ml-1" target="_blank">Movie Cybersoft </a>
                        All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>

    )
}
