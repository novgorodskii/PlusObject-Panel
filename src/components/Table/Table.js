import React, { useEffect, useState } from 'react';

import ApiExpenses from '../../service/apiResource';
import Form from '../Form';
import TableHeader from '../TableHeader';

import './Table.sass';

const Table = () => {

  const [ expensesList, setExp ] = useState([]);

  useEffect(() => {
    const api = new ApiExpenses();
    api.getExpenses().then(data => setExp(data));
  }, []);

  const expListItem = expensesList.map(item => {
    return (
      <div className="expenses row" key={item.id}>
        <div className="col-2 expenses-item text-center">
          {item.number}
        </div>
        <div className="col-4 expenses-item ">
          {item.title}
        </div>
        <div className="col-3 expenses-item ">
          Панели
        </div>
        <div className="col-3 expenses-item ">
          Транспортные расходы
        </div>
      </div>
    )
  });

  return (
    <div className="table">
      <Form />
      <div className="table-content shadow-box">
        <TableHeader />
        {expListItem}
      </div>
    </div>
  );
};

export default Table;