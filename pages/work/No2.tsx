import React from 'react';
import type { NextPage } from 'next';

const No2: NextPage = () => {
  return (
    <div>
      <h3 className="xl:text-3xl font-bold text-center mx-auto my-10 w-[90%] lg:w-[500px]">
        스터디 프로젝트 - 내말이!
      </h3>

      <p className="xl:text-lg text-center mx-auto my-10 w-[90%] lg:w-[640px]">
        스터디로 시작한 커뮤니티 프로젝트로, 현재 진행형인 프로젝트입니다.
        최근에 나온 신기술들을 함께 배워보고자 타입 스크립트를 이용하여 MBTI
        게시판을 만드는 것이 목표이며, 아직 화면 단이 모두 구성되지 않았지만
        서로 코드 리뷰와 발표를 진행하며 재미있게 코딩하고 있습니다. :D
        <br />
        <br />
        특히 이번에 새로 업데이트 된 tailwindcss의 신기술들로 반응형을 편하게
        구현하고, SNS 로그인 기능을 구현해볼 수 있었던 것이 가장 재미있었던 것
        같습니다. 디자인과 프론트엔드 쪽의 코드리뷰 및 담당을 맡고 있습니다.
      </p>
      <div className=" w-[90%] sm:w-[80%] lg:w-[500px] m-auto">
        <hr className="m-4" />
        <img
          src="/img/work3-1.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/work3-2.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/work3-3.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
      </div>
    </div>
  );
};

export default No2;
