import photo1 from "../assets/img/photo-6.jpg";
import photo2 from "../assets/img/photo-7.jpg";
import photo3 from "../assets/img/photo-1.jpg";
import wave from "../assets/img/wave.svg";
import wave2 from "../assets/img/wave-2.svg";

import { Link } from "react-router-dom";

const RightCoverSection = () => {
  return (
    <>
      <div className="w-2/5 relative min-h-screen">
        <img src={photo1} alt="" className="w-full h-screen absolute inset-0 object-cover opacity-80" />
        <div className="absolute inset-0 pt-16 items-center justify-center">
          <p className="text-xl font-thin text-rose-50 mb-4 text-center">Weeding Announcement of</p>
          <p className="text-4xl font-light text-rose-100 mb-4 text-center">Dani & Dina</p>
          <div className="text-center mt-60">
            <button className="px-2 py-1 rounded-full opacity-80 text-rose-700 mb-4 bg-rose-100 animate-bounce hover:bg-rose-600 hover:text-rose-50">
              <Link to="/welcoming">Open Announcement</Link>
            </button>
          </div>
        </div>
        <div className="fixed bottom-0">
          <img src={wave} alt="" className="w-screen opacity-80" />
        </div>
        <div className="fixed bottom-0">
          <img src={wave2} alt="" className="w-screen opacity-70" />
        </div>
        <div className="fixed bottom-0 pl-32 pb-2">
          <p className="text-orange-800 font-thin">Created by Muhammad Nur Auliday Pamungkas</p>
        </div>
      </div>
    </>
  );
};

export default RightCoverSection;
