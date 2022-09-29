import React from 'react';

const Questions = (props) => {
    return (
        <div className='w-[50%] lg:mx-[10%] md:mx-[10%] mx-[20%] mt-10'>
     <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    {props.q1}
  </div>
  <div className="collapse-content"> 
    <p>{props.q1Ans}</p>
  </div>
</div>
        </div>
    );
};

export default Questions;