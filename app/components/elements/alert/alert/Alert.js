import React from 'react';

export default function ({ children }) {
    return (
        <div className={'flex items-center border-l-8 text-gray-50 rounded-md shadow px-4 py-3 dark:border-yellow-500 dark:bg-yellow-500/25 border-yellow-700 bg-yellow-700/25 text-black dark:text-white text-black'}>
            {children}
        </div>
    );
};
