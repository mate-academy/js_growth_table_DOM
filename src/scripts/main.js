'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');

const appendRowBtn = document.querySelector('.append-row');
const removeRowBtn = document.querySelector('.remove-row');
const appendColumnBtn = document.querySelector('.append-column');
const removeColumnBtn = document.querySelector('.remove-column');

const min = 2;
const max = 10;

container.addEventListener('click', event => {
  const btn = event.target;

  if (btn.classList.contains('append-row')) {
    table.rows[0].before(table.rows[0].cloneNode(true));

    table.rows.length < max
      ? appendRowBtn.disabled = false
      : appendRowBtn.disabled = true;
  }

  if (btn.classList.contains('remove-row')) {
    table.rows[0].remove();

    table.rows.length > min
      ? removeRowBtn.disabled = false
      : removeRowBtn.disabled = true;
  }

  if (btn.classList.contains('append-column')) {
    for (let i = 0; i < table.rows.length; i++) {
      const cell = table.rows[i].cells[0];

      cell.before(table.rows[0].cells[0].cloneNode(true));
    }

    table.rows[0].children.length < max
      ? appendColumnBtn.disabled = false
      : appendColumnBtn.disabled = true;
  }

  if (btn.classList.contains('remove-column')) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].cells[0].remove();
    }

    table.rows[0].children.length > min
      ? removeColumnBtn.disabled = false
      : removeColumnBtn.disabled = true;
  }
});
