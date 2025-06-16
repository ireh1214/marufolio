import React from 'react';
import type { NextPage } from 'next';

const No4: NextPage = () => {
  return (
    <div className=" w-[95%] xl:w-[800px] m-auto">
      <h3 className="xl:text-3xl font-bold text-center mx-auto my-10 w-[90%] lg:w-[500px]">
      etc.
      </h3>

      <p className="xl:text-lg text-center mx-auto my-10 w-[90%] lg:w-[640px]">
        해당 디자인들은 프로젝트 진행 중 계획이 변경되었거나 일부 원페이지
        작업을 진행한 프로젝트들입니다. 아래로 갈수록 오래 된 작업물입니다.
      </p>

      <hr className="m-4" />

      <img
        src="/img/project4-1.png"
        alt="design"
        width={'100%'}
        className="shadow-lg mb-5"
      />
      <img
        src="/img/project4-2.png"
        alt="design"
        width={'100%'}
        className="shadow-lg mb-5"
      />
      <img
        src="/img/project4-3.png"
        alt="design"
        width={'500px'}
        className="shadow-lg mb-5 mx-auto"
      />
    </div>
  );
};

export default No4;
