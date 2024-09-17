'use strict';

const MAX_COUNT = 10;
const MIN_COUNT = 2;

const tbody = document.querySelector('.field > tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const updateButtonState = (row) => {
  appendRow.disabled = tbody.childElementCount >= MAX_COUNT;
  removeRow.disabled = tbody.childElementCount <= MIN_COUNT;

  if (row) {
    appendColumn.disabled = row.childElementCount >= MAX_COUNT;
    removeColumn.disabled = row.childElementCount <= MIN_COUNT;
  }
};

appendRow.addEventListener('click', () => {
  const firstRow = tbody.querySelector('tr');
  const newRow = firstRow.cloneNode(true);

  if (tbody.childElementCount < MAX_COUNT) {
    tbody.appendChild(newRow);
  }
  updateButtonState();
});

removeRow.addEventListener('click', () => {
  if (tbody.childElementCount > MIN_COUNT) {
    tbody.lastElementChild.remove();
  }
  updateButtonState();
});

appendColumn.addEventListener('click', () => {
  const allRows = tbody.querySelectorAll('tr');
  const firstRow = tbody.querySelector('tr');

  if (firstRow.childElementCount < MAX_COUNT) {
    allRows.forEach((row) => {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    });
  }
  updateButtonState(firstRow);
});

removeColumn.addEventListener('click', () => {
  const allRows = tbody.querySelectorAll('tr');
  const firstRow = tbody.querySelector('tr');

  if (firstRow.childElementCount > MIN_COUNT) {
    allRows.forEach((row) => {
      row.lastElementChild.remove();
    });
  }
  updateButtonState(firstRow);
});
