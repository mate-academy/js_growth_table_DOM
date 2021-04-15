'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

container.addEventListener('click', ev => {
  const button = ev.target.closest('.button');

  if (!button || !container.contains(button)) {
    return;
  }

  updateButtonState();
});

appendRowButton.addEventListener('click', ev => {
  if (ev.target !== appendRowButton || ev.target.disabled) {
    return;
  }

  table.tBodies[0].append(table.rows[table.rows.length - 1].cloneNode(true));
});

removeRowButton.addEventListener('click', ev => {
  if (ev.target !== removeRowButton || ev.target.disabled) {
    return;
  }

  table.deleteRow(-1);
});

appendColumnButton.addEventListener('click', ev => {
  if (ev.target !== appendColumnButton || ev.target.disabled) {
    return;
  }

  [...table.rows].forEach(row => {
    row.append(row.lastElementChild.cloneNode(true));
  });
});

removeColumnButton.addEventListener('click', ev => {
  if (ev.target !== removeColumnButton || ev.target.disabled) {
    return;
  }

  [...table.rows].forEach(row => {
    row.lastElementChild.remove();
  });
});

function updateButtonState() {
  const min = 2;
  const max = 10;

  appendRowButton.disabled = table.rows.length === max;
  removeRowButton.disabled = table.rows.length === min;
  appendColumnButton.disabled = table.rows[0].childElementCount === max;
  removeColumnButton.disabled = table.rows[0].childElementCount === min;
}
