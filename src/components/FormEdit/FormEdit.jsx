import React, { useState } from 'react';

import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import ApiExpenses from '../../service/apiResource';

import './FormEdit.sass';

const FormEdit = ({typesProduct, typesExp, close, newAddList, item}) => {

  const {id} = item;
  const arrIddProduct = typesProduct.filter(e => e.id === item.kind);
  const arrIddExp = typesExp.filter(e => e.id === item.type);
  const defaultTypeProduct = arrIddProduct[0] ? arrIddProduct[0] : {name:'Выберите вид товара'};
  const defaultTypeExpenses = arrIddExp[0] ? arrIddExp[0] : {name:'Выберите тип расхода'};

  const [ nameValue, setName ] = useState(item.value);
  const [ numberValue, setNumber] = useState(item.number);
  const [ idTypeProd, setProd ] = useState(item.kind);
  const [ idTypeExp, setExp ] = useState(item.type);
  const [ activeTypeProduct, setActiveProduct ] = useState(defaultTypeProduct);
  const [ activeTypeExpenses, setActiveTypesExpense ] = useState(defaultTypeExpenses);

  const handleSubmit = e => e.preventDefault();
  const handleName = (value) => setName(value);
  const handleNumber = (value) => setNumber(value);

  const editItem = () => {
    const api = new ApiExpenses();
    api.editExpenses( numberValue , nameValue, idTypeProd, idTypeExp, [id] )
      .then(res => newAddList(res))
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit} className="form form-add shadow-box">
        <h2>Измение параметров расхода</h2>
        <div className="row align-content-center">

          <div className="col-2">
            <Input type="number"
              defaultValue={item.number}
              value={numberValue}
              placeholder={"Введите номер расхода"}
              changeValue={handleNumber} />
          </div>

          <div className="col-2">
            <Input
              defaultValue={item.title}
              value={nameValue}
              placeholder={"Введите название"}
              changeValue={handleName} />
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
            <Button mode="small" text="Изменить" onClick={() => {editItem();close()}}/>
          </div>
        </div>
      </form>
    </React.Fragment>
  )
};

export default FormEdit;