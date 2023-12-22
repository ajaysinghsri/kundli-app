import React from "react";
import { useDrag } from 'react-dnd';


const Number = ({ value }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'NUMBER',
        item: { value },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    return (
        <>
            <li
                className={`mt-2 btn btn-success`}
                ref={drag}
                style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}
            >
                {value}
            </li>
        </>
    )
}

export default Number