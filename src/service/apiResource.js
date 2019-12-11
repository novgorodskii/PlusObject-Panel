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

  async getResourseAdd(url,data) {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data),
    });
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`)
    }
    return await res.json();
  };

  async getResourseEdit(url, data) {
    const res = await fetch(`${this._apiBase}${url}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, cors, *same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrer: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data),
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

  addExpenses = (number, title, kind, type) => {
    return this.getResourseAdd(`expenses`, {number, title, kind, type})
  };

  editExpenses = (number, title, kind, type, id) => {
    return this.getResourseEdit(`expenses/${id}`, {number, title, kind, type})
  };
};

// const api = new ApiExpenses;

// api.deleteExpenses(66);