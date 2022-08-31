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
    let str = '';
    for (let i = 0; i < count; i++){
      str += '<td></td>'
    }

    return str;
  }

  table.insertAdjacentHTML('beforeend', `
    <tr>${createTd(tr.children.length)}</tr>
  `)
};

function removeRow(e) {
  const removeTr = table.lastElementChild;
  removeTr.remove();
};

function addColumn(e) {
  const tr = table.querySelectorAll('tr');
  [...tr].map(x => {
    const td = document.createElement('td');
    x.append(td)
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
  if (table.querySelectorAll('tr').length === 10) {
    document.querySelector('.append-row').setAttribute('disabled', '');
  }

  if (table.querySelectorAll('tr').length < 10) {
    document.querySelector('.append-row').removeAttribute('disabled');
  }

  if (table.querySelectorAll('tr').length === 2) {
    document.querySelector('.remove-row').setAttribute('disabled', '');
  }

  if (table.querySelectorAll('tr').length > 2) {
    document.querySelector('.remove-row').removeAttribute('disabled');
  }

  if (table.querySelector('tr').children.length === 2) {
    document.querySelector('.remove-column').setAttribute('disabled', '');
  }

  if (table.querySelector('tr').children.length === 10) {
    document.querySelector('.append-column').setAttribute('disabled', '');
  }

  if (table.querySelector('tr').children.length > 2) {
    document.querySelector('.remove-column').removeAttribute('disabled');
  }

  if (table.querySelector('tr').children.length < 10) {
    document.querySelector('.append-column').removeAttribute('disabled');
  }

};

buttonAppendRow.addEventListener('click', addRow);
buttonRemoveRow.addEventListener('click', removeRow);
buttonAppendColumn.addEventListener('click', addColumn);
buttonRomoveColumn.addEventListener('click', removeColumn);
container.addEventListener('click', attribute);


