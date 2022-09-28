import React from 'react';
import Profileinfo from './profileinfo';

const Addtocard = (props) => {
    const {ExTime} = props;
    let total = 0;
    for(const exTimes of ExTime){
        total = exTimes + total;
    }
    return (
        <div>
            <h1 className='font-serif text-center text-lg font-bold bg-slate-700 p-5 rounded'>Card Details</h1>
          <Profileinfo></Profileinfo>
            <div className='mt-5'>
            <p className='font-serif text-center text-lg font-bold bg-slate-700 p-2 rounded'>Add a Break</p>
            <div className='text-lg font-bold bg-slate-700 p-5 rounded mt-5 grid grid-cols-5'>
           <p className=' mask mask-circle text-center bg-slate-50 text-black p-1'>30</p>
           <p className=' mask mask-circle text-center bg-slate-50 text-black p-1'>20</p>
           <p className=' mask mask-circle text-center bg-slate-50 text-black p-1'>40</p>
           <p className=' mask mask-circle text-center bg-slate-50 text-black p-1'>10</p>
           <p className=' mask mask-circle text-center bg-slate-50 text-black p-1'>15</p>
            </div>
            </div>

            <div className='mt-5'>
            <p className='font-serif text-center text-lg font-bold bg-slate-700 p-2 rounded'>Exercise Details</p>
            <div className='font-bold bg-slate-700 p-5 rounded mt-5 '>
            <div className='flex justify-between'>
                <p>Exercise time</p>
                <p className='text-sm'>{total} seconds</p>
            </div>
            <div className='flex justify-between'>
                <p>Break time</p>
                <p className='text-sm'>15 seconds</p>
            </div>
            </div>
            <button className="btn btn-outline btn-secondary mt-10 w-[100%]">Activity Completed</button>
            </div>
        </div>
    );
};

export default Addtocard;