import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';

const activity: NextPage = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <h3 className="text-3xl font-bold text-center my-10">ACTIVITY</h3>
      <p className=" w-[90%] lg:w-[500px] mx-auto my-4">
        <img src="/img/test2.png" width={'100%'} alt="profile" />
      </p>
      <p className=" lg:w-[560px] sm:w-[90%] w-[96%] mx-auto my-4 xl:text-xl text-center ">
        열람해주셔서 감사합니다!
      </p>
      <p>아래의 수단으로 저와 소통하실 수 있습니다!</p>

      <p className="flex gap-1 mt-10 md:gap-3">
        <button className="md:text-lg text-sm bg-white hover:border-0 hover:text-white transition-all hover:bg-gray-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ireh1214"
          >
            Github 바로가기
          </a>
        </button>
        <button className="md:text-lg text-sm bg-white hover:border-0 hover:text-white transition-all hover:bg-blue-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/error_is_GOTONG"
          >
            Twitter 바로가기
          </a>
        </button>
        <button className="md:text-lg text-sm bg-white hover:border-0 hover:text-white transition-all hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ireh1214"
          >
            KakaoTalk 바로가기
          </a>
        </button>
      </p>
    </div>
  );
};

export default activity;
