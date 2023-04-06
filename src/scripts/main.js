'use strict';

const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

addRow.onclick = () => {
  const table = document.querySelector('table tbody');

  const trCount = document.querySelectorAll('table tr').length;

  if (trCount < 10) {
    const template = document.querySelector('table tr');

    const tdCount = template.children.length;

    const tr = document.createElement('tr');

    for (let i = 0; i < tdCount; i++) {
      tr.innerHTML += '<td></td>';
    }

    table.insertAdjacentElement('afterbegin', tr);
  }
};

addColumn.onclick = () => {
  const trArr = document.querySelectorAll('table tr');

  const countTd = document.querySelectorAll('table tr:first-child td').length;

  if (countTd < 10) {
    trArr.forEach((tr) => {
      const td = document.createElement('td');

      tr.insertAdjacentElement('beforeend', td);
    });
  }
};

removeColumn.onclick = () => {
  const row = document.querySelectorAll('table tr:first-child td').length;

  if (row > 2) {
    const column = document.querySelectorAll('table tr td:last-child');

    column.forEach((td) => td.remove());
  }
};

removeRow.onclick = () => {
  const row = document.querySelectorAll('table tr').length;

  if (row > 2) {
    document.querySelector('table tr:last-child').remove();
  }

};
