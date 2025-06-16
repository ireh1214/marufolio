import React from 'react';

export default function stackButton(props) {
  return (
    <button className="text-center focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-4 py-1 hover:bg-orange-600 text-sm xl:text-lg text-white">
      {props.name}
    </button>
  );
}
