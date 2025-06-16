import type { NextPage } from 'next';
import { useState } from 'react';
import AboutSlider from '../../components/AboutSlider';
import StackButton from '../../components/Button';

function cls(...classnames: string[]) {
  return classnames.join(' ');
}

const Enter: NextPage = () => {
  const [method, setMethod] = useState<'info' | 'character' | 'stack'>('info');
  const onInfoClick = () => setMethod('info');
  const onCharacterClick = () => setMethod('character');
  const onCtackClick = () => setMethod('stack');

  return (
    <div className="p-4 items-center justify-center">
      <h3 className="text-3xl font-bold text-center mt-10">ABOUT</h3>
      <div className="mt-12">
        <div className="flex flex-col items-center">
          <div className="grid  border-b  w-full mt-8 grid-cols-3 ">
            <button
              className={cls(
                'pb-4 font-medium text-md border-b-2',
                method === 'info'
                  ? ' border-orange-500 text-orange-400'
                  : 'border-transparent hover:text-black text-gray-500',
              )}
              onClick={onInfoClick}
            >
              INFO
            </button>
            <button
              className={cls(
                'pb-4 font-medium text-md border-b-2',
                method === 'character'
                  ? ' border-orange-500 text-orange-400'
                  : 'border-transparent hover:text-black text-gray-500',
              )}
              onClick={onCharacterClick}
            >
              CHARACTER
            </button>
            <button
              className={cls(
                'pb-4 font-medium text-md border-b-2',
                method === 'stack'
                  ? ' border-orange-500 text-orange-400'
                  : 'border-transparent hover:text-black text-gray-500',
              )}
              onClick={onCtackClick}
            >
              STACK
            </button>
          </div>
        </div>

        <div className="flex flex-col mt-8">
          <div className="mt-4">
            {method === 'info' ? (
              <div>
                <div className=" bg-[url('/img/character0.png')] w-[300px] h-[300px] mx-auto mt-5 mb-10" />
                <div className=" lg:w-[600px] w-[90%] m-auto lg:text-xl text-center">
                  안녕하세요! 꿈을 가진 개발자 박이레(마루)입니다. <br />
                  현재<b> 2년 6개월</b> 가량의 경력을 가지고 있고, 현재는
                  react와 Next.js 프레임워크를 이용한 개발 및 퍼블리싱을 주로
                  진행하고 있습니다!
                  <br />
                  <br />제 가장 큰 장점은 <b>기획력과 커뮤니케이션 능력</b>
                  입니다. 저는 어느 곳에 소속되어 있던지{' '}
                  <b>
                    제 의견과 아이디어를 적극적으로 전달하며, 명확한 의사소통 을
                    할 수 있다
                  </b>
                  고 자신합니다. 더 많은 것을 배우고, 세상에 이로운 것을 만들게
                  되는 개발자가 되겠습니다. :D
                  <br />
                  <br />
                  현재 모든 이미지들은 우클릭 방지용 코드가 지정되어 있으며,
                  반응형으로 구성되어 있지만 데스크탑 환경에 조금 더 최적화
                  되어있습니다. 참고 부탁드려요!
                  <br />
                  <br />
                </div>
              </div>
            ) : null}
            {method === 'character' ? (
              <div className="items-center flex flex-col justify-center text-center">
                <AboutSlider />

                <p className="lg:text-xl w-[95%] m-auto">
                  제 마스코트 캐릭터인 아치를 소개합니다!
                  <br />
                  <br />제 꿈은 세상을 이롭게 할 작가(作家)가 되는 것입니다.
                  <br />
                  항상 즐겁게 코딩하며 꿈을 이루는 개발자가 되겠습니다!
                </p>
              </div>
            ) : null}
            {method === 'stack' ? (
              <div className="items-center flex flex-col justify-center lg:mt-20">
                <h3 className="text-xl lg:text-3xl font-bold text-center mt-2">
                  I CAN...
                </h3>
                <p className="grid grid-cols-3 gap-3 lg:grid-cols-5 lg:gap-3 my-4">
                  <StackButton name="React" />
                  <StackButton name="Next.js" />
                  <StackButton name="TweenMax" />
                  <StackButton name="Node.js" />
                  <StackButton name="Git" />
                  <StackButton name="Github" />
                  <StackButton name="SASS" />
                  <StackButton name="Redux" />
                  <StackButton name="tailwindcss" />
                  <StackButton name="TypeScript" />
                  <StackButton name="CKEditor5" />
                  <StackButton name="RestAPI" />
                  <StackButton name="Vercel" />
                  <StackButton name="mongoDB" />
                </p>
                <h3 className="text-xl lg:text-3xl font-bold text-center mt-5">
                  MY INTEREST...
                </h3>
                <p className="grid grid-cols-3 gap-3 lg:grid-cols-4 lg:gap-3 mt-4">
                  <StackButton name="WebRTC" />
                  <StackButton name="Socket.IO" />
                  <StackButton name="Prisma" />
                  <StackButton name="GraphQL" />
                  <StackButton name="swagger" />
                  <StackButton name="Docker" />
                  <StackButton name="AWS" />
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Enter;
