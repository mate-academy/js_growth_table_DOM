'use strict';

const table = document.querySelector('tbody');

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');

function disable() {
  appendRow.disabled = table.rows.length >= 10;
  removeRow.disabled = table.rows.length <= 2;
  appendCol.disabled = table.rows[0].cells.length >= 10;
  removeCol.disabled = table.rows[0].cells.length <= 2;
}

appendRow.addEventListener('click', () => {
  table.append(table.firstChild.cloneNode(true));
  disable();
});

removeRow.addEventListener('click', () => {
  table.lastElementChild.remove();
  disable();
});

appendCol.addEventListener('click', () => {
  [...table.rows].forEach(item => {
    item.append(item.firstElementChild.cloneNode(true));
  });
  disable();
});

removeCol.addEventListener('click', () => {
  [...table.rows].forEach(item => {
    item.lastElementChild.remove();
  });
  disable();
});
