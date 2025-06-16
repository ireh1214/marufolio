import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

export default function Slider() {
  return (
    <AwesomeSlider animation="FoldOutAnimation" organicArrows={false}>
      <div className=" w-[100%] lg:w-[800px] m-auto">
        <img src="/img/comple-1.png" alt="profile" />
      </div>
      <div className=" w-[100%] lg:w-[800px] m-auto">
        <img src="/img/comple-2.jpg" alt="profile" />
      </div>
      <div className=" w-[100%] lg:w-[800px] m-auto">
        <img src="/img/comple-3.jpg" alt="profile" />
      </div>
      <div className=" w-[100%] lg:w-[800px] m-auto">
        <img src="/img/comple-4.jpg" alt="profile" />
      </div>
      <div className=" w-[100%] lg:w-[800px] m-auto">
        <img src="/img/comple-5.jpg" alt="profile" />
      </div>
      <div className=" w-[100%] lg:w-[800px] m-auto">
        <img src="/img/comple-6.jpg" alt="profile" />
      </div>
      <div className=" w-[100%] lg:w-[800px] m-auto">
        <img src="/img/comple-7.jpg" alt="profile" />
      </div>
    </AwesomeSlider>
  );
}
