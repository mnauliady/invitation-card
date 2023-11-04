import photo1 from "../assets/img/photo-6.jpg";
import wave3 from "../assets/img/wave-4.svg";
import wave2 from "../assets/img/wave-2.svg";

import { Link } from "react-router-dom";

const RightCoverSection = () => {
  return (
    <>
      <div className="w-full sm:w-3/4 md:w-3/5 mx-auto lg:w-2/5 min-h-screen ">
        <div className="min-h-screen">
          <div className="relative">
            <img
              src={photo1}
              alt=""
              className="w-full h-screen absolute inset-0 object-cover opacity-80 brightness-75"
            />
          </div>
          <div></div>
          <div className="relative ">
            <div className="absolute inset-0 top-20">
              <p className="text-lg font-light text-rose-100 mb-2 text-center">WEDDING ANNOUNCEMENT OF</p>
              <h3 className="text-4xl font-light text-rose-100 mb-2 text-center font-merienda">Nailal and Via</h3>
            </div>
            <div className="absolute inset-0 top-80 z-50">
              <div className="text-center">
                <button className="py-1 px-2 text-center rounded-full opacity-80 text-rose-700 mb-4 bg-rose-100 animate-bounce hover:bg-rose-600 hover:text-rose-50">
                  <Link to="/welcoming">Open Announcement</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="relative min-h-screen">
            <img src={wave3} alt="" className=" h-44 object-cover absolute bottom-0 opacity-80" />
            <img src={wave3} alt="" className=" h-48 object-cover absolute bottom-0 opacity-60" />
            <img src={wave2} alt="" className=" h-44 object-cover absolute bottom-0 opacity-80" />
            <img src={wave2} alt="" className=" h-48 object-cover absolute bottom-0 opacity-80" />
            <div className=" absolute bottom-6 inset-x-0 ">
              <p className="text-lg font-light text-orange-900 mb-2 text-center ">Created by Muhammad Nur Auliady</p>
              <p className="text-lg font-light text-orange-900 mb-2 text-center ">© 2023 All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightCoverSection;
