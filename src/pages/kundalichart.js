import React, { useState } from 'react'
import "../component/mix.css";
import { useDrop } from 'react-dnd';

const Kundalichart = () => {
    const [boxes, setBoxes] = useState({
        child_box_1: [],
        child_box_2: [],
        child_box_3: [],
        child_box_4: [],
        child_box_5: [],
        child_box_6: [],
        child_box_7: [],
        child_box_8: [],
        child_box_9: [],
        child_box_10: [],
        child_box_11: [],
        child_box_12: [],
    });


    const handleDrop = (boxId, item) => {
        setBoxes((prevBoxes) => ({
            ...prevBoxes,
            [boxId]: [...prevBoxes[boxId], item.name],
        }));
    };

    const [, dropChildBox1] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleDrop('child_box_1', item),
    });

    const [, dropChildBox2] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleDrop('child_box_2', item),
    });


    const [, dropChildBox3] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleDrop('child_box_3', item),
    });


    const [, dropChildBox4] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleDrop('child_box_4', item),
    });



    const [, dropChildBox5] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleDrop('child_box_5', item),
    });


    const [, dropChildBox6] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleDrop('child_box_6', item),
    });


    const [, dropChildBox7] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleDrop('child_box_7', item),
    });


    const [, dropChildBox8] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleDrop('child_box_8', item),
    });


    const [, dropChildBox9] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleDrop('child_box_9', item),
    });


    const [, dropChildBox10] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleDrop('child_box_10', item),
    });


    const [, dropChildBox11] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleDrop('child_box_11', item),
    });

    const [, dropChildBox12] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleDrop('child_box_12', item),
    });



    return (
        <>
            <div className='parent_box'>
                <div className='child_box_1' ref={dropChildBox1}>
                    {boxes.child_box_1.map((zodiac, index) => (
                        <div className='aries' key={index}>{zodiac}</div>
                    ))}
                </div>
                <div className='child_box_2' ref={dropChildBox2} >
                    {boxes.child_box_2.map((zodiac, index) => (
                        <div className='A' key={index}>{zodiac}</div>
                    ))}
                </div>
                <div className='child_box_3' ref={dropChildBox3}>
                    {boxes.child_box_3.map((zodiac, index) => (
                        <div className='B' key={index}>{zodiac}</div>
                    ))}
                </div>
                <div className='child_box_4' ref={dropChildBox4}>
                    {boxes.child_box_4.map((zodiac, index) => (
                        <div className='C' key={index}>{zodiac}</div>
                    ))}
                </div>
                <div className='child_box_5' ref={dropChildBox5}>
                    {boxes.child_box_5.map((zodiac, index) => (
                        <div className='D' key={index}>{zodiac}</div>
                    ))}
                </div>
                <div className='child_box_6' ref={dropChildBox6}>
                    {boxes.child_box_6.map((zodiac, index) => (
                        <div className='E' key={index}>{zodiac}</div>
                    ))}
                </div>
                <div className='child_box_7' ref={dropChildBox7}>
                    {boxes.child_box_7.map((zodiac, index) => (
                        <div className='F' key={index}>{zodiac}</div>
                    ))}
                </div>
                <div className='child_box_8' ref={dropChildBox8}>
                    {boxes.child_box_8.map((zodiac, index) => (
                        <div className='G' key={index}>{zodiac}</div>
                    ))}
                </div>
                <div className='rotate-box'>
                    <div className='child_box_9' ref={dropChildBox9}>
                        {boxes.child_box_9.map((zodiac, index) => (
                            <div className='H' key={index}>{zodiac}</div>
                        ))}
                    </div>
                    <div className='child_box_10' ref={dropChildBox10}>
                        {boxes.child_box_10.map((zodiac, index) => (
                            <div className='I' key={index}>{zodiac}</div>
                        ))}
                    </div>
                    <div className='child_box_11' ref={dropChildBox11}>
                        {boxes.child_box_11.map((zodiac, index) => (
                            <div className='J' key={index}>{zodiac}</div>
                        ))}
                    </div>
                    <div className='child_box_12' ref={dropChildBox12}>
                        {boxes.child_box_12.map((zodiac, index) => (
                            <div className='K' key={index}>{zodiac}</div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Kundalichart;