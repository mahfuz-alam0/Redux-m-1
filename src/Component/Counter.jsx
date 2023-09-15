import React from 'react';

const Counter = ({ id, count, increment, decrement }) => {

    return (
        <div className='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
            <div className='text-2xl font-semibold'>{count}</div>
            <div className='flex space-x-3'>
                <button className='bg-indigo-400 text-white px-3 py-2 rounded shadow'
                    onClick={() => increment(id)}
                >
                    Increament
                </button>
                <button className='bg-red-400 text-white px-3 py-2 rounded shadow'
                    decrement={() => decrement(id)}>
                    Increament
                </button>
            </div>
        </div>
    );
};

export default Counter;