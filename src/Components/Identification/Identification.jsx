import { useEffect } from "react";
import Video from "./../../Image/KYC-2f7a21a0db455f1c536551b13081aa4f.mp4";
function Identification() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.scrollY >
        document.getElementById("TextIdentification").offsetTop - 600
      ) {
        document
          .getElementById("TextIdentification")
          .classList.remove("translate-x-[1000px]");
      }
      if (
        window.scrollY >
        document.getElementById("VideoIdentification").offsetTop - 450
      ) {
        document
          .getElementById("VideoIdentification")
          .classList.remove("translate-x-[-1000px]");
      }
    });
  }, []);
  return (
    <section className="w-full py-[130px] bg-[#fbfafb]">
      <div className="w-[100%] px-[6%] flex justify-center xl:justify-between items-center flex-wrap gap-y-11 xl:gap-y-0">
        <IdentificationText />
        <IdentificationVideo />
      </div>
    </section>
  );
}

function IdentificationText() {
  return (
    <article
      className="w-11/12 md:w-4/5 xl:w-2/5 px-[2%] mx-auto xl:mx-0 translate-x-[1000px] duration-700 ease-out"
      id="TextIdentification"
    >
      <h2 className="my-[8px] text-[#3094ea] text-[35px]">شناسایی هویت</h2>
      <p className="text-[#7c7d8a] leading-[45px] text-[16px] text-justify">
        “اینجانب مهرداد اندامی با کد ملی ۱۲۳۴۵۶۷۸۹۰ درخواست بازکردن حساب در بلو
        را دارم.” یک ویدیو ۴۵ ثانیه‌ای با عبارت خواسته مشابه نمونه بالا ضبط و
        ارسال کنید.
      </p>
    </article>
  );
}

function IdentificationVideo() {
  return (
    <div
      className="w-11/12 md:w-4/5 mx-auto xl:mx-0 xl:w-1/2 flex justify-center xl:justify-start translate-x-[-1000px] duration-700 ease-out"
      id="VideoIdentification"
    >
      <video autoPlay loop muted className="w-[630px]">
        <source src={Video} />
      </video>
    </div>
  );
}
export default Identification;
