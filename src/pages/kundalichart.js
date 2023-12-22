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

    const handleZodiacDrop = (boxId, item) => {
        setBoxes((prevBoxes) => ({
            ...prevBoxes,
            [boxId]: [...prevBoxes[boxId], item.name],
        }));
    };


    console.log("boxes", boxes)



    const [, dropBox1] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleZodiacDrop('child_box_1', item),
    });

    const [, dropBox2] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleZodiacDrop('child_box_2', item),
    });


    const [, dropBox3] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleZodiacDrop('child_box_3', item),
    });


    const [, dropBox4] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleZodiacDrop('child_box_4', item),
    });



    const [, dropBox5] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleZodiacDrop('child_box_5', item),
    });


    const [, dropBox6] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleZodiacDrop('child_box_6', item),
    });


    const [, dropBox7] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleZodiacDrop('child_box_7', item),
    });


    const [, dropBox8] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleZodiacDrop('child_box_8', item),
    });


    const [, dropBox9] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleZodiacDrop('child_box_9', item),
    });

   

    const [, dropBox10] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleZodiacDrop('child_box_10', item),
    });


    const [, dropBox11] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleZodiacDrop('child_box_11', item),
    });

    const [, dropBox12] = useDrop({
        accept: 'ZODIAC',
        drop: (item) => handleZodiacDrop('child_box_12', item),
    });

    //----its a number value fdrag and drop out functionality-----


    const handleDrop = (boxId, item) => {
        setBoxes((prevBoxes) => ({
            ...prevBoxes,
            [boxId]: [...prevBoxes[boxId], item.name],
        }));
    };

    const handleNumberDrop = (boxId, item) => {
        // console.log(boxId, item)
        let value = null;
        if(item.hasOwnProperty('value')) {
            setBoxes((prevBoxes) => {
                const updatedBoxes = { ...prevBoxes, [boxId]: [item.value] };
                // console.log("updatedBoxes", updatedBoxes)
                let nextValue = (parseInt(item.value, 10) % 12) + 1;
                for (let i = 0; i <= 12; i++) {
                    // debugger;
                    const nextPosition = (parseInt(boxId.split('_')[2], 10) + i) % 12 + 1;
    
                    const isGrahExist = prevBoxes[`child_box_${nextPosition}`]?.some(id => {
                        if (typeof id === 'string') {
                            return true;
                        }
                        return false;
                    });
    
                    const isNumberExist = prevBoxes[`child_box_${nextPosition}`]?.some(id => {
                        if (typeof id === 'number') {
                            return true;
                        }
                        return false;
                    });
    
                    if ((!isGrahExist && !isNumberExist) || (isGrahExist && !isNumberExist)) {
                        updatedBoxes[`child_box_${nextPosition}`] = [...prevBoxes[`child_box_${nextPosition}`], nextValue];
                    }
    
                    if (isGrahExist && isNumberExist) {
                        const updatedPrev = prevBoxes[`child_box_${nextPosition}`].map((prev, i) => {
                            if (typeof prev === 'number') {
                                prev = nextValue;
                                return prev;
                            }
                            return prev;
                        });
                        updatedBoxes[`child_box_${nextPosition}`] = [...updatedPrev];
                    }
    
                    if (!isGrahExist && isNumberExist) {
                        updatedBoxes[`child_box_${nextPosition}`] = [nextValue];
                    }
                    nextValue = (nextValue % 12) + 1;
                }
                return updatedBoxes;
            });  
        } else;{
            setBoxes((prevBoxes) => ({
                ...prevBoxes,
                [boxId]: [...prevBoxes[boxId], item.name],
            }));
        }

       
    };

    const [, dropChildBox1] = useDrop({
        accept: ['ZODIAC', 'NUMBER'],
        drop: (item) => {
            if (item.type === 'ZODIAC') {
                handleDrop('child_box_1', item);
            } else if (item.type === 'NUMBER') {
                handleNumberDrop('child_box_1', item);
            }
        },
    });

    const [, dropChildBox2] = useDrop({
        accept: ['ZODIAC', 'NUMBER'],
        drop: (item) => {
            if (item.type === 'ZODIAC') {
                handleDrop('child_box_2', item);
            } else if (item.type === 'NUMBER') {
                handleNumberDrop('child_box_2', item);
            }
        },
    });

    const [, dropChildBox3] = useDrop({
        accept: ['ZODIAC', 'NUMBER'],
        drop: (item) => {
            if (item.type === 'ZODIAC') {
                handleDrop('child_box_3', item);
            } else if (item.type === 'NUMBER') {
                handleNumberDrop('child_box_3', item);
            }
        },
    });


    const [, dropChildBox4] = useDrop({
        accept: ['ZODIAC', 'NUMBER'],
        drop: (item) => {
            if (item.type === 'ZODIAC') {
                handleDrop('child_box_4', item);
            } else if (item.type === 'NUMBER') {
                handleNumberDrop('child_box_4', item);
            }
        },
    });

    const [, dropChildBox5] = useDrop({
        accept: ['ZODIAC', 'NUMBER'],
        drop: (item) => {
            if (item.type === 'ZODIAC') {
                handleDrop('child_box_5', item);
            } else if (item.type === 'NUMBER') {
                handleNumberDrop('child_box_5', item);
            }
        },
    });

    const [, dropChildBox6] = useDrop({
        accept: ['ZODIAC', 'NUMBER'],
        drop: (item) => {
            if (item.type === 'ZODIAC') {
                handleDrop('child_box_6', item);
            } else if (item.type === 'NUMBER') {
                handleNumberDrop('child_box_6', item);
            }
        },
    });

    const [, dropChildBox7] = useDrop({
        accept: ['ZODIAC', 'NUMBER'],
            drop: (item) => {
            if (item.type === 'ZODIAC') {
                handleDrop('child_box_7', item);
            } else if (item.type === 'NUMBER') {
                handleNumberDrop('child_box_7', item);
            }
        },
    });
    const [, dropChildBox8] = useDrop({
        accept: ['ZODIAC', 'NUMBER'],
        drop: (item) => {
            if (item.type === 'ZODIAC') {
                handleDrop('child_box_8', item);
            } else if (item.type === 'NUMBER') {
                handleNumberDrop('child_box_8', item);
            }
        },
    });

    
    const [, dropNumberBox9] = useDrop({
            accept: ['ZODIAC', 'NUMBER'],
            drop: (item) => {
              handleNumberDrop('child_box_9', item)
            },
    });

    
    const [, dropNumberBox12] = useDrop({
        accept: 'NUMBER',
        drop: (item) => handleNumberDrop('child_box_12', item),
    });

    const [, dropNumberBox11] = useDrop({
        accept: 'NUMBER',
        drop: (item) => handleNumberDrop('child_box_11', item),
    });

    const [, dropNumberBox10] = useDrop({
        accept: 'NUMBER',
        drop: (item) => handleNumberDrop('child_box_10', item),
    });


  
    // const [,dropNumberBox9 ] = useDrop({
    //     accept: ['ZODIAC', 'NUMBER'],
    //     drop: (item) => {
    //         if (item.type === 'ZODIAC') {
    //             handleDrop('child_box_9', item);
    //         } else if (item.type === 'NUMBER') {
    //             handleNumberDrop('child_box_9', item);
    //         }
    //     },
    // });



    return (
        <>



            {/* it a number value logic and statement ----  */}


            <div className='parent_box'>
                {
                    [dropChildBox1, dropBox1].map(boxRef => (
                        <div className='child_box_1' ref={boxRef}>
                            {boxes.child_box_1.map((item, index) => (
                                <div className='aries' key={index}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))
                }

                {
                    [dropChildBox2, dropBox2].map(boxRef => (
                        <div className='child_box_2' ref={boxRef}>
                            {boxes.child_box_2.map((item, index) => (
                                <div className='aries' key={index}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))
                }



                {
                    [dropChildBox3, dropBox3].map(boxRef => (
                        <div className='child_box_3' ref={boxRef}>
                            {boxes.child_box_3.map((item, index) => (
                                <div className='aries' key={index}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))
                }



                {
                    [dropChildBox4, dropBox4].map(boxRef => (
                        <div className='child_box_4' ref={boxRef}>
                            {boxes.child_box_4.map((item, index) => (
                                <div className='aries' key={index}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))
                }



                {
                    [dropChildBox5, dropBox5].map(boxRef => (
                        <div className='child_box_6' ref={boxRef}>
                            {boxes.child_box_5.map((item, index) => (
                                <div className='aries' key={index}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))
                }

                {
                    [dropChildBox6, dropBox6].map(boxRef => (
                        <div className='child_box_5' ref={boxRef}>
                            {boxes.child_box_6.map((item, index) => (
                                <div className='aries' key={index}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))
                }


                {
                    [dropChildBox7, dropBox7].map(boxRef => (
                        <div className='child_box_7' ref={boxRef}>
                            {boxes.child_box_7.map((item, index) => (
                                <div className='aries' key={index}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))
                }


                {
                    [dropChildBox8, dropBox8].map(boxRef => (
                        <div className='child_box_8' ref={boxRef}>
                            {boxes.child_box_8.map((item, index) => (
                                <div className='aries' key={index}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))
                }

                <div className='rotate-box'>
                    {/* <div className='child_box_12' ref={dropNumberBox12} >
                        {boxes.child_box_12.map((number, index) => (
                            <div className='K' key={index}>
                                {number}

                            </div>
                        ))}
                    </div> */}


                {
                    [dropNumberBox12, dropBox12].map(boxRef => (
                        <div className='child_box_12' ref={boxRef}>
                            {boxes.child_box_12.map((item, index) => (
                                <div className='k' key={index}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))
                }


                
{
                    [dropNumberBox11, dropBox11].map(boxRef => (
                        <div className='child_box_11' ref={boxRef}>
                            {boxes.child_box_11.map((item, index) => (
                                <div className='k' key={index}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))
                }

                    {/* <div className='child_box_11' ref={dropNumberBox11} >
                        {boxes.child_box_11.map((number, index) => (
                            <div className='K' key={index}>
                                {number}

                            </div>
                        ))}
                    </div> */}


                    
                {
                    [dropNumberBox10, dropBox10].map(boxRef => (
                        <div className='child_box_10' ref={boxRef}>
                            {boxes.child_box_10.map((item, index) => (
                                <div className='k' key={index}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))
                }
{/* 
                    <div className='child_box_10' ref={dropNumberBox10} >
                        {boxes.child_box_10.map((number, index) => (
                            <div className='K' key={index}>
                                {number}

                            </div>
                        ))}
                    </div> */}


                    
                    {/* <div className='child_box_9' ref={dropNumberBox9} >
                        {boxes.child_box_9.map((number, index) => (
                            <div className='K' key={index}>
                                {number}

                            </div>
                        ))}
                    </div> */}

                  {
                    [dropBox9,dropNumberBox9].map((ref) => (
                        <div className='child_box_9' ref={ref}>
                            {boxes.child_box_9.map((item, index) => (
                                <div className='k' key={index}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    ))
                }
                
                </div>
            </div>





        </>
    );
}

export default Kundalichart