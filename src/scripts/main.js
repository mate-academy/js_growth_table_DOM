'use strict';

const table = document.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function buttonDisadled() {
  const rowCount = document.querySelectorAll('tr');
  const columnCount = rowCount[0].children;

  if (rowCount.length <= 2) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }

  if (rowCount.length >= 10) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }

  if (columnCount.length <= 2) {
    removeColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }

  if (columnCount.length >= 10) {
    appendColumn.disabled = true;
  } else {
    appendColumn.disabled = false;
  }
}

appendRow.addEventListener('click', () => {
  const row = document.querySelector('tr');
  const newRow = row.cloneNode(true);

  table.append(newRow);

  buttonDisadled();
});

removeRow.addEventListener('click', () => {
  const row = document.querySelector('tr');

  row.remove();

  buttonDisadled();
});

appendColumn.addEventListener('click', () => {
  const column = Array.from(document.querySelectorAll('tr'));
  const item = document.querySelector('td');

  column.forEach(row => {
    const newItem = item.cloneNode();

    row.append(newItem);
  });

  buttonDisadled();
});

removeColumn.addEventListener('click', () => {
  const column = Array.from(document.querySelectorAll('tr'));

  column.forEach(row => {
    const item = row.lastElementChild;

    item.remove();
  });

  buttonDisadled();
});
