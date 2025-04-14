'use strict';

const MIN_VALUE = 2;
const MAX_VALUE = 10;

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');
const tbody =
  document.querySelector('.tbody') || document.querySelector('.field');
let columnCount = document.querySelectorAll('.field tr:first-child td').length;

appendRowBtn.addEventListener('click', () => {
  const tr = document.createElement('tr');

  for (let i = 0; i < columnCount; i++) {
    const td = document.createElement('td');

    tr.appendChild(td);
  }

  tbody.insertAdjacentElement('beforeend', tr);

  toggleButtonState();
});

removeRowBtn.addEventListener('click', () => {
  if (tbody.rows.length > MIN_VALUE) {
    tbody.deleteRow(-1);
  }

  toggleButtonState();
});

appendColumnBtn.addEventListener('click', () => {
  const allRows = tbody.querySelectorAll('tr');

  allRows.forEach((row) => {
    const td = document.createElement('td');

    row.appendChild(td);
  });
  columnCount++;
  toggleButtonState();
});

removeColumnBtn.addEventListener('click', () => {
  const allRows = tbody.querySelectorAll('tr');

  allRows.forEach((row) => {
    row.deleteCell(-1);
  });
  columnCount--;
  toggleButtonState();
});

function toggleButtonState() {
  removeRowBtn.disabled = tbody.rows.length <= MIN_VALUE;
  appendRowBtn.disabled = tbody.rows.length >= MAX_VALUE;
  removeColumnBtn.disabled = columnCount <= MIN_VALUE;
  appendColumnBtn.disabled = columnCount >= MAX_VALUE;
}
