'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');

const MAX = 10;
const MIN = 2;

let startColumnCount = 4;

function updateButtonState() {
  const columnCount = tbody.querySelector('tr').querySelectorAll('td').length;
  const rowCount = tbody.querySelectorAll('tr').length;

  if (columnCount >= 10) {
    appendColumn.disabled = true;
  } else {
    appendColumn.disabled = false;
  }

  if (columnCount <= 2) {
    removeColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }

  if (rowCount >= 10) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }

  if (rowCount <= 2) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }
}

appendColumn.addEventListener('click', () => {
  const trs = tbody.querySelectorAll('tr');

  trs.forEach((tr) => {
    if (startColumnCount < MAX) {
      const newTd = document.createElement('td');

      tr.appendChild(newTd);
    }
  });

  startColumnCount++;

  updateButtonState();
});

removeColumn.addEventListener('click', () => {
  const trs = tbody.querySelectorAll('tr');

  trs.forEach((tr) => {
    if (startColumnCount > MIN) {
      tr.removeChild(tr.querySelector('td'));
    }
  });

  startColumnCount--;

  updateButtonState();
});

appendRow.addEventListener('click', () => {
  const copyOfTr = tbody.querySelector('tr').cloneNode(true);
  const tbodyLength = tbody.querySelectorAll('tr').length;

  if (tbodyLength < MAX) {
    tbody.appendChild(copyOfTr);
  }

  updateButtonState();
});

removeRow.addEventListener('click', () => {
  const tr = tbody.querySelector('tr');
  const tbodyLength = tbody.querySelectorAll('tr').length;

  if (tbodyLength > MIN) {
    tbody.removeChild(tr);
  }

  updateButtonState();
});
