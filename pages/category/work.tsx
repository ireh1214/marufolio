import React from 'react';
import type { NextPage } from 'next';
import WorkCard from '../../components/WorkCard';
import Slider from '../../components/Slider';

const work: NextPage = () => {
  return (
    <div className="inter">
      <h3 className="text-3xl font-bold text-center pt-10">MY CODING WORKS</h3>
      <p className="xl:text-lg text-center mx-auto my-10 w-[90%] lg:w-[600px]">
        이미지를 클릭하시면 <b>홈페이지로 접속</b>되거나,{' '}
        <b>세부 이미지들을 확인</b>하실 수 있습니다. <br />
        아래쪽에는 <b>수료증</b>이 나열되어 있습니다.
      </p>
      <hr className="m-4" />
      <article className="justify-items-center grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 w-[100%] h-[100%] m-auto">
        <WorkCard
          name="우리 근처 당근마루"
          cont="당근의 클론 페이지를 제작하였습니다. (supabase 적극 이용) 이미지를 클릭하시면 링크로 이동하실 수 있습니다."
          stackA="react.js"
          stackB="supabase"
          stackC="scss"
          stackD="react-router-dom"
          stackE="Git"
          image="work0.png"
          link="https://daangn-maru.vercel.app/"
        />
        <WorkCard
          name="Commission"
          cont="그림 외주 및 커미션 등을 받는 개인 용도의 사이트를 제작하였습니다."
          stackA="Html"
          stackB="SASS"
          stackC="한영 번역기능"
          stackD="자동복사 기능"
          stackE="Github"
          image="work4-4.png"
          link="https://hi-wolfy-commission.vercel.app/"
        />
        <WorkCard
          name="HANGTAKU!"
          cont="친구들과 함께 글을 쓸 수 있는 다이어리 블로그를 만들자는 취지로 제작하였습니다."
          stackA="React"
          stackB="SASS"
          stackC="CKEditor5"
          stackD="nodemon"
          stackE="Github"
          image="work2.png"
          link="/work/No1"
        />

        <WorkCard
          name="내말이!(진행중)"
          cont="타입스크립트와 react18, swagger 등 최근에 나온 신기술들을 배워보고자 스터디 내에서 만들게 된 프로젝트입니다. 글을 쓸 수 있는 아기자기한 게시판이 특징입니다!"
          stackA="swagger"
          stackB="Tailwindcss"
          stackC="Next.js"
          stackD="Github"
          stackE="Typescript"
          image="work3.png"
          link="/work/No2"
        />

        <WorkCard
          name="기타 디자인 작업물"
          cont="디자인은 포토샵과 일러스트, XD를 필요에 따라 번갈아 사용하였습니다. 개발은 주로 Next.js를 사용하여 작업합니다."
          stackA="Photoshop2022"
          stackB="Illustrator2022"
          stackC="Adobe XD"
          stackD="Next.js"
          stackE="Vercel"
          image="work4.png"
          link="/work/No3"
        />
      </article>
      <h3 className="text-3xl font-bold text-center pt-10 mb-10">
        Certificates
      </h3>
      <div className="xl:px-10">
        <Slider />
      </div>
      <br /> <br />
      <h3 className="text-xl font-bold text-center pt-10 mb-10">
        - 외 GTQ, 웹디자인기능사 자격증 보유
      </h3>
    </div>
  );
};

export default work;
