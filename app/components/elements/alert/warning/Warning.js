
import React from 'react';

export default function ({ children }) {
    return (
        <div className={'flex items-center border-l-8 text-gray-50 rounded-md shadow px-4 py-3 dark:border-red-500 dark:bg-red-500/25 border-red-700 bg-red-700/25 text-black dark:text-white text-black'}>
            {children}
        </div>
    );
};
