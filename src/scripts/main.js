'use strict';

// write code here
const table = document
  .getElementsByClassName('field')[0]
  .querySelector('tbody');
const MIN = 2;
const MAX = 10;
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const rows = table.getElementsByTagName('tr');

appendRow.addEventListener('click', () => {
  const tr = document.createElement('tr');

  tr.innerHTML = rows[0].innerHTML;
  appendRow.disabled = false;
  removeRow.disabled = false;

  if (rows.length < 10) {
    table.appendChild(tr);
  }

  if (rows.length === 10) {
    appendRow.disabled = true;
  }
});

removeRow.addEventListener('click', (e) => {
  const tr = document.querySelector('tr');

  tr.remove();
  checkDisabilityForButtons();
});

appendColumn.addEventListener('click', (e) => {
  [...rows].forEach((row) => {
    row.appendChild(document.createElement('td'));
  });
  checkDisabilityForButtons();
});

removeColumn.addEventListener('click', (e) => {
  [...rows].forEach((row) => {
    const customTds = row.querySelectorAll('td');

    if (customTds.length > 2) {
      row.innerHTML = '';

      for (const td of [...customTds].slice(0, -1)) {
        row.appendChild(td);
      }
    }
  });
  checkDisabilityForButtons();
});

function checkDisabilityForButtons() {
  const rowCount = table.rows.length;
  const columnCount = table.rows[0].cells.length;

  appendRow.disabled = rowCount >= MAX;
  removeRow.disabled = rowCount <= MIN;
  appendColumn.disabled = columnCount >= MAX;
  removeColumn.disabled = columnCount <= MIN;
}
