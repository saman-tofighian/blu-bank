import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Video from "./../../Image/AboutVideo.mp4";
import Pic1 from "./../../Image/download.svg";
import Pic2 from "./../../Image/download2.svg";
import Pic3 from "./../../Image/download3.svg";

function About() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > document.getElementById("video").offsetTop - 400) {
        document
          .getElementById("video")
          .classList.remove("translate-x-[900px]");
      }
      if (window.scrollY > document.getElementById("slider").offsetTop - 500) {
        document
          .getElementById("slider")
          .classList.remove("translate-x-[-900px]");
      }
    });
  }, []);
  return (
    <section className="w-full py-[120px]">
      <div className="w-[100%] px-[6%] flex items-center justify-center xl:justify-between flex-wrap">
        <AboutVideo />
        <AboutSlider />
      </div>
    </section>
  );
}

function AboutVideo() {
  return (
    <div
      className="flex justify-center w-10/12 mx-auto md:w-11/12 xl:w-1/3 xl:mx-0 lg:mx-0 duration-700 ease-out translate-x-[900px]"
      id="video"
    >
      <video src={Video} autoPlay loop muted className="h-[500px]"></video>
    </div>
  );
}

function AboutSlider() {
  return (
    <section
      className="flex w-11/12 md:h-3/4 mx-auto xl:mx-0 text-right xl:w-1/2 duration-700 ease-out translate-x-[-900px]"
      id="slider"
    >
      <SimpleSlider />
    </section>
  );
}

function SimpleSlider() {
  const [mydata] = useState([
    {
      id: 1,
      Image: Pic1,
      Title: "۵ درصد سود سپرده",
      Desc: "در بلو برای حداقل مانده موجودی در ماه، سود سالیانه ۵ درصد به صورت ماه‌شمار پرداخت می‌شود",
    },
    {
      id: 2,
      Image: Pic2,
      Title: "بدون کارمزد بازکردن حساب",
      Desc: "در بلو بازکردن حساب کاملا رایگان است و نیاز به پرداخت هیچ کارمزدی ندارد",
    },
    {
      id: 3,
      Image: Pic3,
      Title: "بدون حداقل موجودی حساب",
      Desc: "در بلو برای بازکردن حساب، نیاز به حتی یک ریال موجودی نیست",
    },
  ]);
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    initialSlide: 0,
    adaptiveHeight: true,
  };

  return (
    <Slider {...settings} className="w-full">
      <div className="flex items-center w-full py-[3rem]">
        <h3 className="text-[#3094ea] text-[26px] md:text-[32px] xl:text-[35px] my-5 w-full">
          بلو؛ بانک ولی دوست‌ داشتنی
        </h3>
        <p className="my-[18px] leading-[36px]">
          بلو، پلتفرمی تمام دیجیتال است که همه‌ی عملیات بانکداری روی اپلیکیشن
          موبایل و کاملا آنلاین انجام می‌شود. به زبان ساده، بانکی است که همیشه
          همراه شما خواهد بود
        </p>
        <section className="flex justify-end w-full mt-6">
          <button className="px-[24px] py-[11px] bg-[#3094ea] text-white outline-none border-none rounded-[1.6rem]">
            دانلود اپلیکیشن
          </button>
        </section>
      </div>
      <section className="!flex flex-wrap justify-center lg:justify-between w-full px-4 py-[3rem] gap-y-7 lg:gap-y-0">
        {mydata.map((val) => {
          return (
            <div key={val.id} className="w-11/12 lg:w-[30.3333%]">
              <figure className="w-full flex justify-center">
                <img src={val.Image} alt="" className="w-[80px] h-[80px]" />
              </figure>
              <div className="w-full bg-[#ebf4fc] rounded-[25px] py-[25px] xl:min-h-[200px] shadow-sm">
                <h3 className="text-black mb-[16px] text-center text-[14px]">
                  {val.Title}
                </h3>
                <p className="text-[#3094ea] text-center xl:text-right leading-[26px] text-[14px] w-[82%] mx-auto">
                  {val.Desc}
                </p>
              </div>
            </div>
          );
        })}
      </section>
      <div className="w-full py-[3rem]">
        <h3 className="text-[#3094ea] text-[26px] md:text-[32px] xl:text-[35px] my-5">
          حفاظت از سرمایه مشتریان
        </h3>
        <p className="my-[18px] leading-[36px]">
          مبالغ سپرده‌های مشتریان در چارچوب ضوابط قانونی و تا سقف قانونی تعیین
          شده، مورد تضمین صندوق ضمانت سپرده‌های بانک مرکزی است
        </p>
        <p className="my-[18px] leading-[36px]">
          ما همه‌ی اطلاعات حساب‌ها و مدارک هویتی مشتریان خود را محرمانه تلقی
          کرده و متعهد می‌شویم تحت هر شرایطی جز در موارد قانونی از انتشار آن
          جلوگیری کرده و مسئولیت این موضوع را به طور کامل می‌پذیریم
        </p>
      </div>
    </Slider>
  );
}
export default About;
