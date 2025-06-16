import { useEffect, useState } from 'react';
import Router from 'next/router';

export default function Loading() {
  const [ment1, setMent1] = useState('');
  const [ment2, setMent2] = useState('');
  const [ment3, setMent3] = useState('');
  const [ment4, setMent4] = useState('');
  const [ment5, setMent5] = useState('');

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('3초');
  //     Router.replace('/category/about');
  //   }, 9500);
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setMent1('마루의 포트폴리오 사이트에 오신 것을 환영합니다!');
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMent2('페이지는 카테고리 순서대로 열람하시는 것을 추천드려요!');
    }, 2700);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMent3('천천히 둘러봐주시면 감사하겠습니다 :D');
    }, 4000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMent5('GO!');
    }, 6000);
  }, []);

  return (
    <div>
      <div className=" w-[100%] h-[200px] mb-4 lg:text-lg text-md text-center mx-auto lg:leading-10 leading-9">
        <p>{ment1}</p>
        <p>{ment2}</p>
        <p>{ment3}</p>
        <p>{ment4}</p>
        <br />
        <p className="animate-bounce text-2xl">{ment5}</p>
      </div>
    </div>
  );
}
