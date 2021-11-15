import React, { useEffect, useState } from "react";
import Cinema from './Cinema/Cinema';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import HomeMenu from './HomeMenu/HomeMenu';
import News from './News/News'
import Lottie from "react-lottie";
import * as location from "../../movieGif.json";
import * as success from "../../success.json";
import Application from "./Application/Apllication";
import { Fragment } from "react";

export default function Home() {
  const [state, setState] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  useEffect(() => {
    //Chạy khi window load lần đầu
    window.onload = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    //Chạy mỗi khi window thay đổi kích thước
    window.onresize = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    //Load đầu trang
    window.scrollTo(0, 0);
  })
  // Loading Page
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: location.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: success.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          // console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 500);
        });
    }, 2000);
  }, []);

  const renderComponent = (propsRoute) => {
    if (state.width < 768) {

      return <Fragment>
        <HomeMenu />
        <Cinema />
        <News />
        <Application />
      </Fragment>
    }
    return <Fragment>
      <HomeCarousel />
      <HomeMenu />
      <Cinema />
      <News />
      <Application />
    </Fragment>
  }


  return (
    <>
      {!completed ? (
        <>
          <div className="relative py-20 w-screen mt-15 mb-80">
            {!loading ? (
              <Lottie options={defaultOptions1} height={300} width={300} />
            ) : (
              <Lottie options={defaultOptions2} height={200} width={200} />
            )}
          </div>
        </>
      ) : (
        <>
          {renderComponent()}
        </>
      )}
    </>)
}