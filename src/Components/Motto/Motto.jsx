import { useEffect, useState } from "react";
import MottoPicBigSize from "./../../Image/blu-rangi-winner-desktop.jpg";
import MottoPicSmallSize from "./../../Image/blu-rangi-winner-mobile.jpg";
function Motto() {
  return (
    <section className="w-full mt-[165px] lg:mt-[230px]">
      <div className="w-full px-[6%]">
        <MottoImg />
      </div>
    </section>
  );
}

function MottoImg() {
  const [Img, setImg] = useState(MottoPicBigSize);
  useEffect(() => {
    const Resize = () => {
      if (window.innerWidth >= 576) {
        setImg(MottoPicBigSize);
      } else {
        setImg(MottoPicSmallSize);
      }
    };
    window.addEventListener("load", () => {
      setTimeout(() => {
        document.getElementById("pic").classList.remove("opacity-0");
        document.getElementById("pic").classList.add("opacity-100");
      }, 200);
    });
    window.addEventListener("resize", Resize);
    return () => {
      window.removeEventListener("resize", Resize);
    };
  }, []);
  const RotateImage = (e) => {
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;
    let _wi = 60 / e.target.clientWidth;
    let _hi = 60 / e.target.clientHeight;
    let sumX = x * _wi - 30;
    let sumY = y * _hi - 30;
    e.target.style.transform =
      "perspective(1000px)rotateX(" + sumY + "deg)rotateY(" + sumX + "deg)";
  };
  const NonRotate = (e) => {
    e.target.style.transform = null;
  };
  return (
    <figure className="flex justify-center w-full">
      <img
        onMouseMove={RotateImage}
        onMouseOut={NonRotate}
        src={Img}
        alt="عکس برگشت پول"
        className="rounded-[20px] w-[90%] lg:w-4/5 duration-1000 ease-linear opacity-0"
        id="pic"
      />
    </figure>
  );
}
export default Motto;
