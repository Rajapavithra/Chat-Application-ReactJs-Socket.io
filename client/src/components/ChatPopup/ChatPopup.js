import React from 'react';
import Avatar from '../Avatar/Avatar'
import SubmitButton from '../SubmitButton/SubmitButton';
import chatIcon from '../../Assets/images/chat3.webp';
import io from 'socket.io-client';


import './ChatPopup.css';

let socket;
const ENDPOINT = 'http://localhost:5000/';
export default class  ChatPopup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isMaximized:false,
            messages:[]
        }
        this.userMsg = React.createRef();

        this.toggleChatWindow = this.toggleChatWindow.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.messageListener = this.messageListener.bind(this);
    }
    componentDidMount(){
        socket = io(ENDPOINT);
        socket.on('message',this.messageListener);
    }
    componentDidUpdate(prevProps){
        let { agent } = this.props;
        let {name, channel} = agent;
        if(prevProps.agent != agent){
            socket = io(ENDPOINT);
            socket.emit('join', { name, channel }, (error) => {
                if(error) {
                  alert(error);
                }
              });
              socket.on('message',this.messageListener); 
        }
    }
    componentWillUnmount(){
        socket.emit('disconnect',()=>{
            console.log(">>disconnected")
        })
        socket.off();
    }
    messageListener(msg){
            let {messages} = this.state;
            messages.push(msg);
            this.setState({messages})
    }
    sendMessage(msg){
        let message =  this.userMsg.current.value || msg;
        if(message){
            socket.emit('sendMessage',message,()=>{
                this.userMsg.current.value = ''
            })
        }
    }
    toggleChatWindow(){
        let {isMaximized} = this.state;
        this.setState({isMaximized:!isMaximized})
    }
   render(){
       let {isMaximized,messages} = this.state;
       let {agent} = this.props;
    return(
    isMaximized ? ( 
       <div className='ChatPopup'>
            <div className='chatHeader'>
                 <span className='channelName'>{agent.channel}</span>
                 <div className ='headerOptions'>
                     <span className='rghtPad20' onClick={this.toggleChatWindow}>__</span>
                 </div>
            </div>
            <div className='chatContainer'>
                       
                             {messages.map((msg)=>{
                    
                                 let isCurrentUser = agent.name.trim().toLowerCase() == msg.user;
                                 return(
                                    <div className='chatMessage'>
                                    <Avatar name={msg.user} isCurrentUser={isCurrentUser} className={isCurrentUser? 'chatAvatar' : 'chatAvatar' }/>
                                    <div className={isCurrentUser?'leftMsg msgContent' : 'msgContent rightMsg'}>{msg.text}</div>
                                   
                                    </div>
                                   
                                 )
                             })
                            }
            
                </div>
            <div className='chatBottomContainer'>
                         <input ref={this.userMsg} className='msgInput' type="text" />
                         <Avatar name='send' onClick={this.sendMessage} className='sendIcon'/>             
                      
            </div>
        </div>       
       ) :(<img src={chatIcon} className='chatIcon' onClick={this.toggleChatWindow} />
       )
)}
}

