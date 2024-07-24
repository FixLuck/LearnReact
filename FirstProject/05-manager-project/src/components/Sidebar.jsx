
import { useState } from 'react';

export default function Sidebar({ handleCreate, list }) {

    return (
        <div className="flex flex-col">
            <h1>YOUR PROJECT</h1>
            <button onClick={handleCreate}>+ Add Project</button>
            {list.map((item, index) => (
                <ul className='mt-8 ms-8' key={index}>
                    <button className='p-4 m-2 bg-teal-100 text-zinc-400'
                        onClick={showForm}
                        
                    >{item.title}</button>
                </ul>
            ))}
        </div>
    );
}