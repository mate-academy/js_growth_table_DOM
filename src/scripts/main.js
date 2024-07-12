'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const table = document.querySelector('table');

const buttonUpdate = () => {
  const rowsLength = table.rows.length;
  const columnsLength = table.rows[0].cells.length;

  appendRowButton.disabled = rowsLength >= 10;
  removeRowButton.disabled = rowsLength <= 2;
  appendColumnButton.disabled = columnsLength >= 10;
  removeColumnButton.disabled = columnsLength <= 2;
};

appendRowButton.addEventListener('click', (e) => {
  const newRow = table.insertRow();

  for (let i = 0; i < table.rows[0].cells.length; i++) {
    newRow.insertCell();
  }
  buttonUpdate();
});

removeRowButton.addEventListener('click', (e) => {
  table.deleteRow(-1);
  buttonUpdate();
});

appendColumnButton.addEventListener('click', (e) => {
  for (const row of table.rows) {
    const td = document.createElement('td');

    row.appendChild(td);
  }
  buttonUpdate();
});

removeColumnButton.addEventListener('click', (e) => {
  for (const row of table.rows) {
    row.deleteCell(-1);
  }
  buttonUpdate();
});
