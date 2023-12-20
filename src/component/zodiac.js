import React from 'react';
import { useDrag } from 'react-dnd';

const Zodiac = ({ name }) => {

  const [{ isDragging }, drag] = useDrag({
    type: 'ZODIAC',
    item: { name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <>

      <li className='btn btn-warning p-2 mt-2'
        ref={drag}
        style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}
      >
        {name}
      </li>
    </>

  )
}

export default Zodiac;