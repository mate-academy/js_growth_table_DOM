'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const field = document.querySelector('.field');
const table = field.querySelector('table');
let tbody = table.querySelector('tbody');

if (!tbody) {
  tbody = document.createElement('tbody');
  table.appendChild(tbody);
}

const updateButtonStates = () => {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  appendRowButton.disabled = rowCount >= 10;
  removeRowButton.disabled = rowCount <= 2;
  appendColumnButton.disabled = columnCount >= 10;
  removeColumnButton.disabled = columnCount <= 2;
};

updateButtonStates();

appendRowButton.addEventListener('click', function () {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  if (rowCount < 10) {
    const tr = document.createElement('tr');

    for (let i = 0; i < columnCount; i++) {
      const td = document.createElement('td');

      tr.appendChild(td);
    }

    tbody.appendChild(tr);
    updateButtonStates();
  }
});

removeRowButton.addEventListener('click', function () {
  const rowCount = table.rows.length;

  if (rowCount > 2) {
    tbody.deleteRow(-1);
    updateButtonStates();
  }
});

appendColumnButton.addEventListener('click', function () {
  const columnCount = table.rows[0].cells.length;

  if (columnCount < 10) {
    for (let i = 0; i < table.rows.length; i++) {
      const td = document.createElement('td');

      table.rows[i].appendChild(td);
    }
    updateButtonStates();
  }
});

removeColumnButton.addEventListener('click', function () {
  const columnCount = table.rows[0].cells.length;

  if (columnCount > 2) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }
    updateButtonStates();
  }
});
