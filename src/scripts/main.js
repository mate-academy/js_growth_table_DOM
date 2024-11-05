'use strict';

// write code here
const table = document.querySelector('.field');
const rows = table.rows;

const addRow = document.querySelector('.append-row');
const delRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const delColumn = document.querySelector('.remove-column');

const buttonOnAir = () => {
  addRow.disabled = rows.length >= 10;
  delRow.disabled = rows.length <= 2;
  addColumn.disabled = rows[0].cells.length >= 10;
  delColumn.disabled = rows[0].cells.length <= 2;
};

addRow.addEventListener('click', (e) => {
  const row = table.insertRow();

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    row.insertCell();
  }
  buttonOnAir();
});

delRow.addEventListener('click', (e) => {
  table.deleteRow(-1);
  buttonOnAir();
});

addColumn.addEventListener('click', (e) => {
  for (const i of rows) {
    const td = document.createElement('td');

    i.appendChild(td);
  }
  buttonOnAir();
});

delColumn.addEventListener('click', (e) => {
  for (const i of rows) {
    i.deleteCell(-1);
  }
  buttonOnAir();
});
