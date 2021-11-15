import { Fragment } from "react";
import { Route } from "react-router";
import { useEffect } from "react";
import BG2 from "../../assets/img/bg2.jpg"

export const UserTemplate = (props) => {
  const { Component, ...restProps } = props;
  useEffect(() => {
    return () => {
      window.scrollTo(0,0)
    }
  })
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        //props.location, props.history, props.match
        return (
          <Fragment>
           
              <div className="lg:flex">
                <Component {...propsRoute} />
                <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
                <div className="bg-no-repeat bg-cover bg-center w-full h-full" style={{backgroundImage: (`url(${BG2})`)}}></div>
                </div>
              </div>
          </Fragment>
        );
      }}
    />
  );
};
