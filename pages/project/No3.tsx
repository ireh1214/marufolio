import React from 'react';
import type { NextPage } from 'next';

const No3: NextPage = () => {
  return (
    <div className=" w-[95%] xl:w-[800px] m-auto">
      <h3 className="xl:text-3xl font-bold text-center mx-auto my-10 w-[90%] lg:w-[500px]">
        Project6
      </h3>

      <p className="xl:text-lg text-center mx-auto my-10 w-[90%] lg:w-[640px]">
        타사의 화면 정의서에 따라 메인 홈페이지를 만드는 작업으로, React
        bootstrap을 이용하였습니다.
      </p>

      <hr className="m-4" />

      <img
        src="/img/design.png"
        alt="design"
        width={'100%'}
        className="shadow-lg mb-5"
      />
      <img
        src="/img/project3-1.png"
        alt="design"
        width={'100%'}
        className="shadow-lg mb-5"
      />
      <img
        src="/img/project3-2.png"
        alt="design"
        width={'100%'}
        className="shadow-lg mb-5"
      />
      <img
        src="/img/project3-3.png"
        alt="design"
        width={'100%'}
        className="shadow-lg mb-5"
      />
    </div>
  );
};

export default No3;
