import React from 'react';

function Coins(props) {

    return (
        <div className='relative p-2 text-justify w-screen bg-slate-400'>
             <div className='flex flex-row justify-around mt-10 space-x-10'>
           <div className='flex'> {props.num} <img src={props.icon} width={24} className='mx-2'/> 
            {props.name} <span className='text-gray-400 mx-1'>{props.symbol}</span>
            </div>
           <div>{props.price}</div>
           <div>{props.hourChange}%</div>
           <div>{props.marketCap}</div>
           <div>{props.availableSupply}</div>  
        </div>
        </div>
    );
}

export default Coins;