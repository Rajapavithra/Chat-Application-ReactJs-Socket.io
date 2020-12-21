import react from 'react';
import BoatInTheEar from '../../Assets/images/BoatInTheEar.jpeg';
import BoatAriDopes from '../../Assets/images/BoatAriDopes.jpeg';
import userImageA from  '../../Assets/images/userA.png';
import userImageB from '../../Assets/images/userB.png';
import send from '../../Assets/images/send.png';

import  './Avatar.css';

const Avatar = (props)=>{
    let {name,className,isCurrentUser,onClick} = props;
    let avatarList={
          'BoatInTheEar':BoatInTheEar,
          'BoatAriDopes' : BoatAriDopes,
          'userA' : userImageA,
          'userB' : userImageB,
          'send' : send
      }
      let avatarName = name.charAt(0);
    return(
        avatarList[name] ? (
            <img src={avatarList[name]} onClick={onClick} className={className}/>
        ):
        <div onClick={onClick} className={isCurrentUser? 'avatarName leftAvatar' : 'avatarName rightAvatar'  }> {avatarName}</div>
    )
}

export default Avatar;