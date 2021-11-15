import React from 'react'
import { useSelector } from 'react-redux'

export default function Footer(props) {
    const { heThongRapChieu } = useSelector(state => state.QuanLyRapReducer)

    return (
        <footer className="bg-gray-200 backdrop-filter backdrop-blur-md text-black shadow-md">
            <div className="px-4 pt-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <a className="lg:w-1/3 md:w-1/3 flex flex-col justify-center items-center lg:mt-6" href="/">
                    <img src="https://i.imgur.com/lC22izJ.png" alt="logo" style={{ maxWidth: '60px' }} />
                    <p className="text-lg mt-2 font-bold" style={{ color: '#fa5238' }}>Movie Cybersoft</p>
                </a>
                <div className="lg:w-2/3 md:w-2/3 flex flex-wrap justify-center lg:justify-start mt-4 text-center">
                    <div className="lg:w-1/4 w-1/3 md:px-4 px-2 text-left">
                        <h2 className="font-semibold text-sm mb-2 text-left">MOVIE CYBERSOFT</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-500 text-xs mb-4 hover:text-gray-800" href="/">FAQ</a>
                            </li>
                            <li>
                                <a className="text-gray-500 text-xs mb-4 hover:text-gray-800" href="/">Brand Guidelines</a>
                            </li>
                            <li>
                                <a className="text-gray-500 text-xs mb-4 hover:text-gray-800" href="/">Thỏa thuận sử dụng</a>
                            </li>
                            <li>
                                <a className="text-gray-500 text-xs mb-4 hover:text-gray-800" href="/">Chính sách bảo mật</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 w-1/3 md:px-4 px-2">
                        <h2 className="font-semibold text-sm mb-3 text-center md:text-left">ĐỐI TÁC</h2>
                        <div className="grid grid-cols-3 gap-2 mt-3">
                            {heThongRapChieu?.map((item, index) => {
                                return <a key={index} className="md:w-8 w-6 mr-3 mb-3 inline-block" href="/" >
                                    <img src={item.logo} alt="..." />
                                </a>
                            })}

                        </div>
                    </div>
                    <div className="w-1/3 lg:flex lg:justify-between">
                        <div className="w-full px-2 mb-3 flex flex-col items-center md:items-start">
                            <h2 className="font-semibold text-sm mb-3 text-center md:text-left">MOBILE APP</h2>
                            <div className="flex">
                                <a className="md:w-8 w-6 mr-3" href="/" >
                                    <img src="https://tix.vn/app/assets/img/icons/apple-logo.png" alt="..." />
                                </a>
                                <a className="md:w-8 w-6" href="/">
                                    <img src="https://tix.vn/app/assets/img/icons/android-logo.png" alt="..." />
                                </a>
                            </div>
                        </div>
                        <div className=" w-full px-2 mb-3 flex flex-col items-center md:items-start">
                            <h2 className="font-semibold text-sm mb-3 text-center md:text-left">SOCIAL</h2>
                            <div className="flex">
                                <a className="md:w-8 w-6 mr-3" href="/" >
                                    <img src="https://tix.vn/app/assets/img/icons/facebook-logo.png" alt="..." />
                                </a>
                                <a className="md:w-8 w-6" href="/">
                                    <img src="https://tix.vn/app/assets/img/icons/zalo-logo.png" alt="..." />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-3 px-5 border-t border-white w-3/4">
                <p className="text-gray-500 text-xs md:text-center sm:text-left">© 2021
                    <a href="/" rel="noopener noreferrer" className="text-black ml-1 hover:text-red-600" target="_blank">Movie Cybersoft </a>
                    All Rights Reserved.
                </p>
            </div>
        </footer>

    )
}
