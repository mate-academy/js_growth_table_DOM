'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('.field');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

const min = 2;
const max = 10;

container.addEventListener('click', ev => {
  const button = ev.target.closest('.button');

  if (!button || !container.contains(button) || button.disabled) {
    return;
  }

  const rows = document.querySelectorAll('tr');

  if (button.classList.contains('append-row')) {
    table.tBodies[0].append(rows[rows.length - 1].cloneNode(true));
  } else if (button.classList.contains('remove-row')) {
    table.deleteRow(-1);
  } else if (button.classList.contains('append-column')) {
    rows.forEach(row => {
      row.append(row.children[0].cloneNode(true));
    });
  } else if (button.classList.contains('remove-column')) {
    rows.forEach(row => {
      row.children[0].remove();
    });
  }

  updateButtonState();
});

function updateButtonState() {
  appendRowButton.disabled = table.rows.length === max;
  removeRowButton.disabled = table.rows.length === min;
  appendColumnButton.disabled = table.rows[0].childElementCount === max;
  removeColumnButton.disabled = table.rows[0].childElementCount === min;
}
