import React from 'react';

export default function ({ children }) {
    return (
        <div className={'flex items-center border-l-8  rounded-md shadow px-4 py-3 dark:border-green-500 dark:bg-green-500/25 border-green-700 bg-green-700/25 text-black dark:text-white text-black'}>
            {children}
        </div>
    );
};
