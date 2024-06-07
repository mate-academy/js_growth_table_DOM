'use strict';

const tablet = document.querySelector('table');
const addRow = document.querySelector('.append-row');
const addColum = document.querySelector('.append-column');
const removeRow = document.querySelector('.remove-row');
const removeColum = document.querySelector('.remove-column');

addColum.addEventListener('click', () => {
  const index = tablet.rows[0];

  if (index.cells.length >= 2) {
    removeRow.disabled = false;
  }

  for (let i = 0; i <= tablet.rows.length; i++) {
    const td = document.createElement('td');

    tablet.rows[i]?.append(td);
  }

  if (index.cells.length === 10) {
    addColum.disabled = true;
  }
});

addRow.addEventListener('click', () => {
  if (tablet.rows.length >= 2) {
    removeColum.disabled = false;
  }

  const tr = document.createElement('tr');

  const r = tablet.rows[1];

  for (let i = 0; i <= r.cells.length - 1; i++) {
    const td = document.createElement('td');

    tr.appendChild(td);
  }

  tablet.appendChild(tr);

  if (tablet.rows.length === 10) {
    addRow.disabled = true;
  }
});

removeRow.addEventListener('click', () => {
  for (let i = 0; i <= tablet.rows.length; i++) {
    tablet.rows[i]?.lastElementChild.remove();
  }

  const index = tablet.rows[0];

  if (index.cells.length === 2) {
    removeRow.setAttribute('disabled', 'true');
  }

  if (index.cells.length === 9) {
    addColum.disabled = false;
  }
});

removeColum.addEventListener('click', () => {
  const index = tablet.rows.length;
  const row = tablet.rows[index - 1];

  row.remove();

  if (tablet.rows.length === 2) {
    removeColum.setAttribute('disabled', 'true');
  }

  if (tablet.rows.length === 9) {
    addRow.disabled = false;
  }
});
