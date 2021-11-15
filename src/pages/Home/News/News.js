import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function News() {
  return (
    <div id="news" className="container">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Điện Ảnh 24h" key="1">
          <div className="grid grid-cols-12 md:grid-cols-2 gap-4">
            <div className="news__item col-span-12 md:col-span-1 ">
              <a
                href="https://tix.vn/goc-dien-anh/7965-an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat"
                className="news__news"
              >
                <img
                  className="new__image"
                  src="https://s3img.vcdn.vn/123phim/2021/03/an-dinh-chac-nich-ngay-khoi-chieu-16-04-ly-hai-tung-clip-lat-mat-48h-dam-chat-fast-furious-mien-song-nuoc-16170881088272.png"
                  alt="news-movie"
                />
                <div className="py-3">
                  <h4 className="card-title">
                    Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip
                    Lật Mặt: 48H đậm chất
                  </h4>
                  <p className="text-secondary">
                    Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip
                    rượt đuổi gay cấn thót tim fans hâm mộ
                  </p>
                </div>
              </a>
            </div>
            <div className="news__item col-span-12 md:col-span-1 ">
              <a
                href="https://tix.vn/goc-dien-anh/7964-mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam"
                className="news__news"
              >
                <img
                  className="new__image"
                  src="https://s3img.vcdn.vn/123phim/2021/03/mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam-16170160290762.png"
                  alt="news-movie"
                />
                <div className="py-3">
                  <h4 className="card-title">
                    [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM
                    ĐIỆN ẢNH NỔI...
                  </h4>
                  <p className="text-secondary">
                    Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi
                    sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu phim
                    mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt
                    Nam!
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-12 md:grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-4 pl-0 pr-15">
              <a
                href="https://tix.vn/goc-dien-anh/7963-promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi"
                className="news__news"
              >
                <img
                  className="new__image"
                  src="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png"
                  alt="news-movie"
                />
                <div className="py-3">
                  <h4 className="card-title">
                    PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và
                    màn trả thù...
                  </h4>
                  <p className="text-secondary">
                    Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng
                    mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự
                    nghiệp của cô trong phim
                  </p>
                </div>
              </a>
            </div>
            <div className="col-span-12 md:col-span-4 pl-0 pr-15">
              <a
                href="https://tix.vn/goc-dien-anh/7962-vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em"
                className="news__news"
              >
                <img
                  className="new__image"
                  src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png"
                  alt="news-movie"
                />
                <div className="py-3">
                  <h4 className="card-title">
                    VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT
                    QUỶ”...
                  </h4>
                  <p className="text-secondary">
                    Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về
                    năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo
                    Sik, tác phẩm kinh dị – hành
                  </p>
                </div>
              </a>
            </div>
            <div className="col-span-12 md:col-span-4 pl-0 pr-15">
              <a
                className="news__bonusNew"
                href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon"
              >
                <div className="grid grid-cols-12 md:grid-cols-12 mb-2">
                  <div className="col-span-3 md:col-span-3 px-0">
                    <img
                      className="new__image"
                      src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg"
                      alt="news-movie"
                    />
                  </div>
                  <div className="col-span-9 md:col-span-9">
                    <h6 className="text-secondary">
                      Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                    </h6>
                  </div>
                </div>
              </a>
              <a
                className="news__bonusNew"
                href="https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh"
              >
                <div className="grid grid-cols-12 md:grid-cols-12 mb-2">
                  <div className="col-span-3 md:col-span-3 px-0">
                    <img
                      className="new__image"
                      src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png"
                      alt="news-movie"
                    />
                  </div>
                  <div className="col-span-9 md:col-span-9">
                    <h6 className="text-secondary">
                      “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                    </h6>
                  </div>
                </div>
              </a>
              <a
                className="news__bonusNew"
                href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu"
              >
                <div className="grid grid-cols-12 md:grid-cols-12 mb-2">
                  <div className="col-span-3 md:col-span-3 px-0">
                    <img
                      className="new__image"
                      src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png"
                      alt="news-movie"
                    />
                  </div>
                  <div className="col-span-9 md:col-span-9">
                    <h6 className="text-secondary">
                      Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                      công
                    </h6>
                  </div>
                </div>
              </a>
              <a
                className="news__bonusNew"
                href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman"
              >
                <div className="grid grid-cols-12 md:grid-cols-12 mb-2">
                  <div className="col-span-3 md:col-span-3 px-0">
                    <img
                      className="new__image"
                      src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg"
                      alt="news-movie"
                    />
                  </div>
                  <div className="col-span-9 md:col-span-9">
                    <h6 className="text-secondary">
                      NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT
                    </h6>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Review" key="2">
          <div className="grid grid-cols-12 md:grid-cols-2 gap-4">
            <div className="news__item col-span-12 md:col-span-1">
              <a
                href="https://tix.vn/goc-dien-anh/7964-mortal-kombat-cuoc-chien-sinh-tu-goi-ten-nhung-phim-dien-anh-noi-tieng-duoc-chuyen-the-tu-cac-tua-game-dinh-dam"
                className="news__news"
              >
                <img
                  className="new__image"
                  src="https://s3img.vcdn.vn/123phim/2020/08/review-tan-tich-quy-am-relic-ba-the-he-va-moi-lien-ket-15965255784224.png"
                  alt="news-movie"
                />
                <div className="py-3">
                  <h4 className="card-title">
                    [MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ] - GỌI TÊN NHỮNG PHIM
                    ĐIỆN ẢNH NỔI...
                  </h4>
                  <p className="text-secondary">
                    Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành khi
                    sắp tới đây thành phố HCM sẽ chào đón một rạp chiếu phim
                    mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt
                    Nam!
                  </p>
                </div>
              </a>
            </div>
            <div className="news__item col-span-12 md:col-span-1">
              <a
                href="https://tix.vn/review/7946-review-dinh-thu-oan-khuat-ghost-of-war"
                className="news__news"
              >
                <img
                  className="new__image"
                  src="https://s3img.vcdn.vn/123phim/2020/08/review-dinh-thu-oan-khuat-ghost-of-war-15965120886610.png"
                  alt="news-movie"
                />
                <div className="py-3">
                  <h4 className="card-title">
                    Review: Dinh Thự Oan Khuất (Ghost Of War)
                  </h4>
                  <p className="text-secondary">
                    Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự
                    Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-12 md:grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-4 pl-0 pr-15">
              <a
                href="https://tix.vn/goc-dien-anh/7963-promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi"
                className="news__news"
              >
                <img
                  className="new__image"
                  src="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png"
                  alt="news-movie"
                />
                <div className="py-3">
                  <h4 className="card-title">
                    PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và
                    màn trả thù...
                  </h4>
                  <p className="text-secondary">
                    Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng
                    mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự
                    nghiệp của cô trong phim
                  </p>
                </div>
              </a>
            </div>
            <div className="col-span-12 md:col-span-4 pl-0 pr-15">
              <a
                href="https://tix.vn/goc-dien-anh/7962-vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em"
                className="news__news"
              >
                <img
                  className="new__image"
                  src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png"
                  alt="news-movie"
                />
                <div className="py-3">
                  <h4 className="card-title">
                    VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT
                    QUỶ”...
                  </h4>
                  <p className="text-secondary">
                    Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về
                    năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo
                    Sik, tác phẩm kinh dị – hành
                  </p>
                </div>
              </a>
            </div>
            <div className="col-span-12 md:col-span-4 pl-0 pr-15">
              <a
                className="news__bonusNew"
                href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon"
              >
                <div className="grid grid-cols-12 md:grid-cols-12 mb-2">
                  <div className="col-span-3 md:col-span-3 px-0">
                    <img
                      className="new__image"
                      src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg"
                      alt="news-movie"
                    />
                  </div>
                  <div className="col-span-9 md:col-span-9">
                    <h6 className="text-secondary">
                      Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                    </h6>
                  </div>
                </div>
              </a>
              <a
                className="news__bonusNew"
                href="https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh"
              >
                <div className="grid grid-cols-12 md:grid-cols-12 mb-2">
                  <div className="col-span-3 md:col-span-3 px-0">
                    <img
                      className="new__image"
                      src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png"
                      alt="news-movie"
                    />
                  </div>
                  <div className="col-span-9 md:col-span-9">
                    <h6 className="text-secondary">
                      “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                    </h6>
                  </div>
                </div>
              </a>
              <a
                className="news__bonusNew"
                href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu"
              >
                <div className="grid grid-cols-12 md:grid-cols-12 mb-2">
                  <div className="col-span-3 md:col-span-3 px-0">
                    <img
                      className="new__image"
                      src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png"
                      alt="news-movie"
                    />
                  </div>
                  <div className="col-span-9 md:col-span-9">
                    <h6 className="text-secondary">
                      Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                      công
                    </h6>
                  </div>
                </div>
              </a>
              <a
                className="news__bonusNew"
                href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman"
              >
                <div className="grid grid-cols-12 md:grid-cols-12 mb-2">
                  <div className="col-span-3 md:col-span-3 px-0">
                    <img
                      className="new__image"
                      src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg"
                      alt="news-movie"
                    />
                  </div>
                  <div className="col-span-9 md:col-span-9">
                    <h6 className="text-secondary">
                      NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT
                    </h6>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </TabPane>
        <TabPane tab="Khuyến Mãi" key="3">
          <div className="grid grid-cols-12 md:grid-cols-2 gap-4">
            <div className="news__item col-span-12 md:col-span-1">
              <a
                href="https://tix.vn/khuyen-mai/7958-bhd-59k-ve-ca-tuan"
                className="news__news"
              >
                <img
                  className="new__image"
                  src="https://s3img.vcdn.vn/123phim/2021/04/bhd-59k-ve-ca-tuan-16190002421777.jpg"
                  alt="news-movie"
                />

                <div className="py-3">
                  <h4 className="card-title">BHD 59K/VÉ CẢ TUẦN !!!</h4>
                  <p className="text-secondary">
                    Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                    59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.
                  </p>
                </div>
              </a>
            </div>
            <div className="news__item col-span-12 md:col-span-1">
              <a
                href="https://tix.vn/khuyen-mai/7955-tix-1k-ve-ngai-chi-gia-ve"
                className="news__news"
              >
                <img
                  className="new__image"
                  src="https://s3img.vcdn.vn/123phim/2020/11/tix-1k-ve-ngai-chi-gia-ve-16045662877511.jpg"
                  alt="news-movie"
                />
                <div className="py-3">
                  <h4 className="card-title">TIX 1K/VÉ NGẠI CHI GIÁ VÉ</h4>
                  <p className="text-secondary">
                    Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm
                    02 voucher thanh toán ZaloPay thả ga
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-12 md:grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-4 pl-0 pr-15">
              <a
                href="https://tix.vn/goc-dien-anh/7963-promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi"
                className="news__news"
              >
                <img
                  className="new__image"
                  src="https://s3img.vcdn.vn/123phim/2021/03/promising-young-woman-bong-hong-nuoc-anh-carey-mulligan-va-man-tra-thu-dan-ong-de-doi-16166710855522.png"
                  alt="news-movie"
                />
                <div className="py-3">
                  <h4 className="card-title">
                    PROMISING YOUNG WOMAN | Bông hồng nước Anh Carey Mulligan và
                    màn trả thù...
                  </h4>
                  <p className="text-secondary">
                    Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan ở hạng
                    mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự
                    nghiệp của cô trong phim
                  </p>
                </div>
              </a>
            </div>
            <div className="col-span-12 md:col-span-4 pl-0 pr-15">
              <a
                href="https://tix.vn/goc-dien-anh/7962-vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em"
                className="news__news"
              >
                <img
                  className="new__image"
                  src="https://s3img.vcdn.vn/123phim/2021/03/vua-dep-lai-vua-tai-nang-dan-sao-nam-cua-phim-ban-tay-diet-quy-dam-bao-don-tim-hoi-chi-em-16165783843676.png"
                  alt="news-movie"
                />
                <div className="py-3">
                  <h4 className="card-title">
                    VỪA ĐẸP LẠI VỪA TÀI NĂNG, DÀN SAO NAM CỦA PHIM “BÀN TAY DIỆT
                    QUỶ”...
                  </h4>
                  <p className="text-secondary">
                    Quy tụ 3 nam tài tử vừa điển trai, vừa được đánh giá cao về
                    năng lực diễn xuất là Park Seo Joon, Woo Do Hwan và Choi Woo
                    Sik, tác phẩm kinh dị – hành
                  </p>
                </div>
              </a>
            </div>
            <div className="col-span-12 md:col-span-4 pl-0 pr-15">
              <a
                className="news__bonusNew"
                href="https://tix.vn/goc-dien-anh/7961-khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon"
              >
                <div className="grid grid-cols-12 md:grid-cols-12 mb-2">
                  <div className="col-span-3 md:col-span-3 px-0">
                    <img
                      className="new__image"
                      src="https://s3img.vcdn.vn/123phim/2021/01/khai-truong-rap-xin-gia-ngon-chuan-xi-tai-sai-gon-16115477671555.jpg"
                      alt="news-movie"
                    />
                  </div>
                  <div className="col-span-9 md:col-span-9">
                    <h6 className="text-secondary">
                      Khai trương rạp xịn giá ngon, chuẩn xì-tai Sài Gòn
                    </h6>
                  </div>
                </div>
              </a>
              <a
                className="news__bonusNew"
                href="https://tix.vn/goc-dien-anh/7960-boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh"
              >
                <div className="grid grid-cols-12 md:grid-cols-12 mb-2">
                  <div className="col-span-3 md:col-span-3 px-0">
                    <img
                      className="new__image"
                      src="https://s3img.vcdn.vn/123phim/2020/11/boc-tem-to-hop-giai-tri-moi-toanh-cua-gioi-ha-thanh-16056939435004.png"
                      alt="news-movie"
                    />
                  </div>
                  <div className="col-span-9 md:col-span-9">
                    <h6 className="text-secondary">
                      “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                    </h6>
                  </div>
                </div>
              </a>
              <a
                className="news__bonusNew"
                href="https://tix.vn/goc-dien-anh/7957-tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu"
              >
                <div className="grid grid-cols-12 md:grid-cols-12 mb-2">
                  <div className="col-span-3 md:col-span-3 px-0">
                    <img
                      className="new__image"
                      src="https://s3img.vcdn.vn/123phim/2020/11/tiec-trang-mau-chinh-thuc-can-moc-100-ty-chi-sau-2-tuan-cong-chieu-16043751284117.png"
                      alt="news-movie"
                    />
                  </div>
                  <div className="col-span-9 md:col-span-9">
                    <h6 className="text-secondary">
                      Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần
                      công
                    </h6>
                  </div>
                </div>
              </a>
              <a
                className="news__bonusNew"
                href="https://tix.vn/goc-dien-anh/7956-ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman"
              >
                <div className="grid grid-cols-12 md:grid-cols-12 mb-2">
                  <div className="col-span-3 md:col-span-3 px-0">
                    <img
                      className="new__image"
                      src="https://s3img.vcdn.vn/123phim/2020/10/ngo-thanh-van-chinh-thuc-khoi-dong-cuoc-thi-thiet-ke-trang-phuc-cho-sieu-anh-hung-dau-tien-cua-viet-nam-vinaman-16041584850247.jpg"
                      alt="news-movie"
                    />
                  </div>
                  <div className="col-span-9 md:col-span-9">
                    <h6 className="text-secondary">
                      NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT
                    </h6>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}
