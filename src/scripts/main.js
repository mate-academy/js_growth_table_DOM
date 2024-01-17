'use strict';

const appendRow = document.querySelector('.append-row');
const appendColumn = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColumn = document.querySelector('.remove-column');

const table = {
  rowAmount: 4,
  colAmount: 4,
};

function updateButtons() {
  if (table.rowAmount === 10) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }

  if (table.rowAmount === 2) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }

  if (table.colAmount === 10) {
    appendColumn.disabled = true;
  } else {
    appendColumn.disabled = false;
  }

  if (table.colAmount === 2) {
    removeColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }
}

const tableBody = document.querySelector('tbody');

appendRow.addEventListener('click', () => {
  const cloneRow = tableBody.children[0].cloneNode(true);

  tableBody.appendChild(cloneRow);

  table.rowAmount++;
  updateButtons();
});

removeRow.addEventListener('click', () => {
  const row = document.querySelector('tr');

  tableBody.removeChild(row);
  table.rowAmount--;
  updateButtons();
});

appendColumn.addEventListener('click', () => {
  [...tableBody.children].forEach(row => (
    row.append(row.children[0].cloneNode(true))
  ));

  table.colAmount++;
  updateButtons();
});

removeColumn.addEventListener('click', () => {
  [...tableBody.children].forEach(row => (
    row.removeChild(row.querySelector('td'))
  ));
  table.colAmount--;
  updateButtons();
});
