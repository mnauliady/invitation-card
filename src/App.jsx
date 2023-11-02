import photo1 from "./assets/img/photo-6.jpg";
import photo2 from "./assets/img/photo-7.jpg";
import photo3 from "./assets/img/photo-1.jpg";
import man from "./assets/img/man.jpg";
import woman from "./assets/img/woman.jpg";
import wave from "./assets/img/wave.svg";
import wave2 from "./assets/img/wave-2.svg";
import wave3 from "./assets/img/wave-5.svg";
import wave4 from "./assets/img/wave-4.svg";
import LeftSection from "./component/LeftSection.jsx";
import RightWelcomingSection from "./component/RightWelcomingSection.jsx";
import RightCoverSection from "./component/RightCoverSection.jsx";

import jsonData from "./utils/data.json";

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
// import "./App.css";
function App() {
  return (
    <div className="flex">
      <LeftSection />
      <Routes>
        <Route path="/" element={<RightCoverSection />} />
        <Route path="/welcoming" element={<RightWelcomingSection />} />
      </Routes>
    </div>
  );
}

export default App;
