'use strict';

const appendRow = document.querySelector('.append-row button');
const removeRow = document.querySelector('.remove-row button');
const appendColumn = document.querySelector('.append-column button');
const removeColumn = document.querySelector('.remove-column button');
const table = document.querySelector('table');

appendRow.addEventListener('click', () => {
const rowCount = table.rows.length;
const columnCount = table.rows[0].cells.length;

if (rowCount >= 10) {
  return;
}

const newRow = document.createElement('tr');

for (let i = 0; i < columnCount; i++) {
  const td = document.createElement('td');
  newRow.appendChild(td);
}

table.appendChild(newRow);

if (table.rows.length >= 10) {
  appendRow.disabled = true;
}

if (table.rows.length > 2) {
  removeRow.disabled = false;
}

});

removeRow.addEventListener('click', () => {
  const rowCount = table.rows.length;

  if (rowCount > 2) {
    table.lastElementChild.remove();
  }

  if (table.rows.length <= 2) {
    removeRow.disabled = true;
  }

  if (table.rows.length < 10) {
    appendRow.disabled = false;
  }
})

appendColumn.addEventListener('click', () => {
const rows = table.querySelectorAll('tr');
rows.forEach(row => {
  const td = document.createElement('td');
  row.appendChild(td);
});

const newColumnCount = table.rows[0].cells.length;
if (newColumnCount >= 10) {
  appendColumn.disabled = true;
}
if (newColumnCount > 2) {
  removeColumn.disabled = false;
}
})

removeColumn.addEventListener('click', () => {
const rows = table.querySelectorAll('tr');
rows.forEach(row => row.deleteCell(-1));

const newColumnCount = table.rows[0].cells.length;

if (newColumnCount <= 2) {
  removeColumn.disabled = true;
}
if (newColumnCount < 10) {
  appendColumn.disabled = false;
}
})

