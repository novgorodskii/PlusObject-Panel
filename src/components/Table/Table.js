import React, { useEffect, useState } from 'react';

import ApiExpenses from '../../service/apiResource';
import Form from '../Form';
import TableHeader from '../TableHeader';
import ModalWindow from '../ModalWindow';
import FormAdd from '../FormAdd';
import FormEdit from '../FormEdit';


import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './Table.sass';

const Table = () => {

  const [ expensesList, setExp ] = useState([]);

  const [ typesProduct, setTypesProduct ] = useState([]);
  const [ typesExp, setTypeExp ] = useState([]);
  const [ valueNumber, setNumber ] = useState('');
  const [ valueName, setName ] = useState('');
  const [ activeIdProduct, setactiveIdProduct ] = useState();
  const [ activeIdExp, setactiveIdExp ] = useState();
  const [ activeAdd, setActiveAdd ] = useState(false);
  const [ activeEdit, setActiveEdit ] = useState(false);
  const [ itemEdit, setItemEdit] = useState('');

  useEffect(() => {
    const api = new ApiExpenses();
    api.getExpenses(valueNumber, valueName, activeIdProduct, activeIdExp).then(data => {
      setExp(data);
    });
    api.getTypesProduct().then(data => setTypesProduct([...data, {name:'Не выбрано', id: ''}]));
    api.getTypesExpenses().then(data => setTypeExp([...data, {name:'Не выбрано', id: ''}]));
  }, [valueName, valueNumber, activeIdProduct, activeIdExp]);

  const changeValueNumber = (value) => {
    setNumber(value);
  };

  const changeValueName = (value) => {
    setName(value);
  };

  const deleteItem = (id) => {
    const api = new ApiExpenses();
    api.deleteExpenses(id)
      .then(response => {
        if( response === null) return ;
        return setExp(response);
      });
  };

  const closeAdd = () => setActiveAdd(false);
  const open = () => setActiveAdd(true);

  const closeEdit = () => setActiveEdit(false);
  const openEdit = (item) => {
    setItemEdit(item);
    setActiveEdit(true);
  };

  const expListItem = expensesList.map(item => {
    let typeProduct = typesProduct.find(element => element.id === item.kind);

    let typeExp = typesExp.find(element => element.id === item.type);
    return (
      <div className="expenses row" key={item.id}>
        <div className="col-2 expenses-item text-center">
          {item.number}
        </div>
        <div onClick={() => openEdit(item)} className="col-5 expenses-item ">
          {item.title}
        </div>
        <div className="col-2 expenses-item ">
          {typeProduct ? typeProduct.name : "----"}
        </div>
        <div className="col-2 expenses-item ">
          {typeExp ? typeExp.name : "----"}
        </div>

        <div
          onClick={() => deleteItem(item.id)}
          className="col-1 expenses-item text-center">
          <div className="shadow-box">
            <DeleteForeverIcon />
          </div>
        </div>
      </div>
    );
  });

  const handleIdProduct = (id) => {
    setactiveIdProduct(id);
  };
  const handleIdExp = (id) => {
    setactiveIdExp(id);
  };

  const newAddList = (arr) => setExp(arr);

  return (
    <div className="table">
      <h1>Расходы</h1>

      {activeAdd ?
        <ModalWindow close={closeAdd}>
          <FormAdd
            newAddList={newAddList}
            close={closeAdd}
            typesProduct={typesProduct}
            typesExp={typesExp} />
        </ModalWindow> : null}

      {activeEdit ?
      <ModalWindow close={closeEdit}>
        <FormEdit
          item={itemEdit}
          newAddList={newAddList}
          close={closeEdit}
          typesProduct={typesProduct}
          typesExp={typesExp} />
      </ModalWindow> : null}

      <Form
        open={open}
        setactiveIdProduct={handleIdProduct}
        setactiveIdExpense={handleIdExp}
        typesProduct={typesProduct}
        typesExp={typesExp}
        data={[valueName, valueNumber, changeValueName, changeValueNumber]} />
      <div className="table-content shadow-box">
        <TableHeader />
        {expListItem}
      </div>
    </div>
  );
};

export default Table;
