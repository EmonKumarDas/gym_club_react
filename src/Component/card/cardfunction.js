
import React, { useEffect, useState } from 'react';
import Addtocard from '../adddetail/addtocard';
import Card from './card';
const Cardfunction = () => {
    const [gym, setgym] = useState([]);
    useEffect(() => {
        fetch("products.json").then(res => res.json()).then(data => setgym(data));

    }, []);
    const [extime,setExtime] = useState([]);
    const addtocard=(gymdata)=>{
        const newExtime = [...extime, gymdata];
        setExtime(newExtime);
       
    }
    return (
        <div>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-4">
                <div className='lg:col-span-3 md:col-span-3 col-span-3'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-12'>
                        {
                            gym.map(gymvalue =>
                                <Card 
                                key={gymvalue.id}
                                addcard = {addtocard}
                                gymdata={gymvalue}></Card>
                            )
                        }

                    </div>
                </div>
                <div className='col-span-1 bg-[#2A303C] w-[80%] ml-[8%] rounded'>
                        <Addtocard ExTime={extime}></Addtocard>

                </div>
            </div>
        </div>
    );
};

export default Cardfunction;