import { useEffect } from "react";
import Video from "./../../Image/SmartTransfer-dbc3f1688a360753840a55b09ddd3f50.mp4";

function TransferMoney() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.scrollY >
        document.getElementById("videoTransfer").offsetTop - 450
      ) {
        document
          .getElementById("videoTransfer")
          .classList.remove("translate-x-[1000px]");
      }
      if (
        window.scrollY >
        document.getElementById("textTransfer").offsetTop - 600
      ) {
        document
          .getElementById("textTransfer")
          .classList.remove("translate-x-[-1000px]");
      }
    });
  }, []);
  return (
    <section className="w-full py-[130px]">
      <div className="w-[100%] px-[6%] flex justify-center xl:justify-between items-center flex-wrap gap-y-11 xl:gap-y-0">
        <TransferMoneyVideo />
        <TransferMoneyText />
      </div>
    </section>
  );
}

function TransferMoneyVideo() {
  return (
    <div
      className="w-11/12 md:w-4/5 mx-auto xl:mx-0 xl:w-1/2 flex justify-center translate-x-[1000px] duration-700 ease-out"
      id="videoTransfer"
    >
      <video autoPlay loop muted className="w-[400px]">
        <source src={Video} />
      </video>
    </div>
  );
}

function TransferMoneyText() {
  return (
    <article
      className="w-11/12 md:w-4/5 xl:w-[45%] px-[2%] mx-auto xl:mx-0 translate-x-[-1000px] duration-700 ease-out"
      id="textTransfer"
    >
      <h2 className="my-[8px] text-[#3094ea] text-[37px]">انتقال هوشمند پول</h2>
      <p className="text-[#7c7d8a] leading-[45px] text-[16px] text-justify">
        «انتقال هوشمند پول» یعنی راحت و بدون دردسر پولی را که می‌خواهید، جابه جا
        کنید. در بلو، لازم نیست شما بدانید پایا، ساتنا یا شبا چیست و برای انتقال
        چه میزان پول از کدامیک از آنها باید استفاده کرد. ما این کار را برای شما
        انجام می‌دهیم.
      </p>
    </article>
  );
}

export default TransferMoney;
