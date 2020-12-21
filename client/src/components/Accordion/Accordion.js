import React from 'react';
import Tick from '../Tick/Tick';
import './Accordion.css';


const Accordion = (props) =>{
    let {id,onClick,title,children,isValid} = props
    return (
        <div className='accParentContainer'>   
            <button className='accButton black bold' id={id} onClick={onClick}>
                 {title}
                {isValid && (
                    <Tick />
                )}
            </button>
            {props.isActive && (
                <div className='accChildContainer'>
                    {children}
                </div>
            )}
        </div>
    )
}

export default Accordion;

