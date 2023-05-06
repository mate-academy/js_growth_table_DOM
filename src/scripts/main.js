'use strict';

const buttonAppendRow = document.querySelector('.append-row');
const buttonRemoveRow = document.querySelector('.remove-row');
const buttonAppendColumn = document.querySelector('.append-column');
const buttonRomoveColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');
const container = document.querySelector('.container');

function addRow(e) {
  const tr = table.querySelector('tr');

  const createTd = (count) => {
    let cells = '';

    for (let i = 0; i < count; i++) {
      cells += '<td></td>';
    }

    return cells;
  };

  table.insertAdjacentHTML('beforeend', `
    <tr>${createTd(tr.children.length)}</tr>
  `);
};

function removeRow(e) {
  const removeTr = table.lastElementChild;

  removeTr.remove();
};

function addColumn(e) {
  const tr = table.querySelectorAll('tr');

  [...tr].map(x => {
    const td = document.createElement('td');

    x.append(td);

    return x;
  });
};

function removeColumn(e) {
  const tr = table.querySelectorAll('tr');

  [...tr].map(x => {
    const td = x.lastElementChild;

    td.remove();
  });
};

function attribute(e) {
  const rows = table.querySelectorAll('tr');
  const collumns = table.querySelector('tr').children;
  const appendRowButton = document.querySelector('.append-row');
  const removeRowButton = document.querySelector('.remove-row');
  const removeColButton = document.querySelector('.remove-column');
  const appendColButton = document.querySelector('.append-column');
  const maxLength = 10;
  const minLength = 2;

  if (rows.length === maxLength) {
    appendRowButton.setAttribute('disabled', '');
  }

  if (rows.length < maxLength) {
    appendRowButton.removeAttribute('disabled');
  }

  if (rows.length === minLength) {
    removeRowButton.setAttribute('disabled', '');
  }

  if (rows.length > minLength) {
    removeRowButton.removeAttribute('disabled');
  }

  if (collumns.length === minLength) {
    removeColButton.setAttribute('disabled', '');
  }

  if (collumns.length === maxLength) {
    appendColButton.setAttribute('disabled', '');
  }

  if (collumns.length > minLength) {
    removeColButton.removeAttribute('disabled');
  }

  if (collumns.length < maxLength) {
    appendColButton.removeAttribute('disabled');
  }
};

buttonAppendRow.addEventListener('click', addRow);
buttonRemoveRow.addEventListener('click', removeRow);
buttonAppendColumn.addEventListener('click', addColumn);
buttonRomoveColumn.addEventListener('click', removeColumn);
container.addEventListener('click', attribute);
