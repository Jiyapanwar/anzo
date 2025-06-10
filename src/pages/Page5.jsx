import React from "react";

const Page5 = () => {
  return (
    <div>
      <div className="h-screen relative p-3 bg-white">
        <div className="h-full w-full overflow-hidden bg-black rounded-[30px]">
          <video
            autoplay="true"
            loop
            muted
            className="h-full w-full object-cover "
            src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/1080p/mp4/file.mp4"
          ></video>
          <h1 className="text-white font-[anzo2] text-[20vw] uppercase absolute bottom-32 left-22  ">
            STEP INTO THE FUTURE.
          </h1>
          <button className="text-white bg-black border-4  px-12 py-3 absolute hover:bg-gray-500 z-11 rounded-full bottom-35 left-[40%] ">
            CREATE YOUR LEGACY
          </button>
          <span className="text-gray-300 font-[anzo1] absolute z-11 bottom-10 left-[43%]">
            © 2025 Anzo.Studio®
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page5;
