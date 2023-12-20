import React ,{useState}from 'react'
import { useDrop } from 'react-dnd';
import "../component/mix.css";

const Kundali = () => {
  const numberOfBoxes = 12;

  const [boxContents, setBoxContents] = useState(Array(numberOfBoxes).fill(null));

  const [{ isOver }, drop] = useDrop({
    accept: 'ZODIAC_SIGN',
    drop: (item) => {
      const { index } = item;
      const newBoxContents = [...boxContents];
      newBoxContents[index] = item.sign;
      setBoxContents(newBoxContents);
    },
    collect: (monitor) => ({
        isOver: monitor.isOver(),
    }),
  });

    return (


<>
<div ref={drop} className={`box_model ${isOver ? 'highlight' : ''}`}>
  {boxContents.map((content, index) => (
    <div key={index + 1} className='nested_box'>
      <div className='number'>{index + 1}</div>
      {content && <div className='content'>{content}</div>}
    </div>
  ))}
  <div className={`diagonal_line ${isOver ? 'highlight' : ''}`}></div>
  <div className='diagonal_line_vertical'></div>
</div>
</>
    );
  };
  
  export default Kundali;
