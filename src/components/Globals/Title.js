import React from 'react';

export default function Title({title}) {
  return (
    <div className='row'>
    <div className="col text-center mb-3">
      <h1 className='title-1 display-4 text-capitalize'>{title}</h1>
    </div>
    </div>
  )
}
