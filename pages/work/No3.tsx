import React from 'react';
import type { NextPage } from 'next';

const No2: NextPage = () => {
  return (
    <div>
      <h3 className="xl:text-3xl font-bold text-center mx-auto my-10 w-[90%] lg:w-[500px]">
        기타 작업물들
      </h3>

      <p className="xl:text-lg text-center mx-auto my-10 w-[90%] lg:w-[640px]">
        코딩은 많이 해야 익숙해지고, 시야가 넓어진다는 깨달음이 든 후로 저는
        무언가를 정리할 일이 생길 때 소규모 홈페이지를 만들어 보는 습관이
        생겼습니다. 많은 css라이브러리와 프레임워크들을 체험해 보는
        시간이었습니다.
      </p>
      <div className=" w-[90%] sm:w-[80%] lg:w-[700px] m-auto">
        <hr className="m-4" />
        <img
          src="/img/work4-1.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/work4-2.png"
          alt="design"
          width={'70%'}
          className="shadow-lg mx-auto mb-5"
        />
        <img
          src="/img/work4-3.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/work4-4.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/work4-5.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/work4-6.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
      </div>
    </div>
  );
};

export default No2;
