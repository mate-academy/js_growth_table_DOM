'use strict';

// write code here
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.getElementsByClassName('field')[0];
const rows = table.getElementsByTagName('tr');

appendRow.addEventListener('click', () => {
  const tr = rows[0].cloneNode(true);

  if (rows.length < 10) {
    table.appendChild(tr);
  }
});

removeRow.addEventListener('click', () => {
  if (rows.length > 2) {
    const rws = [...rows];

    table.innerHTML = '';

    [...rws].slice(0, -1).forEach((row) => {
      table.appendChild(row);
    });
  }
});

appendColumn.addEventListener('click', () => {
  [...rows].forEach((row) => {
    const td = document.createElement('td');

    if (row.querySelectorAll('td').length < 10) {
      row.appendChild(td);
    }
  });
});

removeColumn.addEventListener('click', () => {
  [...rows].forEach((row) => {
    const customTds = row.querySelectorAll('td');

    if (customTds.length > 2) {
      row.innerHTML = '';

      for (const td of [...customTds].slice(0, -1)) {
        row.appendChild(td);
      }
    }
  });
});
