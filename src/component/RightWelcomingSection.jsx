import React, { useEffect, useState, useRef } from "react";

import jsonData from "../utils/data.json";

import photo1 from "../assets/img/photo-6.jpg";
import photo2 from "../assets/img/photo-7.jpg";
import photo3 from "../assets/img/photo-1.jpg";
import man from "../assets/img/man.jpg";
import woman from "../assets/img/woman.jpg";
import wave from "../assets/img/wave.svg";
import wave2 from "../assets/img/wave-2.svg";
import wave3 from "../assets/img/wave-5.svg";
import wave4 from "../assets/img/wave-4.svg";
import music from "../assets/music/Main.mp3";

const RightWelcomingSection = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const images = [`${photo1}`, `${man}`, `${woman}`];
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const previousSlide = () => {
    setSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [wishes, setWishes] = useState("");

  const addData = (e) => {
    e.preventDefault();

    const newData = [...data, { name, wishes }];
    setData(newData);
    setName("");
    setWishes("");
    // console.log(newData);
    // const fileData = JSON.stringify(newData);
    // const blob = new Blob([fileData], { type: "text/plain" });
    // const url = URL.createObjectURL(blob);
    // const link = document.createElement("a");
    // link.download = `data.json`;
    // link.href = url;
    // link.click();
    // fetch("http://127.0.0.1:5173/src/utils/data.json", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newData),
    // }).then(() => {
    // setName("");
    // setWishes("");
    // });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    fetch("http://127.0.0.1:5173/src/utils/data.json")
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData))
      .catch((err) => console.error("Error fetching data:", err));

    playAudio();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="w-2/5 md:h-screen overflow-y-scroll">
        {/* music setting */}
        <audio id="myAudio" loop ref={audioRef}>
          <source src={music} type="audio/mpeg" />
        </audio>
        {/* <button onClick={playAudio} type="button">
          Play
        </button>
        <button onClick={pauseAudio} type="button">
          Pause
        </button> */}

        {/* Section 1 */}
        <section className="min-h-screen">
          <div className="relative">
            <img src={photo1} alt="" className="w-full h-screen absolute inset-0 object-cover opacity-80" />
            <div className="absolute inset-0 pt-16 items-center justify-center">
              <p className="text-xl font-thin text-rose-50 mb-4 text-center">Weeding Announcement of</p>
              <p className="text-4xl font-light text-rose-100 mb-4 text-center">Dani & Dina</p>
            </div>
          </div>
          <div className="relative min-h-screen">
            <img src={wave2} alt="" className="h-[350px] object-cover absolute bottom-0 opacity-90" />
            <img src={wave3} alt="" className=" h-72 object-cover absolute bottom-0 opacity-80" />
            <img src={wave3} alt="" className=" h-80 object-cover absolute bottom-0 opacity-60" />
            <img src={wave2} alt="" className=" h-96 object-cover absolute bottom-0 opacity-80" />
            <div className="absolute bottom-4 px-8">
              <p className="text-xl font-bold text-orange-900 mb-2 text-center">Dear Mr/Mrs/Ms,</p>
              <p className="text-xl font-bold text-orange-900 mb-2 text-center">Family & Friends</p>
              <p className="text-sm font-light text-orange-900 mb-2 text-center">
                We are pleased to announce our upcoming wedding to the family and friends. Our apologize to our loved
                ones who we wished we could have invited. Considering the pandemic restriction, we are unable to invite
                you in person. Please know that your presence will be sincerely missed and we hope that you will be able
                to celebrate with us from afar. Wish you and your family are staying safe and healthy.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="min-h-screen bg-rose-50 py-12">
          <div className=" w-5/6 bg-slate-400 mx-auto rounded-3xl">
            <div className="w-2/3 m-auto pt-12">
              <img src={photo2} alt="" className="rounded-t-full rounded-b-3xl opacity-90" />
            </div>
            <p className="text-center px-8 pt-8 text-rose-50">
              "And of all things We created two mates [i.e., counterparts]; perhaps you will remember."
            </p>
            <p className="text-center pt-4 pb-8 text-rose-100 font-semibold">(Az-Zariyat 51:49)</p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="min-h-screen py-12">
          <div className="relative">
            <div className="absolute h-80 top-52 w-full -z-10 bg-slate-500"></div>
          </div>
          <div className="text-center ">
            <p className="text-slate-700 pb-4 px-8">
              Together with joyful hearts and the grace of God, we joyfully announce the upcoming marriage of:
            </p>
            <div className="">
              <img src={man} className="h-60 mx-auto rounded-3xl" alt="" />
              <p className="text-xl font-semibold">Name</p>
              <p className="px-8">The son of Mr. Parents Man and Mrs. Parents Lady</p>
              <div className="my-2 flex items-center justify-center">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="mr-3 flex h-11 w-11 items-center justify-center bg-slate-400 rounded-full text-slate-200  hover:text-slate-300 hover:bg-slate-500"
                >
                  <svg
                    className="fill-current"
                    role="img"
                    width="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  className="mr-3 flex h-11 w-11 items-center justify-center bg-slate-400 rounded-full text-slate-200  hover:text-slate-300 hover:bg-slate-500"
                >
                  <svg
                    className="fill-current"
                    role="img"
                    width="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>X</title>
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="pt-4">
              <img src={woman} className="h-60 mx-auto rounded-3xl" alt="" />
              <p className="text-xl font-semibold">Name</p>
              <p className="px-8">The daughter of Mr. Parents Man and Mrs. Parents Lady</p>
              <div className="my-2 flex items-center justify-center">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="mr-3 flex h-11 w-11 items-center justify-center bg-slate-400 rounded-full text-slate-200  hover:text-slate-300 hover:bg-slate-500"
                >
                  <svg
                    className="fill-current"
                    role="img"
                    width="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  className="mr-3 flex h-11 w-11 items-center justify-center bg-slate-400 rounded-full text-slate-200  hover:text-slate-300 hover:bg-slate-500"
                >
                  <svg
                    className="fill-current"
                    role="img"
                    width="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>X</title>
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="min-h-screen py-12">
          <div className="mx-auto relative h-screen w-4/5 ">
            <div className="w-full h-1/2 absolute inset-0 bg-cover bg-center z-10">
              <img src={photo2} alt="" className="rounded-3xl mx-auto" />
            </div>
            <div className="absolute -bottom-20 left-8 w-5/6 bg-rose-100 pt-20 text-center rounded-3xl mb-4">
              <p>Read and follow our love of live journey as a couple here:</p>
              <button className="bg-rose-400 px-2 py-1.5 mt-2 mb-4 rounded-md text-rose-50 hover:bg-rose-500 hover:text-rose-100">
                Our Love Story
              </button>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section className="min-h-screen bg-rose-50 py-12 mt-12">
          <div className=" w-5/6 bg-slate-400 h-[510px] mx-auto rounded-3xl">
            <h3 className="text-center text-3xl px-8 pt-8 text-rose-50">Wedding Celebration</h3>
            <p className="text-center px-8 pt-2 text-rose-50">will be held in:</p>
            <div className="flex flex-row w-full text-center px-16">
              <div className="w-1/4  mx-2 animate-pulse">
                <h3 className="text-3xl pt-8 text-rose-50 ">0</h3>
                <h3 className="text-xl text-rose-50">days</h3>
              </div>
              <p className="text-6xl text-rose-50">.</p>
              <div className="w-1/4 mx-2 animate-pulse">
                <h3 className="text-center text-3xl pt-8 text-rose-50">0</h3>
                <h3 className="text-xl text-rose-50">hours</h3>
              </div>
              <p className="text-6xl text-rose-50">.</p>
              <div className="w-1/4  mx-2 animate-pulse">
                <h3 className="text-center text-3xl pt-8 text-rose-50">0</h3>
                <h3 className="text-xl text-rose-50">mins</h3>
              </div>
              <p className="text-6xl text-rose-50">.</p>
              <div className="w-1/4 mx-2 animate-pulse">
                <h3 className="text-center text-3xl  pt-8 text-rose-50">0</h3>
                <h3 className="text-xl text-rose-50">secs</h3>
              </div>
            </div>
            <div className="w-full py-8 relative">
              <div className="absolute">
                <img src={photo3} alt="" className="mx-auto rounded-3xl opacity-80 brightness-75 w-3/4 object-cover" />
              </div>
              <div className="absolute items-center justify-center inset-0 pt-16">
                <p className="text-center text-rose-50 text-2xl mb-2">Holy Matrimony</p>
                <p className="text-center text-rose-50 text-xl font-light mb-2">09.00 WIB</p>
                <p className="text-center text-rose-50 text-xl font-light mb-2">Friday, 22 October 2021</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="min-h-screen">
          <div className="relative">
            {/* Gambar sebagai latar belakang */}
            <img src={photo1} alt="" className="w-full h-screen absolute inset-0 object-cover opacity-80" />

            {/* Teks di tengah gambar */}
            <div className="absolute inset-0 pt-8 items-center justify-center">
              {/* <p className="text-white text-2xl font-bold ">Tulisan di Tengah</p> */}
              <p className="text-4xl font-thin text-rose-50 mb-2 text-center">Life Wedding</p>
              <p className="text-2xl font-light text-rose-100 mb-2 text-center">Dani & Dina</p>
              <div className="mx-auto w-5/6">
                <div className="px-2 py-2 bg-rose-100 rounded-2xl">
                  <iframe
                    className="rounded-xl"
                    width="100%"
                    height="220px"
                    src={`https://www.youtube.com/embed/AhGpYiRxqlw`}
                  ></iframe>
                </div>
              </div>
              <div className="text-center mt-4">
                <a
                  href="https://www.youtube.com/watch?v=AhGpYiRxqlw&feature=youtu.be"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-2 py-1 rounded-full opacity-80 text-rose-700 mb-2 bg-rose-100 animate-bounce hover:bg-rose-600 hover:text-rose-50">
                    Open Via Youtube
                  </button>
                </a>
              </div>
              <p className="text-2xl font-light text-rose-100 mb-2 text-center">Wedding Gift</p>
              <p className="font-light px-8 text-rose-100 mb-2 text-center">
                For beloved ones who may want to show your sincere love by sending a gift, please kindly tap the button
                below:
              </p>
              <div className="text-center mt-4">
                <button className="px-2 py-1 rounded-full opacity-80 text-rose-700 mb-2 bg-rose-100 hover:bg-rose-600 hover:text-rose-50">
                  Bank Transfer
                </button>
              </div>
              <div className="text-center mt-2">
                <button className="px-2 py-1 rounded-full opacity-80 text-rose-700 mb-2 bg-rose-100 hover:bg-rose-600 hover:text-rose-50">
                  Send Gift
                </button>
              </div>
              <div className="text-center mt-2">
                <button className="px-2 py-1 rounded-full opacity-80 text-rose-700 mb-2 bg-rose-100  hover:bg-rose-600 hover:text-rose-50 animate-bounce">
                  Confirmation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section className=" py-6">
          <div className="max-w-screen-lg mx-auto p-4">
            <div className="relative">
              <img id="image" src={images[slide]} alt="Image" className="mx-auto rounded-2xl " />
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 ">
                <button id="prev" onClick={previousSlide}>
                  <span className="text-slate-400 hover:text-slate-600 text-6xl">&#8249;</span>
                </button>
              </div>
              <div className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full">
                <button id="next" onClick={nextSlide}>
                  <span className="text-slate-400 hover:text-slate-600 text-6xl">&#8250;</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8 */}
        <section className="min-h-screen">
          <div className="relative">
            <img
              src={photo2}
              alt=""
              className="w-full h-screen absolute inset-0 object-cover opacity-60 brightness-75"
            />

            <div className="absolute inset-0 pt-8 items-center justify-center">
              <p className="text-4xl font-thin text-slate-600 mb-2 text-center">Prayers & Wishes</p>
              <p className="text-base font-light px-8 text-slate-600 mb-2 text-center">
                Please leave your sincere prayers and wishes to us and our families:
              </p>
              <div className="mx-auto w-full px-10 mb-8">
                <form onSubmit={addData}>
                  <input
                    className="w-full mb-2 pl-2 py-1 rounded-md bg-rose-100 placeholder-slate-600 text-slate-600 focus:ring-0"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <textarea
                    className="w-full pl-2 pt-1 rounded-md bg-rose-100 placeholder-slate-600 text-slate-600"
                    name=""
                    id=""
                    placeholder="Prayer and Wishes"
                    rows={3}
                    value={wishes}
                    onChange={(e) => setWishes(e.target.value)}
                  ></textarea>
                  <div className="text-right">
                    <button
                      type="submit"
                      className="bg-slate-600 px-2 py-1 rounded-md text-slate-100 hover:bg-slate-500"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>

              <div className="mx-auto w-5/6 h-80 px-2 pb-2 overflow-scroll">
                {data.map((item, index) => (
                  <div className="bg-rose-100 py-1 pl-2 rounded-b-xl rounded-tr-xl mb-2">
                    <p className="mb-1 text-slate-600 font-semibold" key={index}>
                      {item.name}
                    </p>
                    <p className="text-slate-900 ">{item.wishes}</p>
                  </div>
                ))}
              </div>

              <div className="bg-slate-300 mt-2 pt-2">
                <p className="text-sm font-base px-8 text-slate-600 mb-2 text-center">
                  It will be a joy for us if you are still willing to give your blessing from afar. Please know that you
                  are in our thoughts and will be in our hearts, even though we are deeply sorry, we can't invite you to
                  the ceremony due to the pandemic restriction. Thank you for all the words, prayers, and attention
                  given.
                </p>
                <p className="text-4xl font-thin text-slate-600 pb-8 text-center">Nailal & Via</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RightWelcomingSection;
