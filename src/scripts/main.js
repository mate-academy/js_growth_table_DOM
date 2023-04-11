'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRow.onclick = () => {
  const table = document.querySelector('table tbody');

  const template = document.querySelector('table tr');

  const tdCount = template.children.length;

  const tr = document.createElement('tr');

  for (let i = 0; i < tdCount; i++) {
    tr.innerHTML += '<td></td>';
  }

  table.insertAdjacentElement('afterbegin', tr);

  const trCount = document.querySelectorAll('table tr').length;

  if (trCount < 10) {
    removeRow.disabled = false;
  }

  if (trCount === 10) {
    addRow.disabled = true;
  }
};

addColumn.onclick = () => {
  const trArr = document.querySelectorAll('table tr');

  trArr.forEach((tr) => {
    const td = document.createElement('td');

    tr.insertAdjacentElement('beforeend', td);
  });

  const countTd = document.querySelectorAll('table tr:first-child td').length;

  if (countTd < 10) {
    removeColumn.disabled = false;
  }

  if (countTd === 10) {
    addColumn.disabled = true;
  }
};

removeColumn.onclick = () => {

  const column = document.querySelectorAll('table tr td:last-child');

  column.forEach((td) => td.remove());

  const row = document.querySelectorAll('table tr:first-child td').length;

  if (row > 2) {
    addColumn.disabled = false;
  }

  if (row === 2) {
    removeColumn.disabled = true;
  }
};

removeRow.onclick = () => {
  document.querySelector('table tr:last-child').remove();

  const row = document.querySelectorAll('table tr').length;

  if (row > 2) {
    addRow.disabled = false;
  }

  if (row === 2) {
    removeRow.disabled = true;
  }
};
