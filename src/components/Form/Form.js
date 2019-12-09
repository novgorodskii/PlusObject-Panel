import React, { useState, useEffect } from 'react';

import ApiExpenses from '../../service/apiResource';
import Input from '../Input';
import Select from '../Select';

import './Form.sass';

const Form = () => {

  const [ typesExpenses, setTypesExpenses ] = useState([]);
  const [ activeTypeExpenses, setActiveTypesExpense ] = useState({name:'Выберите тип'});

  const [ typesProduct, setTypesProduct ] = useState([]);
  const [ activeTypeProduct, setActiveProduct ] = useState({name:'Выберите тип'});

  useEffect(() => {
    const api = new ApiExpenses();
    api.getTypesExpenses().then(data => setTypesExpenses(data));
    api.getTypesProduct().then(data => setTypesProduct(data));
  }, []);

  return (
    <form className="form row">
      <div className="form-number col-2">
        <Input placeholder="Введите номер" />
      </div>

      <div className="form-name col-4">
        <Input placeholder="Введите название" />
      </div>

      <div className="form-product col-3">
        <Select
          onClick={(id) => setActiveTypesExpense(typesExpenses[id])}
          itemsList={typesExpenses} activeItem={activeTypeExpenses} />
      </div>

      <div className="form-expensise col-3">
        <Select onClick={(id) => setActiveProduct(typesProduct[id])}
          itemsList={typesProduct} activeItem={activeTypeProduct} />
      </div>
    </form>
  );
};

export default Form;