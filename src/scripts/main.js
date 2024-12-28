'use strict';

// write code here
const tbody = document.querySelector('tbody');
const rows = Array.from(tbody.rows);

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

appendRowBtn.addEventListener('click', () => {
  let rowCount = tbody.getElementsByTagName('tr').length;

  rowCount++;

  const row = document.createElement('tr');

  for (let i = 0; i < rows[0].cells.length; i++) {
    row.appendChild(document.createElement('td'));
  }
  tbody.appendChild(row);
  rows.push(row);

  if (rowCount === 10) {
    appendRowBtn.setAttribute('disabled', 'disabled');
  }

  if (rowCount > 2) {
    removeRowBtn.removeAttribute('disabled');
  }
});

removeRowBtn.addEventListener('click', () => {
  let rowCount = tbody.getElementsByTagName('tr').length;

  rowCount--;
  removeRowBtn.removeAttribute('disabled');

  const removeRows = tbody.getElementsByTagName('tr');

  tbody.removeChild(removeRows[removeRows.length - 1]);

  if (rowCount === 2) {
    removeRowBtn.setAttribute('disabled', 'disabled');
  }

  if (rowCount < 11) {
    appendRowBtn.removeAttribute('disabled');
  }
});

appendColBtn.addEventListener('click', () => {
  rows.forEach((row) => {
    row.appendChild(document.createElement('td'));
  });

  if (rows[0].cells.length === 10) {
    appendColBtn.setAttribute('disabled', 'disabled');
  }

  if (rows[0].cells.length > 2) {
    removeColBtn.removeAttribute('disabled');
  }
});

removeColBtn.addEventListener('click', () => {
  rows.forEach((row) => {
    const cells = row.cells;

    row.removeChild(cells[cells.length - 1]);
  });

  if (rows[0].cells.length === 2) {
    removeColBtn.setAttribute('disabled', 'disabled');
  }

  if (rows[0].cells.length < 10) {
    appendColBtn.removeAttribute('disabled');
  }
});
