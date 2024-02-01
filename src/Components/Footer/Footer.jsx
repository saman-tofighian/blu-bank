import { useState } from "react";
import Pic1 from "./../../Image/android.png";
import Pic2 from "./../../Image/web.png";
import Pic3 from "./../../Image/apple.png";
import Pic4 from "./../../Image/apple2.png";
import Pic5 from "./../../Image/nardone.png";
import Pic6 from "./../../Image/bazzar.png";
import Pic7 from "./../../Image/myket.png";
import CopyRightPic from "./../../Image/Logo2.png";

function Footer() {
  return (
    <footer className="w-[100%] pt-[50px] pb-[70px] bg-[#3094ea]">
      <div className="w-full px-[6%]">
        <ArticleTop />
        <ArticleMiddle />
        <ArticleBottom />
      </div>
    </footer>
  );
}

function ArticleTop() {
  return (
    <article className="flex flex-wrap justify-center xl:justify-between w-full gap-y-8 xl:gap-y-0">
      <FooterText />
      <FooterWidgets />
    </article>
  );
}

function FooterText() {
  return (
    <div className="order-2 xl:order-1 w-11/12 xl:w-2/3">
      <h3 className="text-white text-[1.75rem] mb-[1rem]">
        امنیت حساب‌ها در بلو
      </h3>
      <h3 className="text-white mb-[.4rem]">نحوه حفاظت از سرمایه مشتریان</h3>
      <p className="text-white leading-[36px] mb-[1rem]">
        مبالغ سپرده‌‌های مشتریان در چارچوب ضوابط قانونی و تا سقف قانونی تعیین
        شده مورد تضمین «صندوق ضمانت سپرده‌های بانک مرکزی» است..
      </p>
      <h3 className="text-white mb-[.4rem]">پروتکل‌های امنیتی</h3>
      <p className="text-white leading-[36px] mb-[1rem]">
        در بلو همه پروتکل‌های امنیتی در سیستم‌های زیرساخت بانکی و همچنین
        استانداردهای بانک مرکزی در خصوص تسویه وجوه و حسابداری، به‌دقت رعایت شده
        است.
      </p>
      <h3 className="text-white mb-[.4rem]">آسایش بیشتر</h3>
      <p className="text-white leading-[36px] mb-[1rem]">
        جایگزینی کارت بانکی با پول کاغذی به دلیل اشراف لحظه‌ای بر دارایی‌های
        مشتریان، سبب امنیت دوچندان حساب‌های بانکی شده است. این تجربه موفق نشان
        داده است، روند دیجیتالی شدن منجر به آسایش و راحتی بیشتری برای مشتریان
        می‌شود.
      </p>
    </div>
  );
}

function FooterWidgets() {
  const [widgetsPic] = useState([
    {
      id: 1,
      Image: Pic1,
      Alt: "AndroidVersion",
      Link: "#",
    },
    {
      id: 2,
      Image: Pic2,
      Alt: "WebVersion",
      Link: "#",
    },
    {
      id: 3,
      Image: Pic3,
      Alt: "AppleVersion",
      Link: "#",
    },
    {
      id: 4,
      Image: Pic4,
      Alt: "Apple2Version",
      Link: "#",
    },
    {
      id: 5,
      Image: Pic5,
      Alt: "nardoneVersion",
      Link: "#",
    },
    {
      id: 6,
      Image: Pic6,
      Alt: "BazzarVersion",
      Link: "#",
    },
    {
      id: 7,
      Image: Pic7,
      Alt: "MyketVersion",
      Link: "#",
    },
  ]);
  return (
    <div className="order-1 xl:order-2 w-11/12 xl:w-2/6 flex flex-col justify-center items-center">
      {widgetsPic.map((val) => {
        return (
          <a
            href={val.Link}
            className="mb-[15px] flex w-fit h-fit"
            key={val.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={val.Image} alt={val.Alt} className="w-[160px]" />
          </a>
        );
      })}
    </div>
  );
}

function ArticleMiddle() {
  return (
    <article className="flex flex-wrap justify-center xl:justify-between w-full gap-y-8 xl:gap-y-0 mt-[3.3rem]">
      <AboutText />
      <AboutSocial />
    </article>
  );
}

function AboutText() {
  return (
    <div className="order-2 xl:order-1 w-11/12 xl:w-2/3">
      <h3 className="text-white mb-[.4rem]">ارتباط با ما</h3>
      <p className="text-white leading-[36px] mb-[1rem]">
        آدرس : تهران، خیابان نلسون ماندلا، خیابان شهید رحیمی، پلاک ۴۳
      </p>
      <p className="text-white leading-[36px] mb-[1rem]">تلفن : ۸۷۶۴۱ - ۰۲۱</p>
    </div>
  );
}

function AboutSocial() {
  const [social] = useState([
    {
      id: 1,
      Icon: "bi bi-linkedin",
      Link: "https://www.linkedin.com/in/saman-tofighian/",
    },
    {
      id: 2,
      Icon: "bi bi-github",
      Link: "https://github.com/saman-tofighian",
    },
  ]);
  return (
    <div className="order-1 xl:order-2 w-11/12 xl:w-2/6 flex justify-center items-center">
      {social.map((val) => {
        return (
          <a
            href={val.Link}
            key={val.id}
            className="border border-white rounded-[50%] text-[#fff] h-[46px] w-[46px] flex justify-center items-center mr-[13px] duration-700 ease-linear hover:bg-[#1d4b73] shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={`${val.Icon} text-[18px] flex justify-center items-center`}
            ></i>
          </a>
        );
      })}
    </div>
  );
}

function ArticleBottom() {
  return (
    <div className="flex flex-wrap justify-center xl:justify-between w-full gap-y-8 xl:gap-y-0 mt-[3.3rem]">
      <FooterLink />
      <CopyRight />
    </div>
  );
}

function FooterLink() {
  const [Links] = useState([
    {
      id: 1,
      LinkName: "Hiring",
      SpanName: "|",
      Href: "#",
    },
    {
      id: 2,
      LinkName: "About us",
      SpanName: "|",
      Href: "#",
    },
    {
      id: 3,
      LinkName: "Contact us",
      Href: "#",
    },
  ]);
  return (
    <div className=" w-11/12 xl:w-2/6 flex items-center justify-center">
      {Links.map((val) => {
        return (
          <a
            href={val.Href}
            id={val.id}
            className="text-white text-[14px] duration-700 ease-linear hover:text-[#000]"
          >
            {val.LinkName}
            <span className="text-white mx-[10px]">{val.SpanName}</span>
          </a>
        );
      })}
    </div>
  );
}

function CopyRight() {
  const [date] = useState(new Date());
  return (
    <div className=" w-11/12 xl:w-2/3 flex items-center justify-end md:justify-center xl:justify-end">
      <h6 className="text-white text-[14px] ml-[5px] md:ml-[11px] xl:ml-[15px]">
        .Copyright © {date.getFullYear()}{" "}
        <strong className="text-[#123]">Saman Tofighian</strong> . All rights
        reserved
      </h6>
      <a href="#">
        <img
          src={CopyRightPic}
          alt=""
          className="w-[36px] md:w-[41px] xl:w-[46px]"
        />
      </a>
    </div>
  );
}

export default Footer;
