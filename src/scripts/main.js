'use strict';

const tbody = document.querySelector('tbody');

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

removeColumn.addEventListener('click', () => {
  const row = document.querySelectorAll('tr');

  [...row].map(tr => {
    tr.lastElementChild.remove();

    removeColumn.disabled = (tr.childElementCount === 2);
    addColumn.disabled = (tr.childElementCount === 10);
  });
});

addColumn.addEventListener('click', () => {
  const row = document.querySelectorAll('tr');

  [...row].map(tr => {
    const td = document.createElement('td');

    tr.append(td);

    removeColumn.disabled = (tr.childElementCount === 2);
    addColumn.disabled = (tr.childElementCount === 10);
  });
});

addRow.addEventListener('click', () => {
  const row = document.querySelectorAll('tr');

  tbody.append(row[0].cloneNode(true));

  removeRow.disabled = (tbody.childElementCount === 2);
  addRow.disabled = (tbody.childElementCount === 10);
});

removeRow.addEventListener('click', () => {
  tbody.lastChild.remove();

  removeRow.disabled = (tbody.childElementCount === 2);
  addRow.disabled = (tbody.childElementCount === 10);
});
