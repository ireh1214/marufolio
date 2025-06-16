import React from 'react';
import type { NextPage } from 'next';
import ProjectCard from '../../components/ProjectCard';

const project: NextPage = () => {
  return (
    <div className="inter">
      <h3 className="text-3xl font-bold text-center pt-10">PROJECT WORKS</h3>

      <p className="xl:text-lg text-center mx-auto my-10 w-[90%] lg:w-[600px]">
        이미지를 클릭하시면 <b>홈페이지로 접속</b>되거나,{' '}
        <b>세부 이미지들을 확인</b>하실 수 있습니다.
      </p>
      <hr className="m-4" />

      <article className="justify-items-center grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 w-[100%] h-[100%] m-auto">
        <ProjectCard
          name="맞춤 광고 플랫폼 Re:connect"
          cont="반응형으로 제작된 풀 페이지 홈페이지입니다. 디자인 피드백에도 적극 참여하였으며, 퍼블리싱은 본인 100% 하드코딩 작업하였습니다."
          stackA="html5"
          stackB="css"
          stackC="scss"
          stackD="javascript"
          stackE="Vercel"
          image="project10.png"
          link="https://recconect.vercel.app/"
        />
        <ProjectCard
          name="팝업캐시 풀 페이지"
          cont="반응형으로 제작된 풀 페이지 홈페이지입니다. 디자인 피드백에도 적극 참여하였으며, 퍼블리싱 및 애니메이션은 일부 재량으로 작업하였습니다."
          stackA="html5"
          stackB="css"
          stackC="scss"
          stackD="javascript"
          stackE="fullpage"
          image="project9.png"
          link="https://mobiletest-plum.vercel.app/"
        />
        <ProjectCard
          name="돌려라 행운 룰렛"
          cont="게임 형식의 작업물입니다. 세 가지의 게임으로 이루어져 있습니다만, 백엔드는 현재 연결이 불가하여 실제 게임 실행은 불가능합니다. 양해 부탁드립니다!"
          stackA="html5"
          stackB="css"
          stackC="scss"
          stackD="javascript"
          stackE="Vercel"
          image="project12.png"
          link="https://gamezone-delta.vercel.app/html/main.html"
        />
        <ProjectCard
          name="Animation"
          cont="약 15초의 애니메이션으로 구성된 원 페이지 제작물입니다. 애니메이션에 용이한 gsap 라이브러리를 적극 이용하였습니다."
          stackA="html5"
          stackB="gsap"
          stackC="css animation"
          stackD="javascript"
          stackE="Vercel"
          image="project11.png"
          link="https://img-performance.vercel.app/"
        />
        <ProjectCard
          name="Homepage"
          cont="Next.js 프레임워크를 활용하여 제작한 홈페이지입니다. 기획부터 제작까지 모든 작업을 제가 맡아서 진행하였습니다만, 작업한지 오랜 시간이 지나 일부 변화된 페이지가 있음을 확인하였습니다."
          stackA="node.js"
          stackB="Material UI"
          stackC="Next.js"
          stackD="UIKit"
          stackE="AWS"
          image="project1.png"
          link="https://ai4blockchain.com/"
        />
        <ProjectCard
          name="인천공항 반입금지 물품 체킹"
          cont="반입금지 물품 체킹 시스템으로 웹앱 개발에 디자인과 퍼블리싱, 프론트엔드 파트로 기여하였습니다. 아쉽게도 실제 런칭이 되지는 않은 서비스입니다."
          stackA="node.js"
          stackB="React"
          stackC="Next.js"
          stackD="Tailwindcss"
          stackE="Github"
          image="project1-0.png"
          link="/project/No1"
        />
        <ProjectCard
          name="Project2"
          cont="탄소 배출량 저감을 위한 원자재 배합 추천 시스템의 어드민 페이지를 개발하였습니다. 요청받은 디자인과 퍼블리싱, 프론트엔드 파트로 기여하였습니다."
          stackA="css"
          stackB="AWS"
          stackC="svg animation"
          stackD="map API"
          stackE="Git"
          image="project2-0.png"
          link="/project/No2"
        />

        <ProjectCard
          name="Project6"
          cont=""
          stackA="node.js"
          stackB="React"
          stackC="Next.js"
          stackD="Tailwindcss"
          stackE="Github"
          image="project3.png"
          link="/project/No3"
        />
        <ProjectCard
          name="기타 작업물들"
          cont=""
          stackA="node.js"
          stackB="React"
          stackC="Next.js"
          stackD="Tailwindcss"
          stackE="Github"
          image="project4.png"
          link="/project/No4"
        />
      </article>
    </div>
  );
};

export default project;
