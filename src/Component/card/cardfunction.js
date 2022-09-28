
import React, { useEffect, useState} from 'react';
import Card from './card';
const Cardfunction = () => {
    const [gym,setgym] = useState([]);
    useEffect(()=>{
        fetch("products.json").then(res=>res.json()).then(data=>setgym(data));

    },[])
    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
            <div className='col-span-3'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12'>
                {
                     gym.map(gymvalue=>
                        <Card gymdata={gymvalue}></Card> 
                    )
                }
               
              </div>
              </div>
            <div className='col-span-1 bg-[#2A303C] w-[90%] ml-[8%] rounded'>

                
            </div>
            </div>
        </div>
    );
};

export default Cardfunction;