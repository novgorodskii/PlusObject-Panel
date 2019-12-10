import React, { useEffect, useState } from 'react';

import ApiExpenses from '../../service/apiResource';
import Form from '../Form';
import TableHeader from '../TableHeader';

import './Table.sass';

const Table = () => {

  const [ expensesList, setExp ] = useState([]);
  const [ typesProduct, setTypeProduct ] = useState([]);
  const [ typesExp, setTypeExp ] = useState([]);


  useEffect(() => {
    const api = new ApiExpenses();
    api.getExpenses().then(data => setExp(data));
    api.getTypesProduct().then(data => setTypeProduct(data));
    api.getTypesExpenses().then(data => setTypeExp(data));
  }, []);

  const sortNumber = (number) => {
    const arr = expensesList.filter(item => Number(String(item.id)[0]) === Number(number));
    if( expensesList.length !== 0) setExp(arr);
  };

  const expListItem = expensesList.map(item => {
    let typeProduct = typesProduct.find(element => element.id === item.kind);
    let typeExp = typesProduct.find(element => element.id === item.type);

    console.log(typeProduct);
    return (
      <div className="expenses row" key={item.id}>
        <div className="col-2 expenses-item text-center">
          {item.number}
        </div>
        <div className="col-4 expenses-item ">
          {item.title}
        </div>
        <div className="col-3 expenses-item ">
          {typeProduct ? typeProduct.name : "----"}
        </div>
        <div className="col-3 expenses-item ">
          {typeExp ? typeExp.name : "----"}
        </div>
      </div>
    )
  });

  return (
    <div className="table">
      <Form sortNumber={sortNumber} typesProduct={typesProduct} typesExp={typesExp} />
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

//   toggleProperty(arr, id, propName) {
//     const idx = arr.findIndex((el) => el.id === id);
//     const oldItem = arr[idx];
//     const newItem = { ...oldItem,
//        [ propName ]: !oldItem[propName] };

//     return [
//       ...arr.slice(0, idx),
//       newItem,
//       ...arr.slice(idx + 1)
//     ];
//   };

//   onToggleDone = (id) => {
//     this.setState(({ todoData }) => {
//       return {
//         todoData: this.toggleProperty(todoData, id, 'done')
//       };
//     });
//   };

//   onToggleImportant = (id) => {
//     this.setState(({ todoData }) => {
//       return {
//         todoData: this.toggleProperty(todoData, id, 'important')
//       };
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