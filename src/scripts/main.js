'use strict';
const maxLen = 10;
const minLen = 2;

const tr = document.getElementsByTagName('tr');
const table = document.getElementsByTagName('tbody')[0];
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

function updateButton() {
  appendRow.disabled = tr.length === maxLen;
  removeRow.disabled = tr.length === minLen;
  appendColumn.disabled = tr[0].children.length === maxLen;
  removeColumn.disabled = tr[0].children.length === minLen;
}

appendRow.addEventListener('click', () => {
  table.append(tr[0].cloneNode(true));
  updateButton();
});

removeRow.addEventListener('click', () => {
  tr[2].remove();
  updateButton();
});

appendColumn.addEventListener('click', () => {
  Array.from(tr).forEach((row) => {
    row.insertAdjacentHTML('beforeend', '<td></td>');
  });

  updateButton();
});

removeColumn.addEventListener('click', () => {
  Array.from(tr).forEach((row) => row.cells[2].remove());

  updateButton();
});
