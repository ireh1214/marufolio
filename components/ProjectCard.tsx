import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard(props) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-sm hover:scale-105 hover:shadow-2xl transition-all">
      <Link href={`${props.link}`}>
        <a>
          <Image
            src={`/img/${props.image}`}
            width="100%"
            height="100%"
            className="w-full"
            alt="profile"
            layout="responsive"
            objectFit="contain"
          />
        </a>
      </Link>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className="text-gray-700 text-base">{props.cont}</p>
      </div>
      <div className="px-4 pt-3 pb-2">
        <span className="inline-block bg-gray-200 transition-all hover:bg-orange-400 hover:text-white rounded-full px-3 py-1 text-[12px] font-semibold text-gray-700 mr-2 mb-2">
          #{props.stackA}
        </span>
        <span className="inline-block bg-gray-200 transition-all hover:bg-orange-400 hover:text-white  rounded-full px-3 py-1 text-[12px] font-semibold text-gray-700 mr-2 mb-2">
          #{props.stackB}
        </span>
        <span className="inline-block bg-gray-200 transition-all hover:bg-orange-400 hover:text-white  rounded-full px-3 py-1 text-[12px] font-semibold text-gray-700 mr-2 mb-2">
          #{props.stackC}
        </span>
        <span className="inline-block bg-gray-200 transition-all hover:bg-orange-400 hover:text-white  rounded-full px-3 py-1 text-[12px] font-semibold text-gray-700 mr-2 mb-2">
          #{props.stackD}
        </span>
        <span className="inline-block bg-gray-200 transition-all hover:bg-orange-400 hover:text-white  rounded-full px-3 py-1 text-[12px] font-semibold text-gray-700 mr-2 mb-2">
          #{props.stackE}
        </span>
      </div>
    </div>
  );
}
