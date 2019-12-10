import React, { useState } from 'react';

import Input from '../Input';
import Select from '../Select';

import './Form.sass';

const Form = ({sortNumber, typesExp, typesProduct, data}) => {

  const [ activeTypeExpenses, setActiveTypesExpense ] = useState({name:'Выберите тип'});

  const [ activeTypeProduct, setActiveProduct ] = useState({name:'Выберите тип'});

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

      <div className="form-name col-4">
        <Input placeholder="Введите название" valueInput={valueName} changeValue={changeValueName} />
      </div>

      <div className="form-product col-3">
        <Select
          onClick={(id) => setActiveTypesExpense(typesExp[id])}
          itemsList={typesExp} activeItem={activeTypeExpenses} />
      </div>

      <div className="form-expensise col-3">
        <Select onClick={(id) => setActiveProduct(typesProduct[id])}
          itemsList={typesProduct} activeItem={activeTypeProduct} />
      </div>
    </form>
  );
};

export default Form;