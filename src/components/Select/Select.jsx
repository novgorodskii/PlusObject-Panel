import React, { useState } from 'react';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import './Select.sass';

const Select = ({ activeItem, itemsList, onClick, iconLeft = false }) => {

  const [ show, toggleShow ] = useState(false);

  return (
    <div className="select">
      <div className="select-active shadow-box"
        onClick={() => toggleShow(!show)}>
        <div className="select-active-item">
          { iconLeft ? <div style={{marginRight: "6px"}}><QueryBuilderIcon fontSize="small" /></div> : null }
          { activeItem.name }
        </div>
        <ArrowDropDownIcon/>
      </div>

      {
        show ?
        <div className="select-list shadow-box">
          { itemsList.map(item => <div onClick={() => {
            onClick(item.id);
            toggleShow(!show);
          }} key={ item.id }>{ item.name }</div>) }
        </div> : null
      }
    </div>
  );
};

export default Select;