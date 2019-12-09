import React from 'react';

import Input from '../Input';
import Select from '../Select';

import './Form.sass';

const Form = () => {
  return (
    <form className="form">
      <div className="form-number">
        <Input placeholder="Введите номер" />
      </div>

      <div className="form-name">
        <Input placeholder="Введите название" />
      </div>

      <div className="form-select-type">
        {/* <Select /> */}
      </div>
    </form>
  );
};

export default Form;