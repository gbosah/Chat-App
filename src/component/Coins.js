import React from 'react';

function Coins(props) {

    return (
        <div className='relative p-2 text-justify bg-slate-400 md:w-screen sm:w-screen'>
             <div className='flex flex-row justify-around mt-10 space-x-10 md:justify-around sm:justify-between'>
           <div className='flex md:z-10 lg:z-0 sm:z-10'> {props.num} <img src={props.icon} width={24} alt='crypto' className='mx-2'/> 
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