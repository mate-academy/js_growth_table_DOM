'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumButton = document.querySelector('.remove-column');

const tbody = document.querySelector('tbody');
const rows = tbody.rows;

appendRowButton.addEventListener('click', (e) => {
  const copiedRow = rows[0].cloneNode(true);

  tbody.append(copiedRow);
  updateButtonState();
});

appendColumnButton.addEventListener('click', () => {
  for (let i = 0; i < rows.length; i++) {
    rows[i].appendChild(document.createElement('td'));
  }
  updateButtonState();
});

removeRowButton.addEventListener('click', () => {
  tbody.lastElementChild.remove();
  updateButtonState();
});

removeColumButton.addEventListener('click', () => {
  for (const row of rows) {
    row.lastElementChild.remove();
  }
  updateButtonState();
});

function updateButtonState() {
  appendRowButton.disabled = rows.length >= 10;
  appendColumnButton.disabled = rows[0].cells.length >= 10;

  removeRowButton.disabled = rows.length <= 2;
  removeColumButton.disabled = rows[0].cells.length <= 2;
}
