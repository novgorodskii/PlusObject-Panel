import React, {useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import './MultiSelect.sass';

const MultiSelect = ({ itemsList, addTag, activeItems, deleteTag}) => {
  const [ show, toggleShow ] = useState(false);

  const [ selectList, updateList ] = useState(itemsList);

  const deleteFromList = (id) => {
    const arr = selectList.filter(item => id !== item.id);
    updateList(arr);
  };

  const addList = (item) => {
    const newArr = [...selectList, item];
    updateList(newArr);
  };

  return (
    <div className="select">
      <div className="select-active shadow-box"  onClick={() => {
          if( activeItems.length ===  0) toggleShow(!show);
        }}>
        <div className="select-active-item">
          { activeItems.length > 0 ? activeItems.map(item => {
            return (
              <span className="select-teg">
                <span onClick={() => toggleShow(!show)}>{item.name}</span>
                <div onClick={() => {
                  deleteTag(item.id);
                  addList(item);
                }}>
                  <CloseIcon fontSize="small" />
                </div>
              </span>
            )
          }) : <span>Selecet</span>}
        </div>
      </div>

      {
        show && selectList.length > 0 ?
        <div className="select-list shadow-box">
          { selectList.map(item => <div
          onClick={() => {
            deleteFromList(item.id);
            addTag(item.id);
          }} key={ item.id }>{ item.name }</div>) }
        </div> : null
      }
    </div>
  );
};

export default MultiSelect;