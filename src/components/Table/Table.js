import React, { useEffect, useState } from 'react';

import ApiExpenses from '../../service/apiResource';
import Form from '../Form';
import TableHeader from '../TableHeader';
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


  const expListItem = expensesList.map(item => {
    let typeProduct = typesProduct.find(element => element.id === item.kind);

    let typeExp = typesExp.find(element => element.id === item.type);
    return (
      <div className="expenses row" key={item.id}>
        <div className="col-2 expenses-item text-center">
          {item.number}
        </div>
        <div className="col-5 expenses-item ">
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

  return (
    <div className="table">
      <Form
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


// export default class App extends Component {

//   maxId = 100;
//   state = {
//     todoData: [
//       this.createTodoItem('Drink Coffee'),
//       this.createTodoItem('Make Awesome App'),
//       this.createTodoItem('Have a lunch')
//     ],
//     term: '',
//     filter: 'all'
//   };

//   createTodoItem(label) {
//     return {
//       label,
//       done: false,
//       important: false,
//       id: this.maxId++
//     }
//   }

//   deleteItem = (id) => {

//     this.setState(({ todoData }) => {

//       const idx = todoData.findIndex((el) => el.id === id);
//       const newArray = [
//             ...todoData.slice(0, idx),
//             ...todoData.slice(idx + 1)
//       ];

//       return {
//         todoData: newArray
//       };
//     });
//   };

//   addItem = (text) => {
//     const newItem = this.createTodoItem(text);

//     this.setState(({ todoData }) => {
//       const newArray = [
//         ...todoData,
//         newItem
//       ];

//       return {
//         todoData: newArray
//       }
//     });
//   };


//   search(items, term) {
//     if (term.length === 0) {
//       return items;
//     };

//     return items.filter((item) => {
//       return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
//     })
//   }

//   onSearchChange = (term) => {
//     this.setState({ term });
//   };

//   filter(items, filter) {
//     switch(filter) {
//       case 'all':
//         return items;
//       case 'active':
//         return items.filter((item) => !item.done);
//       case 'done':
//         return items.filter((item) => item.done);
//       default:
//         return items;
//     }
//   };

//   onFilterChange = (filter) => {
//     this.setState({ filter });
//   };

//   render() {
//     const { todoData, term, filter } = this.state;
//     const visibleItems = this.filter(this.search(todoData, term), filter);
//     const doneCount = todoData.filter((el) => el.done).length;
//     const todoCount = todoData.length - doneCount;

//     return (
//       <div className="todo-app">
//         <AppHeader toDo={todoCount} done={doneCount} />
//         <div className="top-panel d-flex">
//           <SearchPanel
//           onSearchChange={this.onSearchChange} />
//           <ItemStatusFilter
//           filter={filter}
//           onFilterChange={this.onFilterChange} />
//         </div>
//         <TodoList
//           todos={visibleItems}
//           onDeleted={ this.deleteItem }
//           onToggleImportant={ this.onToggleImportant}
//           onToggleDone={ this.onToggleDone } />
//         <ItemAddForm onItemAdded={ this.addItem } />
//       </div>
//     );
//   }

// };