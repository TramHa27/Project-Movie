import React from "react";
import Slider from "react-slick";

export default function Application() {
  const settings = {
    className: "section-outstanding__slider",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    arrows: false,
    infinite: true,
    row: 1,
  };
  return (
    <div id="application" className="mt-5">
      <section id="appBlock">
        <div id="wrapHomeApp">
          <div id="homeApp">
            <div className="MaxWidth940">
              <div className="grid grid-cols-12 md:grid-cols-2 container">
                <div className="col-span-12 md:col-span-1 app_content_left">
                  <p className="app_textLeft">Ứng dụng tiện lợi dành cho</p>
                  <p className="app_textLeft">người yêu điện ảnh</p>
                  <br />
                  <p className="app_textSmallLeft">
                    Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm
                    rạp và đổi quà hấp dẫn.
                  </p>
                  <br />
                  <button id="app_buttonLeft">
                    App miễn phí - Tải về ngay
                  </button>
                  <p className="app_textUnder">
                    TIX có 2 phiên bản{" "}
                    <a href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id61518619">
                      IOS
                    </a>
                    <a
                      className="ml-2"
                      href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                    >
                      Android
                    </a>
                  </p>
                </div>
                <div className="col-span-12 md:col-span-1 app_content_right">
                  <img
                    className="phone_img"
                    src="./img/Footer/mobile.png"
                    alt="carousel-application"
                  />
                  <div className="app_phoneSlider slick">
                    <Slider {...settings}>
                      <div>
                        <img
                          src="./img/Footer/slide2.jpg"
                          alt="carousel-application"
                        />
                      </div>
                      <div>
                        <img
                          src="./img/Footer/slide4.jpg"
                          alt="carousel-application"
                        />
                      </div>

                      <div>
                        <img
                          src="./img/Footer/slide3.jpg"
                          alt="carousel-application"
                        />
                      </div>
                      <div>
                        <img
                          src="./img/Footer/slide5.jpg"
                          alt="carousel-application"
                        />
                      </div>
                      <div>
                        <img
                          src="./img/Footer/slide6.jpg"
                          alt="carousel-application"
                        />
                      </div>
                      <div>
                        <img
                          src="./img/Footer/slide7.jpg"
                          alt="carousel-application"
                        />
                      </div>
                      <div>
                        <img
                          src="./img/Footer/slide8.jpg"
                          alt="carousel-application"
                        />
                      </div>
                      <div>
                        <img
                          src="./img/Footer/slide11.jpg"
                          alt="carousel-application"
                        />
                      </div>
                      <div>
                        <img
                          src="./img/Footer/slide12.jpg"
                          alt="carousel-application"
                        />
                      </div>
                      <div>
                        <img
                          src="./img/Footer/slide13.jpg"
                          alt="carousel-application"
                        />
                      </div>
                      <div>
                        <img
                          src="./img/Footer/slide9.jpg"
                          alt="carousel-application"
                        />
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
