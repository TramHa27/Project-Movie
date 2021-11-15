import React, { useState } from 'react';

import Sidebar from './partials/Sidebar';
import Header from './partials/Header';

import { Route } from 'react-router';



export default function AdminTemplate(props) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return <Route exact path={props.path} render={(propsRoute) => {
        return (
            <div className="flex h-screen overflow-hidden">

                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                {/* Content area */}
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                    {/*  Site header */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                    <main>
                        <div className="px-4 sm:px-6 lg:px-8 py-4 w-full max-w-9xl mx-auto">

                            <div className="w-full h-full bg-white shadow-lg rounded-sm border border-gray-200">
                                <div className="p-3">
                                    <props.component {...propsRoute} />
                                </div>
                            </div>


                        </div>
                    </main>
                </div>
            </div>
        );
    }} />
}

