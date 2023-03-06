'use strict';

const table = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function disableButton() {
  const rowCount = document.querySelectorAll('tr');
  const columnCount = rowCount[0].children;

  removeRow.disabled = rowCount.length <= 2;

  appendRow.disabled = rowCount.length >= 10;

  removeColumn.disabled = columnCount.length <= 2;

  appendColumn.disabled = columnCount.length >= 10;
}

appendRow.addEventListener('click', () => {
  const row = document.querySelector('tr');
  const newRow = row.cloneNode(true);

  table.append(newRow);

  disableButton();
});

removeRow.addEventListener('click', () => {
  const row = document.querySelector('tr');

  row.remove();

  disableButton();
});

appendColumn.addEventListener('click', () => {
  const rows = Array.from(document.querySelectorAll('tr'));
  const item = document.querySelector('td');

  rows.forEach(row => {
    const newItem = item.cloneNode();

    row.append(newItem);
  });

  disableButton();
});

removeColumn.addEventListener('click', () => {
  const rows = Array.from(document.querySelectorAll('tr'));

  rows.forEach(row => {
    const item = row.lastElementChild;

    item.remove();
  });

  disableButton();
});
