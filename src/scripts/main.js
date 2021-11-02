'use strict';

const table = document.querySelector('tbody');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColBtn = document.querySelector('.append-column');
const removeColBtn = document.querySelector('.remove-column');

appendRowBtn.addEventListener('click', () => {
  removeRowBtn.disabled = false;

  table.append(table.rows[0].cloneNode(true));

  if (table.rows.length >= 10) {
    appendRowBtn.disabled = true;
  }
});

removeRowBtn.addEventListener('click', () => {
  appendRowBtn.disabled = false;

  table.rows[table.rows.length - 1].remove();

  if (table.rows.length <= 2) {
    removeRowBtn.disabled = true;
  }
});

appendColBtn.addEventListener('click', () => {
  removeColBtn.disabled = false;

  [...table.rows].forEach(row => {
    row.append(row.cells[0].cloneNode(true));
  });

  if (table.rows[0].children.length >= 10) {
    appendColBtn.disabled = true;
  }
});

removeColBtn.addEventListener('click', () => {
  appendColBtn.disabled = false;

  [...table.rows].forEach(row => {
    row.lastChild.remove();
  });

  if (table.rows[0].children.length <= 2) {
    removeColBtn.disabled = true;
  }
});
