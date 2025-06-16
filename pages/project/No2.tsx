import React from 'react';
import type { NextPage } from 'next';

const No2: NextPage = () => {
  return (
    <div>
      <h3 className="xl:text-3xl font-bold text-center mx-auto my-10 w-[90%] lg:w-[500px]">
        Project2
      </h3>

      <p className="xl:text-lg text-center mx-auto my-10 w-[90%] lg:w-[640px]">
        데스크탑 환경에 최적화된 어드민 페이지입니다. SPA형식이 아닌, only 서버
        사이드 렌더링으로 제작하였으며 디자인을 비롯한 프론트엔드 파트를
        맡았습니다. 약 4개월 간의 프로젝트로, 지도내의 해당 지역을 클릭하면 SVG
        애니메이션이 구현되게끔 기획하였습니다. 당시엔 파이썬에 대해 잘 모르고
        있었지만, 동료와 서로 잘 모르는 것을 해결해주며 커뮤니케이션을 통한
        협업을 배우기에 좋은 계기가 되었다고 생각합니다.
      </p>

      <div className=" w-[90%] sm:w-[80%] lg:w-[850px] m-auto">
        <hr className="m-4" />
        <img
          src="/img/project2.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/project2-1.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/project2-2.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/project2-3.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/project2-4.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/project2-5.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/project2-6.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
      </div>
    </div>
  );
};

export default No2;
