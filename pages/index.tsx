import React from 'react';
import type { NextPage } from 'next';
import Loading from '../components/Loading';

const index: NextPage = () => {
  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };
  return (
    <div className="text-center">
      <p className="w-[400px] mx-auto my-20 p-10">
        <img className="w-[100%]" src="/img/profile.png" alt="profile" />
      </p>
      <Loading />
      <small className="p-3">
        Copyright &copy; <span>{thisYear()}</span> all rights reserved.
      </small>
      <br />
      <small className="p-3">
      본 사이트의 모든 작업은 본인이 100%로 기획하고 진행하였음을 알립니다.
      </small>
    </div>
  );
};

export default index;
