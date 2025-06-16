import React from 'react';
import type { NextPage } from 'next';

const No1: NextPage = () => {
  return (
    <div>
      <h3 className="xl:text-3xl font-bold text-center mx-auto my-10 w-[90%] lg:w-[500px]">
        블로그 프로젝트 - HANGTAKU
      </h3>

      <p className="xl:text-lg text-center mx-auto my-10 w-[90%] lg:w-[640px]">
        친구들과 함께 글을 쓸 수 있는 다이어리 블로그를 개설하고자
        제작되었습니다. 서버는 AWS를, 데이터베이스는 mongoDB를 이용하였는데요,
        데이터베이스를 다뤄보는 것이 당시 처음이었기 때문에 정말 많은 실패가
        있었습니다. 😅
        <br />
        <br />
        하지만 웹 개발의 전체적인 아키텍처를 경험하고 싶은 욕심과 포기하지만
        않아야지, 하는 마음으로 꾸준히 오류를 기록해 보았습니다. 아무것도
        해결되지 않을 때는 하루에 한 번씩 코드를 읽으며 어디가 문제일까
        고민해보는 시간도 가졌습니다. 사실상 다른 것보다 이런 코드에 대한 고민의
        시간이 저를 많이 성장시켜주었다고 생각합니다.
        <br />
        <br />
        코딩을 할 때에 의외로 필요했던 것은 연산 능력이나 영어 능력이 아닌,
        끈기와 기획력이라는 것을 다시금 깨닫게 되는 개인 프로젝트였습니다. 또한
        CKEditor5를 사용하였는데요, 라이브러리를 가져다 쓰는 것과 웹팩에
        대해서도 알아보는 시간을 가졌습니다.
      </p>
      <div className=" w-[90%] sm:w-[80%] lg:w-[700px] m-auto">
        <hr className="m-4" />
        <img
          src="/img/work2.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/work2-1.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/work2-2.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
        <img
          src="/img/work2-3.png"
          alt="design"
          width={'100%'}
          className="shadow-lg mb-5"
        />
      </div>
    </div>
  );
};

export default No1;
