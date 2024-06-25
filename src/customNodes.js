import React from 'react';
import { Handle } from 'react-flow-renderer';


export const SourceNode = ({ data }) => {
  return (
    <div className='px-16 py-10 border border-black rounded-md bg-blue-300'>
      {data.label}
      <Handle className='w-[6px] h-[25px] rounded-none' type="source" position="right" />
    </div>
  );
};

export const DestinationNode = ({ data }) => {
  return (
    <div className='px-16 py-10  border border-black rounded-md bg-green-300'>
      {data.label}
      <Handle className='w-[6px] h-[25px] rounded-none' type="target" position="left" />
    </div>
  );
};
