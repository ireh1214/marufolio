import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiOutlineTwitter, AiFillMessage } from 'react-icons/ai';
import { cls } from '../libs/utils';
import { useRouter } from 'next/router';

export default function SideBar() {
  const router = useRouter();

  return (
    <div className="sideBar h-[50px] xl:h-[90vh] w-full xl:py-10 flex xl:items-center items-center bg-white">
      <div className="hidden xl:block text-center">
        <Link href="/">
          <a>
            <div className=" cursor-pointer rounded-full bg-[url('/img/profile2.png')] w-[150px] h-[150px] m-4 shadow-lg" />
            <p className="text-4xl mb-1 font-black cursor-pointer">마루</p>
          </a>
        </Link>
        <p className="text-md text-gray-400">@error_is_GOTONG</p>
      </div>

      <div className=" w-full xl:h-64 justify-around text-center xl:mt-10 mx-auto text-md xl:text-xl flex xl:block items-center">
        <li className="h-[20%]">
          <Link href="/">
            <a
              className={cls(
                router.pathname === '/'
                  ? 'text-orange-500'
                  : 'hover:text-orange-400 transition-colors',
              )}
            >
              HOME
            </a>
          </Link>
        </li>

        <li className="h-[20%]">
          <Link href="/category/about">
            <a
              className={cls(
                router.pathname === '/category/about'
                  ? 'text-orange-500'
                  : 'hover:text-orange-400 transition-colors',
              )}
            >
              ABOUT
            </a>
          </Link>
        </li>
        <li className="h-[20%]">
          <Link href="/category/project">
            <a
              className={cls(
                router.pathname === '/category/project'
                  ? 'text-orange-500'
                  : 'hover:text-orange-400 transition-colors',
              )}
            >
              PROJECT
            </a>
          </Link>
        </li>
        <li className="h-[20%]">
          <Link href="/category/work">
            <a
              className={cls(
                router.pathname === '/category/work'
                  ? 'text-orange-500'
                  : 'hover:text-orange-400 transition-colors',
              )}
            >
              WORK
            </a>
          </Link>
        </li>
        <li className="h-[20%]">
          <Link href="/category/activity">
            <a
              className={cls(
                router.pathname === '/category/activity'
                  ? 'text-orange-500'
                  : 'hover:text-orange-400 transition-colors',
              )}
            >
              ACTIVITY
            </a>
          </Link>
        </li>
      </div>
      <p className=" w-[50%] my-auto items-center justify-around hidden xl:flex">
        <a target="_blank" rel="noreferrer" href="https://github.com/ireh1214">
          <AiFillGithub size="20" color="#bbb" />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/error_is_GOTONG"
        >
          <AiOutlineTwitter size="20" color="#bbb" />
        </a>

        <a target="_blank" rel="noreferrer" href="https://github.com/ireh1214">
          <AiFillMessage size="20" color="#bbb" />
        </a>
      </p>
    </div>
  );
}
