import React from 'react';

const Profileinfo = () => {
    return (
        <div>
            <div className='flex m-2 gap-2'>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt="" />
                    </div>
                </label>
                <div>
                    <p className='font-bold'>Emon Kumar Das</p>
                    <p>Chittagong,Bangladesh</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-close border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium gap-4 grid grid-cols-3 mx-3">
                    <div>
                        <p>76 kg</p>
                        <p>Weight</p>
                    </div>
                    <div>
                        <p>76 kg</p>
                        <p>Weight</p>
                    </div>
                    <div>
                        <p>76 kg</p>
                        <p>Weight</p>
                    </div>
                </div>
              
            </div>
        </div>
    );
};

export default Profileinfo;