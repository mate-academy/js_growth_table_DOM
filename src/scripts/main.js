'use strict';

const container = document.querySelector('.container');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

container.addEventListener('click', (e) => {
  const table = container.querySelector('tbody');

  if (e.target.tagName !== 'BUTTON') {
    return;
  }

  if (e.target.classList.contains('append-row')) {
    const row = document.createElement('tr');
    const rowsArr = table.rows[0].querySelectorAll('td');

    for (const el of rowsArr) {
      row.append(el.cloneNode(true));
    }

    table.append(row);
  }

  if (e.target.classList.contains('remove-row')) {
    table.rows[table.rows.length - 1].remove();
  };

  const limitRows = table.rows.length;

  appendRowBtn.disabled = limitRows > 9;
  removeRowBtn.disabled = limitRows < 3;

  if (e.target.classList.contains('append-column')) {
    for (const el of table.rows) {
      const cell = document.createElement('td');

      el.append(cell);
    }
  }

  if (e.target.classList.contains('remove-column')) {
    for (const el of table.rows) {
      el.cells[table.rows[0].cells.length - 1].remove();
    }
  }

  const amountCells = table.rows[0].cells.length;

  appendColBtn.disabled = amountCells > 9;
  removeColBtn.disabled = amountCells < 3;
});
