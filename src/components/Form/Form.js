import React, { useState } from 'react';

import Input from '../Input';
import Select from '../Select';

import './Form.sass';

const Form = ( {typesExp, typesProduct, data, setactiveIdProduct, setactiveIdExpense} ) => {

  const [ activeTypeProduct, setActiveProduct ] = useState({name:'Выберите вид товара'});
  const [ activeTypeExpenses, setActiveTypesExpense ] = useState({name:'Выберите тип расхода'});

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const [valueName, valueNumber, changeValueName, changeValueNumber] = data;

  return (
    <form className="form row" onSubmit={handleSubmit}>

      <div className="form-number col-2">
        <Input type="number" placeholder="Введите номер"
          valueInput={valueNumber}
          changeValue={changeValueNumber} />
      </div>

      <div className="form-name col-5">
        <Input placeholder="Введите название" valueInput={valueName} changeValue={changeValueName} />
      </div>

      <div className="form-expensise col-2">
        <Select onClick={(id, idItem) => {
          setActiveProduct(typesProduct[id]);
          setactiveIdProduct(idItem);
        }}
          itemsList={typesProduct} activeItem={activeTypeProduct} />
      </div>

      <div className="form-product col-3">
        <Select
          onClick={(id, idItem) => {
            setActiveTypesExpense(typesExp[id]);
            setactiveIdExpense(idItem);
          }}
          itemsList={typesExp} activeItem={activeTypeExpenses} />
      </div>

    </form>
  );
};

export default Form;