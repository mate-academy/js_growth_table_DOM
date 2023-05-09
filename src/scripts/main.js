'use strict';

const table = document.querySelector('.field');
const tBody = table.tBodies[0];

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const tableRows = table.rows;

let td;
let tr;
let tdHTML = '';
const maxCount = 10;
const minCount = 2;

appendRowButton.addEventListener('click', function() {
  for (let i = 0; i < tableRows[0].cells.length; i++) {
    tr = document.createElement('tr');
    td = document.createElement('td');
    tdHTML += td.outerHTML;
  }
  tr.insertAdjacentHTML('beforeend', tdHTML);
  tBody.append(tr);
  tdHTML = '';

  if (tableRows.length >= maxCount) {
    this.disabled = true;

    return;
  }

  removeRowButton.disabled = false;
});

removeRowButton.addEventListener('click', function() {
  tableRows[tableRows.length - 1].remove();

  if (tableRows.length <= minCount) {
    this.disabled = true;

    return;
  }
  appendRowButton.disabled = false;
});

appendColumnButton.addEventListener('click', function() {
  td = document.createElement('td');

  [...tableRows].forEach(row => row.insertAdjacentHTML(
    'beforeend', td.outerHTML));

  if (tableRows[0].cells.length >= maxCount) {
    this.disabled = true;

    return;
  }

  removeColumnButton.disabled = false;
});

removeColumnButton.addEventListener('click', function() {
  [...tableRows].forEach(row => row.cells[row.cells.length - 1].remove());

  if (tableRows[0].cells.length <= minCount) {
    this.disabled = true;

    return;
  }

  appendColumnButton.disabled = false;
});
