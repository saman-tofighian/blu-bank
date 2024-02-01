import React, { useEffect } from "react";

function GoToTop() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > document.getElementById("GoToTop").offsetTop - 350) {
        document.getElementById("GoToTop").classList.remove("opacity-0");
        document.getElementById("GoToTop").classList.remove("invisible");
      } else {
        document.getElementById("GoToTop").classList.add("opacity-0");
        document.getElementById("GoToTop").classList.add("invisible");
      }
    });
  });
  return (
    <a
      href="#"
      id="GoToTop"
      className="flex opacity-0 invisible justify-center items-center bg-[#3094ea] text-white rounded-[50%] fixed bottom-[40px] right-[17px] xl:right-[40px] z-50 w-[45px] h-[45px] shadow-md ease-linear duration-700 hover:bg-[#175a94]"
    >
      <i class="bi bi-chevron-up text-[19px] leading-[40px]"></i>
    </a>
  );
}

export default GoToTop;
