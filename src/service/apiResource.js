export default class ApiExpenses {
  _apiBase = `http://api.plusobject.com/api/`;
  async getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`)
    }
    return await res.json();
  };

  async getResourseDelete(url) {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'DELETE',
      headers: {'content-type': 'application/json'},
    });
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`)
    }
    return await res.json();
  };

  getTypesExpenses = () => {
    return this.getResourse('expenses/types')
  };
  getTypesProduct = () => {
    return this.getResourse('product/types')
  };
  getExpenses = (number = '', title = '', kind = '', type = '') => {
    return this
      .getResourse(`expenses/?ExpensesSearch[number]=${number}&ExpensesSearch[title]=${title}&ExpensesSearch[kind]=${kind}&ExpensesSearch[type]=${type}`);
  };


  deleteExpenses = (id) => {
    return this.getResourseDelete(`expenses/${id}`)
  };
};

// const api = new ApiExpenses;

// api.deleteExpenses(66);