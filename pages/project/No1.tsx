import React from 'react';
import type { NextPage } from 'next';

const No1: NextPage = () => {
  return (
    <div>
      <h3 className="xl:text-3xl font-bold text-center mx-auto my-10 w-[90%] lg:w-[500px]">
        Project1
      </h3>

      <p className="xl:text-lg text-center mx-auto my-10 w-[90%] lg:w-[640px]">
        모바일 환경에 최적화된 웹앱을 계획하여 제작하였습니다. react-webcam
        라이브러리를 이용하였으나, 알아보던 중 webRTC의 존재를 알게 되어 흥미를
        가지게 되었습니다. 약 5개월 간의 프로젝트로, 물체 탐지 인공지능을 결합한
        뒤 실제 기능 테스트까지 해볼 수 있어 좋은 경험이 되었습니다.
      </p>

      <div className=" w-[90%] sm:w-[80%] md:w-[300px] m-auto">
        <hr className="m-4" />
        <img
          src="/img/project1-1.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/project1-2.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/project1-3.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/project1-4.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/project1-5.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <h3 className="xl:text-xl font-bold text-center my-14">
          아래부터는 직접 구현된 화면이 아닌, 화면 정의서에 있는 내용입니다.
        </h3>
        <img
          src="/img/project1-6.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/project1-7.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/project1-8.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
      </div>
    </div>
  );
};

export default No1;
