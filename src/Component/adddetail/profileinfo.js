import React from 'react';

const Profileinfo = () => {
    return (
        <div>
            <div className='lg:flex m-2 gap-2'>
                <label className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt="" />
                    </div>
                </label>
                <div>
                    <p className='font-bold'>Emon Kumar Das</p>
                    <p className='sm:text-sm'>Chittagong,Bangladesh</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-close border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium gap-4 grid lg:grid-cols-3 mx-3">
                    <div>
                        <p className='text-sm'>76 kg</p>
                        <p className='text-sm'>Weight</p>
                    </div>
                    <div>
                        <p className='text-sm'>76 kg</p>
                        <p className='text-sm'>Weight</p>
                    </div>
                    <div>
                        <p className='text-sm'>76 kg</p>
                        <p className='text-sm'>Weight</p>
                    </div>
                </div>
              
            </div>
        </div>
    );
};

export default Profileinfo;