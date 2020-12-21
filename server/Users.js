const users =[];

const addUser = ({id, name, channel}) => {

    name = name.trim().toLowerCase();
    channel = channel.trim().toLowerCase();

    /** not needed for this current project. If it has to be extended as proper chat application with many users shall use this */
    // const existingUser = users.find((user) => user.channel == channel && user.name == name );
    // if(existingUser){
    //     return {error : 'User already exists' }
    // }
    
    const user ={id,name,channel};

    users.push(user);
    return { user };

}

const removeUser = (id) => {
    const index = users.findIndex((user)=> user.id === id);

    if(index !== -1){
        return  users.splice(index,1)[0];
    }

}

const getUser = (id) =>  users.find((user)=> user.id === id);

const getUsersInChannel = (channel) => {
    users.filter(user =>{
        user.channel == channel
    })
}

module.exports = {addUser,removeUser,getUser, getUsersInChannel}