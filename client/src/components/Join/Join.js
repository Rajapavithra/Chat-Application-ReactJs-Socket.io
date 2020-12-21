import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Join.css';

const Join = ()=>{

    const [name,setName] = useState('');
    const [channel,setChannel] = useState(''); 
    
    return (
        <div className='authOuterContainer'>
           
            <div className='authinnerContainer'>

                <h1 className='heading'>
                    Join 
                </h1>
                <div className='field'><input class='authInput' placeholder="UserName" type="text" onChange={(event)=> setName(event.target.value)} /></div>
                <div className='field'><input class='authInput' placeholder="Channel" type="text" onChange={(event)=> setChannel(event.target.value)} /></div>
                <Link  to={{pathname:'/Cart',state:{agent:{name,channel}}}}>
                <button className='button' type='submit'>Join</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;