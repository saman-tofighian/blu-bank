import { useState } from "react";
import RedCard from "./../../Image/red-cards-58eef88180bfe8ddacf330d238d67dbf.png";
import GreenCard from "./../../Image/green-cards-1922f2b7efbc90e001af89cb8b56be8d.png";
import BlueCard from "./../../Image/blue-cards-e05ac3905ab0eba7271f707d4ed6b368.png";
import "./cards.css";

function Cards() {
  return (
    <section className="w-full pt-[85px] mb-[200px]">
      <div className="w-[100%] px-[6%] flex items-center justify-center xl:justify-between flex-wrap gap-y-7">
        <CardsText />
        <CardsImage />
      </div>
    </section>
  );
}

function CardsImage() {
  return (
    <figure className="w-[100%] md:w-p[48%] xl:w-[45%] flex justify-center">
      <img src={RedCard} alt="RedCard" className="w-[600px] imgcard" />
    </figure>
  );
}

function CardsText() {
  const [lists] = useState([
    {
      Icon: (
        <i className="bg-[#4b94ea] text-[18px] h-[3px] absolute right-0 translate-y-[-50%] top-[50%] w-[10px]"></i>
      ),
      Desc: "عضو سامانه شتاب بانک مرکزی",
    },

    {
      Icon: (
        <i className="bg-[#4b94ea] text-[18px] h-[3px] absolute right-0 translate-y-[-50%] top-[50%] w-[10px]"></i>
      ),
      Desc: "ارسال رایگان کارت بانکی به آدرس دلخواه شما در کمتر از ۵ روز کاری در تهران و ۱۰ روز کاری در سایر نقاط کشور",
    },

    {
      Icon: (
        <i className="bg-[#4b94ea] text-[18px] h-[3px] absolute right-0 translate-y-[-50%] top-[50%] w-[10px]"></i>
      ),
      Desc: "دریافت و فعال‌سازی آنلاین رمزهای کارت از طریق اپلیکیشن بلو",
    },

    {
      Icon: (
        <i className="bg-[#4b94ea] text-[18px] h-[3px] absolute right-0 translate-y-[-50%] top-[50%] w-[10px]"></i>
      ),
      Desc: "امکان مسدودکردن کارت از طریق اپلیکیشن بلو",
    },
  ]);
  const changeImage = (newImage) => {
    document.getElementsByClassName("imgcard")[0].src = newImage;
  };

  return (
    <div className="w-[100%] xl:w-[50%] xl:pr-[120px] pb-[10px]">
      <h3 className="text-[#3094ea] text-[2rem] mb-[1.3rem]">
        بلو، فقط آبی نیست ...
      </h3>
      <ul className="mb-[53px] text-right">
        {lists.map((val) => {
          return (
            <li className="mt-[15px] relative text-[#737789] pr-[35px] text-[16px]">
              {val.Icon}
              {val.Desc}
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center xl:justify-end w-full">
        <button
          className="border-none outline-none w-[13px] h-[13px] rounded-[10px] mr-[10px] bg-[red] cursor-pointer"
          onClick={() => changeImage(RedCard)}
        ></button>
        <button
          className="border-none outline-none w-[13px] h-[13px] rounded-[10px] mr-[10px] bg-[#0fa581] cursor-pointer"
          onClick={() => changeImage(GreenCard)}
        ></button>
        <button
          className="border-none outline-none w-[13px] h-[13px] rounded-[10px] mr-[10px] bg-[#3094ea] cursor-pointer"
          onClick={() => changeImage(BlueCard)}
        ></button>
      </div>
    </div>
  );
}
export default Cards;
