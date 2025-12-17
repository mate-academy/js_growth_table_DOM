'use strict';

const addColumnButton = document.querySelector('.append-column');
const addRowButton = document.querySelector('.append-row');
const deleteColumnButton = document.querySelector('.remove-column');
const deleteRowButton = document.querySelector('.remove-row');

addColumnButton.addEventListener('click', (e) => {
  const columns = document.querySelectorAll('.field tr');

  if (columns[0].children.length >= 10) {
    return;
  }

  for (const tr of columns) {
    const td = document.createElement('td');

    tr.appendChild(td);
  }
  checkButtonCondition(addColumnButton, columns[0].children.length);
  checkButtonCondition(deleteColumnButton, columns[0].children.length);
});

deleteColumnButton.addEventListener('click', (e) => {
  const columns = document.querySelectorAll('.field tr');

  if (columns[0].children.length <= 2) {
    return;
  }

  for (const tr of columns) {
    const lastCell = tr.cells[tr.cells.length - 1];

    tr.removeChild(lastCell);
  }

  checkButtonCondition(deleteColumnButton, columns[0].children.length);
  checkButtonCondition(addColumnButton, columns[0].children.length);
});

addRowButton.addEventListener('click', (e) => {
  const table = document.querySelector('tbody');

  if (table.children.length >= 10) {
    return;
  }

  const tr = document.createElement('tr');

  for (let i = 1; i <= table.children[0].cells.length; i++) {
    const td = document.createElement('td');

    tr.appendChild(td);
  }

  table.appendChild(tr);
  checkButtonCondition(addRowButton, table.children.length);
  checkButtonCondition(deleteRowButton, table.children.length);
});

deleteRowButton.addEventListener('click', (e) => {
  const rows = document.querySelectorAll('tbody');

  if (rows[0].children.length <= 2) {
    return;
  }

  for (const rw of rows) {
    const lastRow = rows[0].children[rows[0].children.length - 1];

    rw.removeChild(lastRow);
  }
  checkButtonCondition(deleteRowButton, rows[0].children.length);
  checkButtonCondition(addRowButton, rows[0].children.length);
});

const checkButtonCondition = (button, condition) => {
  if (button.className.includes('append') && condition >= 10) {
    button.disabled = true;

    return;
  }

  if (button.className.includes('remove') && condition <= 2) {
    button.disabled = true;

    return;
  }

  button.disabled = false;
};
