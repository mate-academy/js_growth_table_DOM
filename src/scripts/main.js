'use strict';

const container = document.querySelector('.container');
const tBody = document.querySelector('tbody');
let rows = tBody.querySelectorAll('tr');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

const minCount = 2;
const maxCount = 10;

container.addEventListener('click', function(e) {
  const button = e.target.closest('.button');

  if (!button) {
    return;
  }

  if (button.classList.contains('append-column')) {
    rows = tBody.querySelectorAll('tr');

    rows.forEach(row => {
      const newColumn = document.createElement('td');

      row.appendChild(newColumn);
    });

    (rows[rows.length - 1].children.length >= maxCount)
      ? appendColumn.disabled = true
      : removeColumn.disabled = '';
  }

  if (button.classList.contains('remove-column')) {
    rows = tBody.querySelectorAll('tr');

    rows.forEach(row => {
      row.lastElementChild.remove();
    });

    (rows[rows.length - 1].children.length <= minCount)
      ? removeColumn.disabled = true
      : appendColumn.disabled = '';
  }

  if (button.classList.contains('append-row')) {
    const newRow = rows[rows.length - 1].cloneNode(true);

    tBody.append(newRow);

    rows = tBody.querySelectorAll('tr');

    (rows.length >= maxCount)
      ? appendRow.disabled = true
      : removeRow.disabled = '';
  }

  if (button.classList.contains('remove-row')) {
    rows[rows.length - 1].remove();

    rows = tBody.querySelectorAll('tr');

    (rows.length <= minCount)
      ? removeRow.disabled = true
      : appendRow.disabled = '';
  }
});
