import React from 'react';

const Questions = (props) => {
    return (
        <div className='w-[50%] mx-[10%] mt-10'>
     <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    {props.q1}
  </div>
  <div className="collapse-content"> 
    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
  </div>
</div>
        </div>
    );
};

export default Questions;