import React, { useState } from 'react';

import ApiExpenses from '../../service/apiResource';
import Input from '../Input';
import Select from '../Select';

import './Form.sass';

const Form = () => {

  const [ types, setTypes ] = useState([]);
  const [ activeType, setActiveTypes ] = useState('Выберите тип');

  const api = new ApiExpenses();

  api.getTypesExpenses()
    .then(data => setTypes(data));

  return (
    <form className="form">
      <div className="form-number">
        <Input placeholder="Введите номер" />
      </div>

      <div className="form-name">
        <Input placeholder="Введите название" />
      </div>

      <div className="form-select-type">
        <Select onClick={(id) => setActiveTypes(types[id])} itemsList={types} activeItem={activeType} />
      </div>
    </form>
  );
};

export default Form;