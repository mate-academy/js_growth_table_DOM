'use strict';

// write code here
document.addEventListener('click', e => {
  const appendRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const appendCol = document.querySelector('.append-column');
  const removeCol = document.querySelector('.remove-column');
  const table = document.querySelector('.field tbody');
  const row = document.querySelector('.field tr');
  const newRow = row.cloneNode(true);
  const item = e.target;

  switch (item) {
    case appendRow:
      table.insertAdjacentElement('beforeend', newRow);
      break;

    case removeRow:
      table.deleteRow(0);
      break;

    case appendCol:
      for (let i = 0; i < table.children.length; i++) {
        table.rows[i]
          .insertAdjacentElement('beforeend', row.cells[0].cloneNode(true));
      }
      break;

    case removeCol:
      for (let i = 0; i < table.children.length; i++) {
        table.rows[i].deleteCell(0);
      }
      break;
  }

  if (table.childElementCount === 10) {
    appendRow.disabled = true;
  } else {
    appendRow.disabled = false;
  }

  if (table.childElementCount === 2) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }

  if (row.childElementCount === 10) {
    appendCol.disabled = true;
  } else {
    appendCol.disabled = false;
  }

  if (row.childElementCount === 2) {
    removeCol.disabled = true;
  } else {
    removeCol.disabled = false;
  }
});
