'use strict';

const tbody = document.querySelector('tbody');
const tRows = tbody.rows;
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');
const maxCell = 10;
const minCell = 2;

document.addEventListener('click', (ev) => {
  const item = ev.target;

  if (!item.classList.contains('button')) {
    return;
  };

  switch (item) {
    case appendRow:
      tbody.append(tRows[0].cloneNode(true));
      break;
    case removeRow:
      tRows[0].remove();
      break;
    case appendCol:
      for (const row of tRows) {
        const clone = row.children[0].cloneNode(true);

        row.children[0].after(clone);
      };
      break;
    case removeCol:
      for (const row of tRows) {
        row.children[0].remove();
      };
      break;
  };

  if (tRows.length >= maxCell) {
    appendRow.setAttribute('disabled', true);
  } else {
    appendRow.removeAttribute('disabled');
  };

  if (tRows.length <= minCell) {
    removeRow.setAttribute('disabled', true);
  } else {
    removeRow.removeAttribute('disabled');
  };

  if (tRows[0].children.length >= maxCell) {
    appendCol.setAttribute('disabled', true);
  } else {
    appendCol.removeAttribute('disabled');
  };

  if (tRows[0].children.length <= minCell) {
    removeCol.setAttribute('disabled', true);
  } else {
    removeCol.removeAttribute('disabled');
  };
});
