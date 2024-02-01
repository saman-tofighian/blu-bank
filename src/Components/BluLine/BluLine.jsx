import React, { Component, useEffect } from "react";
import ImageBluLine from "./../../Image/bluLine-78ca749b2632c8e7f035d62f2dd756dc.png";
function BluLine() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > document.getElementById("BluLine").offsetTop - 270) {
        document.getElementById("Text_Blue").classList.remove("scale-0");
      }
      if (window.scrollY > document.getElementById("BluLine").offsetTop - 270) {
        document.getElementById("Pic_Blue").classList.remove("opacity-0");
      }
    });
  }, []);
  return (
    <section className="w-[100%] py-[170px] bg-[#3997e9]" id="BluLine">
      <div className="w-full px-[6%]">
        <BluLineArticle />
      </div>
    </section>
  );
}

class BluLineArticle extends Component {
  render() {
    return (
      <article className="flex flex-wrap items-center justify-center w-full xl:justify-between">
        <BluLineImage />
        <BluLineText />
      </article>
    );
  }
}

function BluLineImage() {
  return (
    <figure
      className="w-11/12 xl:w-[45%] md:w-4/6 mx-auto xl:mx-0 opacity-0 duration-700 ease-out"
      id="Pic_Blue"
    >
      <img src={ImageBluLine} alt="BluLineImage" />
    </figure>
  );
}

class BluLineText extends Component {
  constructor() {
    super();
    this.state = {
      h3Text: "بلولاین ؛ همیشه به وقت همه‌ جا",
      pText: `اگر سوالی دارید، در چت اپلیکیشن بلو پیام صوتی و یا متنی بگذارید، یا با
  شماره ۸۷۶۴۱-۰۲۱ تماس بگیرید. کارشناسان بلولاین همیشه آماده‌ی پاسخ‌گویی
  و حل مشکلات احتمالی شما هستند.`,
    };
  }
  render() {
    return (
      <div
        className="w-11/12 md:w-3/4 xl:w-[45%] pt-16 xl:px-6 mx-auto xl:mx-0 scale-0 duration-700 ease-out delay-700"
        id="Text_Blue"
      >
        <h3 className="text-white my-[12px] text-[1.6rem] xl:text-[2rem]">
          {this.state.h3Text}
        </h3>
        <p className="text-white leading-[36px] text-justify my-[8px]">
          {this.state.pText}
        </p>
      </div>
    );
  }
}

export default BluLine;
