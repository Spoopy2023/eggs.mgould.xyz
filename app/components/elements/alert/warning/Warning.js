
import React from 'react';

export default ({ children }) => {
    return (
        <div className={'flex items-center border-l-8 text-gray-50 rounded-md shadow px-4 py-3 border-red-500 bg-red-500/25 text-black dark:text-white'}>
            {children}
        </div>
    );
};
