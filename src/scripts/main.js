'use strict';

const table = document.querySelector('tbody');
const container = document.querySelector('.container');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

container.addEventListener('click', e => {
  const button = e.target;

  switch (button) {
    case appendRowBtn:
      table.append(table.rows[0].cloneNode(true));
      break;

    case removeRowBtn:
      table.rows[table.rows.length - 1].remove();
      break;

    case appendColBtn:
      [...table.rows].forEach(row => {
        row.append(row.cells[0].cloneNode(true));
      });
      break;

    case removeColBtn:
      [...table.rows].forEach(row => {
        row.lastChild.remove();
      });
      break;
  }

  appendRowBtn.disabled = table.rows.length >= 10;
  removeRowBtn.disabled = table.rows.length <= 2;
  appendColBtn.disabled = table.rows[0].children.length >= 10;
  removeColBtn.disabled = table.rows[0].children.length <= 2;
});
