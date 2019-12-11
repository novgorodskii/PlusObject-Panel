import React, { useState } from 'react';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import ApiExpenses from '../../service/apiResource';

import './FormAdd.sass';

const FormAdd = ({typesProduct, typesExp, close, newAddList}) => {

  const [ nameValue, setName ] = useState('');
  const [ numberValue, setNumber] = useState('');
  const [ idTypeProd, setProd ] = useState('');
  const [ idTypeExp, setExp ] = useState('');
  const [ activeTypeProduct, setActiveProduct ] = useState({name:'Выберите вид товара'});
  const [ activeTypeExpenses, setActiveTypesExpense ] = useState({name:'Выберите тип расхода'});

  const handleSubmit = e => e.preventDefault();
  const handleName = (value) => setName(value);
  const handleNumber = (value) => setNumber(value);

  const addItem = () => {
    const api = new ApiExpenses();
    api.addExpenses(numberValue, nameValue, idTypeProd, idTypeExp)
      .then(res => newAddList(res))
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="form form-add shadow-box">
        <h2>Добавить новый расход в список расходов.</h2>
        <div className="row align-content-center">

          <div className="col-2">
            <Input type="number" value={numberValue} placeholder={"Введите номер расхода"} changeValue={handleNumber} />
          </div>

          <div className="col-2">
            <Input value={nameValue} placeholder={"Введите название"} changeValue={handleName} />
          </div>

          <div className="col-3">
            <Select
              itemsList={typesProduct} activeItem={activeTypeProduct}
              onClick={(id, idItem) => {
                setActiveProduct(typesProduct[id]);
                setProd(idItem);
              }} />
          </div>

          <div className="col-3">
            <Select
              itemsList={typesExp} activeItem={activeTypeExpenses}
              onClick={(id, idItem) => {
                setActiveTypesExpense(typesExp[id]);
                setExp(idItem);
              }} />
          </div>
          <div className="col-2">
            <Button mode="small" text="Добавить" onClick={() => {addItem();close()}}/>
          </div>
        </div>
      </form>
    </React.Fragment>
  )
};
export default FormAdd;