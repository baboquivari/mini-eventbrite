import React from 'react';
import Spin from '../../public/Spin.gif';

const Loading = () => {
  return (
    <div className='loading'>
      <img src={Spin} /> 
    </div>
  );
};

export default Loading;