'use strict';

const tbody = document.querySelector('tbody');
const container = document.querySelector('.container');
const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColButton = document.querySelector('.append-column');
const removeColButton = document.querySelector('.remove-column');
const minLimit = 2;
const maxLimit = 10;

container.addEventListener('click', (e) => {
  const ancher = e.target.closest('.button');

  if (!ancher) {
    return;
  }

  if (ancher.classList.contains('append-row')) {
    const clonedRow = tbody.rows[0].cloneNode(true);

    tbody.append(clonedRow);
  }

  if (ancher.classList.contains('remove-row')) {
    tbody.removeChild(tbody.lastElementChild);
  }

  if (ancher.classList.contains('append-column')) {
    for (let i = 0; i < tbody.rows.length; i++) {
      tbody.rows[i].append(document.createElement('td'));
    }
  }

  if (ancher.classList.contains('remove-column')) {
    for (let i = 0; i < tbody.rows.length; i++) {
      tbody.rows[i].removeChild(tbody.rows[i].lastElementChild);
    }
  }

  removeRowButton.disabled = tbody.rows.length === minLimit;
  appendRowButton.disabled = tbody.rows.length === maxLimit;

  removeColButton.disabled = tbody.rows[0].cells.length === minLimit;
  appendColButton.disabled = tbody.rows[0].cells.length === maxLimit;
});
