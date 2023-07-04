import { useEffect } from "react";
import Img1 from "../../../assets/images/programa.jpg";
import Img2 from "../../../assets/images/efectivo.png";
import Img3 from "../../../assets/images/noimg.png";
import { useState } from "react";
const Slider = () => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((currentVal) => (currentVal + 1) % 3);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");
    const img3 = document.getElementById("img3");
    switch (currentImg) {
      case 0:
        img1.style.opacity = 1;
        img2.style.opacity = 0;
        img3.style.opacity = 0;
        break;
      case 1:
        img1.style.opacity = 0;
        img2.style.opacity = 1;
        img3.style.opacity = 0;
        break;
      case 2:
        img1.style.opacity = 0;
        img2.style.opacity = 0;
        img3.style.opacity = 1;
        break;
      default:
        break;
    }
  }, [currentImg]);

  return (
    <div className="w-full h-80">
      <img
        id="img1"
        src={Img1}
        alt="img1"
        className="w-full h-80 object-cover absolute"
      />
      <img
        id="img2"
        src={Img2}
        alt="img2"
        className="w-full h-80 object-cover absolute"
      />
      <img
        id="img3"
        src={Img3}
        alt="img3"
        className="w-full h-80 object-cover absolute"
      />
    </div>
  );
};

export default Slider;
