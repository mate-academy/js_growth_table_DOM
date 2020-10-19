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

  if ([...btn.classList].includes('append-row')) {
    table.rows[0].before(table.rows[0].cloneNode(true));
  }

  if ([...btn.classList].includes('remove-row')) {
    table.rows[0].remove();
  }

  if ([...btn.classList].includes('append-column')) {
    for (let i = 0; i < table.rows.length; i++) {
      const cell = table.rows[i].cells[0];

      cell.before(table.rows[0].cells[0].cloneNode(true));
    }
  }

  if ([...btn.classList].includes('remove-column')) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].cells[0].remove();
    }
  }

  if (table.rows.length < max) {
    appendRowBtn.disabled = false;
  } else {
    appendRowBtn.disabled = true;
  }

  if (table.rows.length > min) {
    removeRowBtn.disabled = false;
  } else {
    removeRowBtn.disabled = true;
  }

  if (table.rows[0].children.length < max) {
    appendColumnBtn.disabled = false;
  } else {
    appendColumnBtn.disabled = true;
  }

  if (table.rows[0].children.length > min) {
    removeColumnBtn.disabled = false;
  } else {
    removeColumnBtn.disabled = true;
  }
});
