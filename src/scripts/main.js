'use strict';

// write code here
const tbody = document.querySelector('.field tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const MAX = 10;
const MIN = 2;

function updateButtons(addRow, rmRow, addCol, rmCol) {
  if (tbody.children.length >= MAX) {
    addRow.disabled = true;
  } else {
    addRow.disabled = false;
  }

  if (tbody.children.length <= MIN) {
    rmRow.disabled = true;
  } else {
    rmRow.disabled = false;
  }

  // const reqiredChildLength = tbody.firstChild.children.length;

  if (tbody.firstChild.children.length >= MAX) {
    addCol.disabled = true;
  } else {
    addCol.disabled = false;
  }

  if (tbody.firstChild.children.length <= MIN) {
    rmCol.disabled = true;
  } else {
    rmCol.disabled = false;
  }
}

updateButtons(appendRow, removeRow, appendColumn, removeColumn);

// +ROW handler
appendRow.addEventListener('click', (ev) => {
  if (ev.target.closest('button') && tbody.children.length < MAX) {
    ev.preventDefault();

    const columsPerRow = tbody.children[0].children.length;

    const newRow = document.createElement('tr');

    for (let i = 0; i < columsPerRow; i++) {
      const item = document.createElement('td');

      newRow.appendChild(item);
    }

    tbody.append(newRow);
  }

  updateButtons(appendRow, removeRow, appendColumn, removeColumn);
});

// -ROW handler
removeRow.addEventListener('click', (ev) => {
  if (ev.target.closest('button') && tbody.children.length > MIN) {
    ev.preventDefault();

    tbody.removeChild(tbody.lastElementChild);
  }

  updateButtons(appendRow, removeRow, appendColumn, removeColumn);
});

// +COLUMN handler
appendColumn.addEventListener('click', (ev) => {
  if (ev.target.closest('button') && tbody.firstChild.children.length < MAX) {
    ev.preventDefault();

    const rows = Array.from(tbody.children);

    // iterating each row
    for (const row of rows) {
      const newColumn = document.createElement('td');

      row.appendChild(newColumn);
    }
  }

  updateButtons(appendRow, removeRow, appendColumn, removeColumn);
});

// -COLUMN handler

removeColumn.addEventListener('click', (ev) => {
  if (ev.target.closest('button') && tbody.firstChild.children.length > MIN) {
    ev.preventDefault();

    const rows = Array.from(tbody.children);

    // iterating each row
    for (const row of rows) {
      row.removeChild(row.lastElementChild);
    }
  }

  updateButtons(appendRow, removeRow, appendColumn, removeColumn);
});
