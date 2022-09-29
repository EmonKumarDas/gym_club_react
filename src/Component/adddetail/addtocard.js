import React, { useState } from 'react';
import Profileinfo from './profileinfo';

const Addtocard = (props) => {
    const { ExTime } = props;
    let total = 0;
    for (const exTimes of ExTime) {
        total = exTimes + total;
    }
    const [value, setValue] = useState('0');
    const addvalue = (values) => {
        let newvalue = +values + +value;
        setValue(newvalue);
    }
    return (
        <div>
            <h1 className='font-serif text-center text-lg font-bold bg-slate-700 p-5 rounded'>Card Details</h1>
            <Profileinfo></Profileinfo>
            <div className='mt-5'>
                <p className='font-serif text-center text-lg font-bold bg-slate-700 p-2 rounded'>Add a Break</p>
                <div className='text-lg font-bold bg-slate-700 p-5 rounded mt-5 grid lg:grid-cols-5 md:grid-cols-2 gap-3'>
                    <button className=' mask mask-circle text-center bg-slate-50 text-black p-1' onClick={() => addvalue('30')}>30</button>
                    <p className=' mask mask-circle text-center bg-slate-50 text-black p-1' onClick={() => addvalue('20')}>20</p>
                    <p className=' mask mask-circle text-center bg-slate-50 text-black p-1' onClick={() => addvalue('40')}>40</p>
                    <p className=' mask mask-circle text-center bg-slate-50 text-black p-1' onClick={() => addvalue('10')}>10</p>
                    <p className=' mask mask-circle text-center bg-slate-50 text-black p-1' onClick={() => addvalue('15')}>15</p>
                </div>
            </div>

            <div className='mt-5'>
                <p className='font-serif text-center text-lg font-bold bg-slate-700 p-2 rounded'>Exercise Details</p>
                <div className='font-bold bg-slate-700 p-5 rounded mt-5 '>
                    <div className='lg:flex md:flex justify-between'>
                        <p className='text-center text-sm md:text-start'>Exercise time</p>
                        <p className='text-sm text-center md:text-start'>{total} s</p>
                    </div>
                    <div className='lg:flex md:flex justify-between'>
                        <p className='text-center text-sm md:text-start'>Break time</p>
                        <p className='text-sm text-center md:text-start'>{value} s</p>
                    </div>
                </div>
                <button className="btn btn-outline btn-secondary mt-10 w-[100%]">Activity Completed</button>
            </div>
        </div>
    );
};

export default Addtocard;