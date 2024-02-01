import React, { useEffect, useState } from "react";
import LogoPic from "./../../Image/Logo.png";
function Header() {
  useEffect(() => {
    let _headerLink = document.querySelectorAll("header ul>li>a");
    window.addEventListener("load", () => {
      setTimeout(() => {
        _headerLink.forEach((val) => {
          document.querySelector("header button").classList.remove("opacity-0");
          document.querySelector("header button").classList.add("opacity-100");
          document
            .querySelector("header figure>img")
            .classList.remove("opacity-0");
          document
            .querySelector("header figure>img")
            .classList.add("opacity-100");
          val.classList.remove("opacity-0");
          val.classList.add("opacity-100");
        });
      }, 200);
    });
    window.addEventListener("scroll", () => {
      if (window.scrollY > document.getElementById("header").offsetTop) {
        document.getElementById("header").classList.add("bg-white");
        document
          .getElementById("header")
          .classList.add("shadow-[0_6px_13px_0px_#0000000f]");
      } else {
        document.getElementById("header").classList.remove("bg-white");
        document
          .getElementById("header")
          .classList.remove("shadow-[0_6px_13px_0px_#0000000f]");
      }
    });
  }, []);
  return (
    <header
      className="w-[100%] h-[90px] fixed top-0 left-0 z-40 ease-out duration-500"
      id="header"
    >
      <div className="w-full px-[6%] py-3 flex justify-between items-center">
        <HeaderButton />
        <HeaderNavBar />
        <HeaderLogo />
      </div>
    </header>
  );
}

function HeaderLogo() {
  return (
    <figure className="flex items-center justify-center w-1/6 h-full md:order-3">
      <img
        src={LogoPic}
        alt="لوگوی سایت"
        className="h-[65px] w-[65px] duration-700 ease-out opacity-0 delay-700"
      />
    </figure>
  );
}

function HeaderButton() {
  const [NameButton] = useState("باز کردن حساب");
  return (
    <div className="items-center justify-center hidden h-full lg:w-1/6 md:flex md:order-2 lg:order-1">
      <button className="py-[12px] px-[17px] rounded-[25px] bg-[#3094ea] text-white text-[16px] hover:bg-[#0056b3] duration-700 ease-out opacity-0 delay-150">
        {NameButton}
      </button>
    </div>
  );
}

function HeaderNavBar() {
  const [NavLink] = useState([
    {
      LinkName: "درباره ما",
    },
    {
      LinkName: "بلاگ",
    },
    {
      LinkName: "سوالات متداول",
    },
    {
      LinkName: "موقعیت شغلی",
    },
    {
      LinkName: "بلوجونیور",
    },
  ]);

  const ShowNavMobile = () => {
    document.getElementById("parent-nav-mobile").classList.remove("hidden");
    document.getElementById("parent-nav-mobile").classList.add("flex");
  };

  const CloseNavMobile = () => {
    document.getElementById("parent-nav-mobile").classList.remove("flex");
    document.getElementById("parent-nav-mobile").classList.add("hidden");
  };

  return (
    <nav className="w-1/6 h-full lg:w-1/2 md:order-1 lg:order-2">
      <ul className="items-center justify-center hidden w-full h-full lg:flex">
        {NavLink.map((val, index) => {
          return (
            <li className="flex items-center justify-center list-none grow">
              <a
                href="#"
                id="headerLink"
                className="w-fit h-fit no-underline text-[#737789] duration-700 ease-out hover:text-[#0056b3] opacity-0 delay-300"
              >
                {val.LinkName}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-center w-full lg:hidden">
        <span>
          <i
            class="bi bi-list text-[39px] block mt-3 text-[#252c4b] cursor-pointer"
            onClick={ShowNavMobile}
          ></i>
        </span>
      </div>
      <div
        className="w-[100vw] h-[100vh] bg-[#112233a2] fixed top-0 left-0 z-[999999] hidden justify-center items-center lg:hidden"
        id="parent-nav-mobile"
      >
        <ul
          className="bg-white p-10 rounded-[7px] w-[300px] flex justify-center items-center flex-col h-[350px]"
          id="nav-mobile"
        >
          <div className="w-full mb-4">
            <span
              className="cursor-pointer text-[crimson] text-[2rem]"
              onClick={CloseNavMobile}
            >
              X
            </span>
          </div>
          {NavLink.map((val, index) => {
            return (
              <li className="flex items-center justify-center mb-6 list-none">
                <a
                  href="#"
                  className="w-fit h-fit no-underline text-[#000] duration-700 ease-out hover:text-[#0056b3] opacity-0 delay-300"
                >
                  {val.LinkName}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
export default Header;
