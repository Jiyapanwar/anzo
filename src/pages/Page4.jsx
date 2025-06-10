import React from "react";

const Page4 = () => {
  return (
    <div className="relative h-screen relative p-4 bg-white ">
      <div className="h-full w-full overflow-hidden bg-black rounded-[30px] ">
        <video
          autoplay="true"
          loop
          muted
          className="h-full w-full object-cover"
          src="https://video.wixstatic.com/video/f1c650_988626917c6549d6bdc9ae641ad3c444/1080p/mp4/file.mp4"
        ></video>

        <h1 className=""></h1>
      </div>
    </div>
  );
};

export default Page4;
