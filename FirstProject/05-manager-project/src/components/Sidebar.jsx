
import { useState } from 'react';

export default function Sidebar({ handleCreate, list }) {

    return (
        <div className="flex flex-col">
            <h1>YOUR PROJECT</h1>
            <button onClick={handleCreate}>+ Add Project</button>
            {list.map((item, index) => (
                <ul key={index}>
                    <button>{item.title}</button>
                </ul>
            ))}
        </div>
    );
}