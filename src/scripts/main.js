'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document
  .getElementsByClassName('field')[0]
  .querySelector('tbody');
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

removeRow.addEventListener('click', () => {
  removeRow.disabled = false;
  appendRow.disabled = false;

  if (rows.length > 2) {
    const rws = [...rows];

    table.innerHTML = '';

    [...rws].slice(0, -1).forEach((row) => {
      table.appendChild(row);
    });
  }

  if (rows.length === 2) {
    removeRow.disabled = true;
  }
});

appendColumn.addEventListener('click', () => {
  [...rows].forEach((row) => {
    const td = document.createElement('td');

    removeColumn.disabled = false;
    appendColumn.disabled = false;

    if (row.querySelectorAll('td').length < 10) {
      row.appendChild(td);
    }

    if (row.querySelectorAll('td').length === 10) {
      appendColumn.disabled = true;
    }
  });
});

removeColumn.addEventListener('click', () => {
  [...rows].forEach((row) => {
    const customTds = row.querySelectorAll('td');

    removeColumn.disabled = false;
    appendColumn.disabled = false;

    if (customTds.length > 2) {
      row.innerHTML = '';

      for (const td of [...customTds].slice(0, -1)) {
        row.appendChild(td);
      }
    }

    if (customTds.length === 3) {
      removeColumn.disabled = true;
    }
  });
});
