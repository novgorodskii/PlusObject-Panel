export default class ApiExpenses {

  async getResourse(url) {
    const _apiBase = `http://api.plusobject.com/api/`;

    const res = await fetch(`${_apiBase}${url}`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`)
    }
    return await res.json();
  };

  getTypesExpenses = () => {
    return this.getResourse('expenses/types')
  };
};

const api = new ApiExpenses();
api.getTypesExpenses().then(data => console.log(data));