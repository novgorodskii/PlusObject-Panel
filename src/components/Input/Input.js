import React, {useState} from 'react';

import RoomIcon from '@material-ui/icons/Room';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './Input.sass';

const Input = ({placeholder, type}) => {

  const [value, setValue] = useState('');

  const propsSwith = () => {
    switch (type) {
      case "password":
        return <div className="input input-icon-password" >
        <div className="iconInputPassword"  style={value !== '' ? {color: "#3F3356"} : { color: "#D0C9D6"}}>
          <VisibilityIcon fontSize="small"/>
        </div>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setValue(e.target.value)}/>
      </div>

      case "icon":
        return <div className="input input-icon" >
          <div
            onChange={(e) => setValue(e.target.value)}
            className="iconInput" style={value !== '' ? {color: "#3F3356"} : { color: "#D0C9D6"}}>
              <RoomIcon fontSize="small" />
            </div>
          <input
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            type="text"></input>
        </div>

      default:
      return <div className="input" ><input placeholder={placeholder} type="text" /></div>;
    }
  };
  return (
    <React.Fragment>
      {propsSwith()}
    </React.Fragment>
  );
};

export default Input;