import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
function FQ() {
  return (
    <section className="w-full pt-[100px] pb-[70px] bg-[#fbfafb]">
      <div className="w-[100%] px-[6%] flex items-center justify-center xl:justify-between flex-wrap">
        <AccordionCustomAnimation />
        <TextFQ />
      </div>
    </section>
  );
}

function AccordionCustomAnimation() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          <h4 className="text-[18px] font-yekan font-extralight leading-7">
            چگونه می‌توانم حساب بازکنم؟
          </h4>
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[15px] text-[#737789] leading-[36px] font-yekan font-medium">
            مراحل بازکردن حساب : ١.دانلود و نصب اپلیکیشن بلو ٢.داشتن یک خط تلفن
            همراه فعال که به نام خودتان است ٣.همراه داشتن اصل کارت ملی (برای
            کارت ملی‌های قدیمی، کد رهگیری درخواست صدور کارت هوشمند) برای ارسال
            تصاویر مربوطه
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          <h4 className="text-[18px] font-yekan font-extralight leading-7">
            برای بازکردن حساب چه مدارکی لازم است؟
          </h4>
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[15px] text-[#737789] leading-[36px] font-yekan font-medium">
            اصل کارت ملی (برای کارت ملی‌های قدیمی، کد رهگیری درخواست صدور کارت
            هوشمند) برای ارسال تصاویر مربوطه و داشتن یک خط تلفن همراه فعال که به
            نام خودتان است.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          <h4 className="text-[18px] font-yekan font-extralight leading-7">
            من کارت ملی هوشمند دریافت نکرده‌ام، آیا می‌توانم حساب بازکنم؟
          </h4>
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[15px] text-[#737789] leading-[36px] font-yekan font-medium">
            بله، اگر درخواست کارت ملی هوشمند را ثبت کردید، از راه ثبت کد رهگیری
            نوشته شده روی رسید ثبت‌نام کارت ملی هوشمند، امکان بازکردن حساب را
            دارید.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          <h4 className="text-[18px] font-yekan font-extralight text-justify leading-7">
            من کارت ملی هوشمند ندارم و برگه رسید کارت ملی هوشمند را گم کرده‌ام،
            چطور می‌توانم حساب بازکنم؟
          </h4>
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[15px] text-[#737789] leading-[36px] font-yekan font-medium">
            در وب‌سایت سازمان ثبت و احوال کد رهگیری کارت ملی خود را پیداکنید و
            فرآیند بازکردن حساب را انجام دهید.
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} animate={CUSTOM_ANIMATION}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          <h4 className="text-[18px] font-yekan font-extralight leading-7">
            مراحل بازکردن حساب چقدر زمان می‌برد؟
          </h4>
        </AccordionHeader>
        <AccordionBody>
          <p className="text-[15px] text-[#737789] leading-[36px] font-yekan font-medium">
            باز کردن حساب در کمتر از ۷ دقیقه، بررسی مدارک، شناسایی هویت و فعال
            شدن حساب(در صورت تایید استعلام بانک مرکزی) حداکثر تا ۳ روز انجام
            می‌شود.
          </p>
        </AccordionBody>
      </Accordion>
    </>
  );
}

function TextFQ() {
  return (
    <section className="w-full mt-[50px]">
      <h3 className="text-center text-[#7c7d8a] text-[22px] md:text-[26px] xl:text-[28px]">
        خط ارتباطی برای پاسخ به سوالات شما
      </h3>
      <div className="flex justify-center w-full mt-6">
        <button className="bg-[#3094ea] rounded-[25px] py-[10px] px-[30px] text-[#fff] border-none outline-none cursor-pointer">
          بلو لاین
        </button>
      </div>
    </section>
  );
}

export default FQ;
