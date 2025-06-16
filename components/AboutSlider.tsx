import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

export default function AboutSlider() {
  return (
    <div className="lg:w-[700px] w-[95%] mb-20">
      <AwesomeSlider animation="FoldOutAnimation" organicArrows={false}>
        <div className=" w-[100%] m-auto">
          <img src="/img/character2.png" alt="profile" />
        </div>
        <div className=" w-[100%] m-auto">
          <img src="/img/character1.png" alt="profile" />
        </div>
        <div className=" w-[100%] m-auto">
          <img src="/img/character3.png" alt="profile" />
        </div>
        <div className=" w-[100%] m-auto">
          <img src="/img/character4.png" alt="profile" />
        </div>
        <div className=" w-[100%] m-auto">
          <img src="/img/character5.png" alt="profile" />
        </div>
      </AwesomeSlider>
    </div>
  );
}
