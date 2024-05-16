import React from 'react';

const Class = ({ height }) => {
    return (
        <div className="bg-red-900 border-solid border-2" style={{ height }}>
            <div className="text-sm flex">
                <p className="pl-2">⏰: 8:00 - 9:30</p>
                <p className="pl-12">🏫: 2065</p>
            </div>
            <h1 className="text-xl pl-2 pt-2 pb-2 font-bold">Utvikling</h1>
            <p className="pl-2 text-sm">🧑‍🏫: Jon</p>
        </div>
    );
};

export default Class;

