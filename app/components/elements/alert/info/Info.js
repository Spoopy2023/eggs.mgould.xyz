import React from 'react';

export default function ({ children }) {
    return (
        <div className={'flex items-center border-l-8 text-gray-50 rounded-md shadow px-4 py-3 dark:border-blue-500 dark:bg-blue-500/25 border-blue-700 bg-green-blue/25 text-black dark:text-white text-black'}>
            {children}
        </div>
    );
};
