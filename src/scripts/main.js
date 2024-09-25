'use strict';

const container = document.querySelector('.container');
const field = document.querySelector('.field');
const tbody = field.querySelector('tbody');
const minRow = 2;
const minColumn = 2;
const maxRow = 10;
const maxColumn = 10;

container.addEventListener('click', (e) => {
  const target = e.target;

  if (target.classList.contains('remove-column')) {
    modifyColumn(target, false);
  } else if (target.classList.contains('remove-row')) {
    modifyRow(target, false);
  } else if (target.classList.contains('append-column')) {
    modifyColumn(target, true);
  } else if (target.classList.contains('append-row')) {
    modifyRow(target, true);
  }
});

function modifyColumn(currButton, isAdding) {
  const rows = tbody.querySelectorAll('tr');

  if (isAdding) {
    if (rows[0].children.length >= maxColumn) {
      return;
    }

    rows.forEach((row) => {
      const newCell = document.createElement('td');

      row.appendChild(newCell);
    });
  } else {
    if (rows[0].children.length <= minColumn) {
      return;
    }

    rows.forEach((row) => {
      row.removeChild(row.lastElementChild);
    });
  }

  toggleButton(
    currButton,
    isAdding,
    rows[0].children.length,
    maxColumn,
    minColumn,
    'column',
  );
}

function modifyRow(currButton, isAdding) {
  let rows = tbody.querySelectorAll('tr');

  if (isAdding) {
    if (rows.length >= maxRow) {
      return;
    }

    const newRow = rows[0].cloneNode(true);

    tbody.appendChild(newRow);
  } else {
    if (rows.length <= minRow) {
      return;
    }

    tbody.removeChild(rows[rows.length - 1]);
  }

  rows = tbody.querySelectorAll('tr');
  toggleButton(currButton, isAdding, rows.length, maxRow, minRow, 'row');
}

function toggleButton(
  button,
  isAdding,
  currentCount,
  maxLimit,
  minLimit,
  type,
) {
  const oppositeButtonClass = isAdding ? `remove-${type}` : `append-${type}`;
  const oppositeButton = document.querySelector(
    `.${oppositeButtonClass}[disabled]`,
  );

  if (currentCount === maxLimit && isAdding) {
    button.setAttribute('disabled', true);
  } else if (currentCount === minLimit && !isAdding) {
    button.setAttribute('disabled', true);
  } else {
    button.removeAttribute('disabled');
  }

  if (oppositeButton) {
    oppositeButton.removeAttribute('disabled');
  }
}
