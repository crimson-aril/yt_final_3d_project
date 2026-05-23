import React from "react";

const About = () => {
  return (
    <div className="h-[90vh] flex flex-col justify-between px-[3vw] pt-[8vh] pb-[5vh] w-full ">
      <div className="info">
        <div className="description pt-[2vw] w-[70%]">
          <h2 className="text-[2.2rem] font-[400] text-balance">
            I'm Swaraj Singh, a creative developer and designer focused on
            building immersive digital experiences. I blend design and code to
            craft visually striking websites, interactive animations, and
            dynamic 3D environments. My work explores motion, WebGL, and
            Three.js to push beyond traditional web boundaries, turning ideas
            into engaging, high-performance experiences that feel alive and
            intuitive.
          </h2>
        </div>
        <div className="contacts mt-[1.45vw]">
          <h3 className="text-[0.9vw] uppercase font-[600]">Contacts</h3>
          <h3 className="text-[0.96vw]">swarajsingh@gmail.com</h3>
          <h3 className="text-[0.96vw]">+91 92929392</h3>
        </div>
      </div>
      <div className="image">
        <div className="imageDiv h-[18vw] w-[12vw] bg-red-600 ">
          <img
          className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1774606570918-aa9d70b2932b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
