'use strict';

const get = (ell) => document.querySelector(ell);
const table = get('.field');
const rows = table.rows;
const buttonAction = {
  append_row: () => table.append(rows[0].cloneNode(true)),
  remove_row: () => table.deleteRow(1),
  append_column: () => [...rows].map(i => i.insertCell()),
  remove_column: () => [...rows].map(i => i.deleteCell(1)),
};

document.addEventListener('click', (e) => {
  const action = e.target.className.split(' ')[0].split('-').join('_');
  const perfom = (key) => !action || buttonAction[key]();

  perfom(action);
  get('.append-row').disabled = rows.length >= 10;
  get('.remove-row').disabled = rows.length <= 2;
  get('.append-column').disabled = rows[0].children.length >= 10;
  get('.remove-column').disabled = rows[0].children.length <= 2;
});
