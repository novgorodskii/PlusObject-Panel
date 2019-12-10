import React from 'react';

import './TableHeader.sass';

const TableHeader = () => {
  return (
    <div className="name-titles row">
      <div className="col-2 title text-center">
        #
      </div>
      <div className="col-5 title">
        Наименование
      </div>
      <div className="col-2 title">
        Вид товаров
      </div>
      <div className="col-2 title">
        Тип расходов
      </div>
    </div>
  );
};

export default TableHeader;