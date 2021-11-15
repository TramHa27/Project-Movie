import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import loading from '../../assets/img/Spinner-1s-200px.gif'

export default function Loading(props) {
  const { isLoading } = useSelector((state) => state.LoadingReducer);

  return (
    <Fragment>
      {isLoading ? (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99,
          }}
        >
          <div className="text-4xl text-white">
            <img src={loading} alt="..." ></img>
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}
