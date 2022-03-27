'use strict';

const table = document.querySelector('.field > tbody');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
let currentrows = table.children.length;
let currentcolumns = table.children[0].children.length;

addRow.addEventListener('click', e => {
  currentrows++;
  removeRow.disabled = false;

  if (currentrows === 10) {
    e.target.disabled = true;
  }

  table.innerHTML = '';

  table.insertAdjacentHTML(
    'beforeend',
    buildTable(currentrows, currentcolumns),
  );
});

removeRow.addEventListener('click', e => {
  currentrows--;
  addRow.disabled = false;

  if (currentrows === 2) {
    e.target.disabled = true;
  }

  table.innerHTML = '';

  table.insertAdjacentHTML(
    'beforeend',
    buildTable(currentrows, currentcolumns),
  );
});

addColumn.addEventListener('click', e => {
  currentcolumns++;
  removeColumn.disabled = false;

  if (currentcolumns === 10) {
    e.target.disabled = true;
  }

  table.innerHTML = '';

  table.insertAdjacentHTML(
    'beforeend',
    buildTable(currentrows, currentcolumns),
  );
});

removeColumn.addEventListener('click', e => {
  currentcolumns--;
  addColumn.disabled = false;

  if (currentcolumns === 2) {
    e.target.disabled = true;
  }

  table.innerHTML = '';

  table.insertAdjacentHTML(
    'beforeend',
    buildTable(currentrows, currentcolumns),
  );
});

function buildTable(rows, columns) {
  let innerHtml = '';

  for (let i = 0; i < rows; i++) {
    innerHtml += '<tr>';

    for (let j = 0; j < columns; j++) {
      innerHtml += '<td></td>';
    }

    innerHtml += '</tr>';
  }

  return innerHtml;
}
