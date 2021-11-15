import React from "react";

export default function Film(props) {
  let { item } = props;
  return (
    <div className="p-2">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden relative">
        <div
          style={{
            backgroundImage: `url(${item.hinhAnh})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "300px",
          }}
        ></div>
        <div className="p-3">
          <h1 className="title-font text-sm font-medium text-gray-900 block h-16 text-center">
            {item.tenPhim}
          </h1>
          <p className="leading-relaxed mb-3 h-16 text-center ">
            {item.moTa.length > 100 ? (
              <span>{item.moTa.slice(0, 100)}...</span>
            ) : (
              <span>{item.moTa}</span>
            )}
          </p>
          <a className="text-indigo-500 inline-flex items-center mt-5" href="/">
              114 phút
          </a>
        </div>
      </div>
    </div>
  );
}
