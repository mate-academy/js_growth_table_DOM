'use strict';

//const table = document.querySelector('tbody');
const container = document.querySelector('.container');
const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

container.addEventListener('click', (e) => {
  const table = document.querySelector('tbody');

  if (e.target.tagName !== 'BUTTON') {
    return;
  }

  if (e.target.classList.contains('append-row')) {
    const row = document.createElement('tr');

    for (let i = 0; i < table.rows[0].querySelectorAll('td').length; i++) {
      const cell = document.createElement('td');

      row.append(cell);
    }

    table.append(row);
  }

  if (e.target.classList.contains('remove-row')) {
    table.rows[table.rows.length - 1].remove();
  };

  const limitRows = table.rows.length;

  limitRows === 10
    ? appendRowBtn.setAttribute('disabled', 'disabled')
    : appendRowBtn.disabled = false;

  limitRows === 2
    ? removeRowBtn.setAttribute('disabled', 'disabled')
    : removeRowBtn.disabled = false;

  if (e.target.classList.contains('append-column')) {
    for (let i = 0; i < table.rows.length; i++) {
      const cell = document.createElement('td');

      table.rows[i].append(cell);
    }
  }

  if (e.target.classList.contains('remove-column')) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].cells[table.rows[0].cells.length - 1].remove();
    }
  }

  const limitCells = table.rows[0].cells.length;

  limitCells === 10
    ? appendColBtn.setAttribute('disabled', 'disabled')
    : appendColBtn.disabled = false;

  limitCells === 2
    ? removeColBtn.setAttribute('disabled', 'disabled')
    : removeColBtn.disabled = false;
});
