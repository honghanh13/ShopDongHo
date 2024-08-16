import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none'}}
      onClick={onClick}
    />
  );
}

function Carousel(props) {
  let {slider, slider1, slider2} = props
  const [nav, setNav] = useState({nav1: null, nav2: null})

  useEffect(() => {
    setNav({
      nav1: slider1,
      nav2: slider2
    })
  }, [])

  const settings = {
    loop:true,
    dots: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

 
  const next = () =>  {
    slider1.slickNext();
  }
  const previous = () => {
    slider2.slickPrev();
  }

  return (
    <section id="carousel">
      <div className="carousel">
        <div className="carousel-left">
          <div className="carousel-left-slide">
            <Slider asNavFor={nav.nav2}
                    ref={slider => (slider1 = slider)} 
                    {...settings} >
              {/* <div key={1}>
                <img src="https://cdn.cellphones.com.vn/media/ltsoft/promotion/loa-691-301-max.png"></img>
              </div> */}
              <div key={1}>
                <img src="https://cdn.tgdd.vn/Files/2021/12/25/1406845/donghogiareh2_1280x720-800-resize.jpg"></img>
              </div>
              <div key={2} className="k2">
                <img src="https://cdn.tgdd.vn/Files/2021/07/21/1369692/ketnoibluetooth_1280x720-800-resize.png"></img>
              </div>
              <div key={3}>
                <img src="https://cdn.tgdd.vn/Products/Images/7077/212734/samsung-galaxy-watch-active-2-40-mm-den2-1.jpg"></img>
              </div>
              <div key={4}>
                <img src="https://cdn.tgdd.vn/Files/2022/01/15/1410868/topdongho_1280x720-800-resize.png"></img>
              </div>
              <div key={4}>
                <img src="https://cdn.tgdd.vn/Files/2022/03/17/1420830/donghothongminhgiamgiadangmua13_1280x720-800-resize.jpg"></img>
              </div>
            </Slider>
            <div className='carousel-left-move' onClick={() => previous()}>
                <div className="prev">
                    <LeftOutlined></LeftOutlined>
                </div>
                <div className="next" onClick={() => next()}>
                    <RightOutlined></RightOutlined>
                </div>
            </div>
          </div>
          <div className="carousel-left-bottom">
            <Slider asNavFor={nav.nav1}
                    ref={slider => (slider2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                     >
              
              <div className="mono">
                Lãi suất trả góp <br></br> chỉ 0%
              </div>
              <div className="mono">
                KẾT NỐI SIÊU NHANH  <br></br>  ĐỘ TRỄ SIÊU THẤP
              </div>
              <div className="mono">
              NĂNG ĐỘNG <br></br> VÀ THỜI TRANG
              </div>
              <div className="mono">
              LỰA CHỌN TỐT NHẤT <br></br>ĐẾN TỪ BẠN
              </div>
              <div className="mono">
              THÁNG SIÊU SALE   <br></br> XỊN 100% CÓ QUÀ
              </div>

            </Slider>
          </div>
        </div>
       
          <div className="carousel-right">
          <div className="carousel-right-item">
            <img src="https://cdn.tgdd.vn/Files/2019/09/12/1197643/-li-do-ban-nen-so-huu-ngay-mot-chiec-smartwatch-8.jpg"></img>
          </div>
          <div className="carousel-right-item">
            <img src="https://cdn.tgdd.vn//News/1407790//top-10-dong-ho-thong-minh-nghe-goi-sieu-tien-loi-dang-de-mua-nhat-05-800x447-1.jpg"></img>
          </div>
          <div className="carousel-right-item">
            <img src="https://cdn.tgdd.vn/Products/Images/7077/212733/samsung-galaxy-watch-active-2-40-mm-day-da3-1.jpg"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
