import photo1 from "../assets/img/photo-6.jpg";

const LeftSection = () => {
  return (
    <>
      <div className="lg:w-3/5 lg:block hidden relative mr-1.5">
        <img src={photo1} alt="" className="w-full h-screen absolute inset-0 object-cover opacity-80 brightness-75" />

        <div className="absolute inset-0 pt-16 px-8">
          <p className="text-2xl font-thin text-rose-50 mb-4 uppercase">Weeding Announcement</p>
          <p className="text-8xl font-light text-rose-100 mb-4 font-merienda">Nailal & Via</p>
          <p className="text-xl italic font-light text-rose-50 mb-4">
            “And I knew exactly how old Walt Disney’s Cinderella felt when she found her prince.”
            <br />— Elizabeth Young
          </p>
        </div>
      </div>
    </>
  );
};

export default LeftSection;
