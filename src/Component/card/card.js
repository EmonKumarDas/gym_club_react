import React from 'react';

const Card = (props) => {
    const { category, name, age, time, img } = props.gymdata;
    return (

        <div className="card lg:w-[25vw] md:w-[35vw] w-[60vw] bg-base-100 shadow-xl m-5 relative">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category}</h2>
                <h2 className="card-title text-start">For Name : {name}</h2>
                <h2 className="card-title">For Age : {age}</h2>
                <h2 className="card-title">For Time : {time}</h2>
                <div className="card-actions justify-center mt-10">
                    <button className="btn btn-success absolute inset-x-0 bottom-0 h-16">Add to List</button>
                </div>
            </div>
        </div>
    );
};

export default Card;