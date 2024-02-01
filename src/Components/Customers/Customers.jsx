import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import SamanPic from "./../../Image/samanTofighian.jpg";
import { useMediaQuery } from "react-responsive";

const Customers = () => {
  return (
    <section className="w-[100%] py-[180px]">
      <div className="w-full px-[6%]">
        <CustomerTitle />
        <CenterMode />
      </div>
    </section>
  );
};

const CustomerTitle = () => {
  return (
    <div className="w-full text-center">
      <h3 className="text-[#3094ea] mb-[50px] text-[23px] md:text-[28px] xl:text-[32px] font-normal">
        ما را در شبکه‌های اجتماعی دنبال کنید:
      </h3>
    </div>
  );
};

const CenterMode = () => {
  const [settings, setSettings] = useState({
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 1,
  });

  const isDesktop = useMediaQuery({ minWidth: 1500 });
  const isTabLet = useMediaQuery({ minWidth: 776, maxWidth: 991 });
  const isLapTop = useMediaQuery({ minWidth: 992 });

  useEffect(() => {
    const updateSettings = () => {
      setSettings({
        ...settings,
        slidesToShow: isDesktop ? 3.6 : isTabLet ? 2 : isLapTop ? 2.6 : 1,
      });
    };

    updateSettings();
    window.addEventListener("resize", updateSettings);

    return () => {
      window.removeEventListener("resize", updateSettings);
    };
  }, [isDesktop, isTabLet, isLapTop]);

  return (
    <div>
      <Slider {...settings}>
        {customerData.map((val) => (
          <div
            key={val.id}
            className="rounded-[15px] min-h-[250px]  flex flex-wrap xl:!w-[349.75px] relative"
            id="customerSlider"
          >
            <figure className="flex justify-center w-full absolute top-[-36px] right-[-3px]">
              <img
                src={val.Image}
                alt=""
                className="rounded-[50%] w-[75px] h-[75px]"
                style={val.style}
              />
            </figure>
            <div className="right-[30px] top-[20px] absolute">
              <a
                href={val.Href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[27px]"
                style={{ color: val.IconColor }}
              >
                {val.Icon}
              </a>
            </div>
            <section className="w-full my-4 text-center">
              <h3 className="text-[#000]">{val.Name}</h3>
            </section>
            <section className="w-full mb-[35px] text-right px-3">
              <p className="text-[16px] leading-[30px]">{val.Desc}</p>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const customerData = [
  {
    id: 1,
    Image: SamanPic,
    Name: "سامان توفیقیان",
    Desc: "من کارتم رسید بسیار عالی و راحت فعال شد امروز هم با مبلغ هدیه ای که واریز کرده بودید خرید کردم 😍",
    style: {
      border: "4px solid #24292e",
    },
    Icon: <i class="bi bi-github"></i>,
    Href: "https://github.com/saman-tofighian",
    IconColor: "#24292e",
  },
  {
    id: 2,
    Image: SamanPic,
    Name: "سامان توفیقیان",
    Desc: "امروز کارت اعتباری #بلو رسید دستم. الحق که پکینگ و هویت بصری‌ش حس اعتماد و احترام خیلی خوبی بهم داد",
    style: {
      border: "4px solid #0077b5",
    },
    Icon: <i class="bi bi-linkedin"></i>,
    Href: "https://www.linkedin.com/in/saman-tofighian/",
    IconColor: "#0077b5",
  },
  {
    id: 3,
    Image: SamanPic,
    Name: "سامان توفیقیان",
    Desc: "به به ، بلوکارت منم رسیییید 😍👍از نظر برندینگ و دیجیتال مارکتینگ واقعا عالی اومدن جلو ، حقشونه که ب",
    style: {
      border: "4px solid #24292e",
    },
    Icon: <i class="bi bi-github"></i>,
    Href: "https://github.com/saman-tofighian",
    IconColor: "#24292e",
  },
  {
    id: 4,
    Image: SamanPic,
    Name: "سامان توفیقیان",
    Desc: "واقعا رابط کاربری اپلیکیشن فوق العاده خوب و راحته. تبریک میگم بهتون من ک بی صبرانه منتظرم کارت بانکی",
    style: {
      border: "4px solid #0077b5",
    },
    Icon: <i class="bi bi-linkedin"></i>,
    Href: "https://www.linkedin.com/in/saman-tofighian/",
    IconColor: "#0077b5",
  },
  {
    id: 5,
    Image: SamanPic,
    Name: "سامان توفیقیان",
    Desc: "کارت بلو بانک منم رسید. ببینیم سرنوشتش چی میشه...بسته بندی و طراحی کارتشون قشنگ بود.خوشمان آمد",
    style: {
      border: "4px solid #24292e",
    },
    Icon: <i class="bi bi-github"></i>,
    Href: "https://github.com/saman-tofighian",
    IconColor: "#24292e",
  },
  {
    id: 6,
    Image: SamanPic,
    Name: "سامان توفیقیان",
    Desc: "والا من از روزی که رسید دستم همه بانکامو منتقل کردم بهش.‌ یکی دوتا مشکل هم باهاش داشتم که تیم پشتیبا",
    style: {
      border: "4px solid #0077b5",
    },
    Icon: <i class="bi bi-linkedin"></i>,
    Href: "https://www.linkedin.com/in/saman-tofighian/",
    IconColor: "#0077b5",
  },
];

export default Customers;
