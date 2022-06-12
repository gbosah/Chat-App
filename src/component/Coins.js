import React from 'react';

function Coins(props) {

    return (
     <div className='w-screen p-2 bg-gray-700 text-white'>
        <div className=' mt-10 space-x-10 grid grid-cols-5 md:grid-cols-5 '>
           <div className='flex px-2'> 
            {props.num} <span className='px-2'> <img src={props.icon} width={20} alt='crypto'/></span> 
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