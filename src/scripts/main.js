'use strict';

const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const tbody = document.querySelector('tbody');
const rows = tbody.rows;

addColumnButton.addEventListener('click', e => {
  for (let i = 0; i < rows.length; i++) {
    const newCell = document.createElement('td');

    rows[i].append(newCell);
  }

  if (rows[0].children.length > 2) {
    removeColumnButton.disabled = false;
  }

  if (rows[0].children.length >= 10) {
    addColumnButton.disabled = true;
  }
});

addRowButton.addEventListener('click', e => {
  tbody.append(tbody.children[0].cloneNode(true));

  if (rows.length >= 10) {
    addRowButton.disabled = true;
  }

  if (rows.length >= 2) {
    removeRowButton.disabled = false;
  }
});

removeColumnButton.addEventListener('click', e => {
  for (let i = 0; i < rows.length; i++) {
    const lastElementInRow = rows[i].lastElementChild;

    rows[i].removeChild(lastElementInRow);
  }

  const columnsQuantity = rows[0].children.length;

  if (columnsQuantity <= 2) {
    removeColumnButton.disabled = true;
  }
});

function removeItem(allRows) {
  const lastChild = allRows[allRows.length - 1];

  tbody.removeChild(lastChild);
}

removeRowButton.addEventListener('click', e => {
  removeItem(rows);

  if (rows.length <= 2) {
    removeRowButton.disabled = true;
  }
});
