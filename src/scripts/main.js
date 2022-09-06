'use strict';

document.addEventListener('click', e => {
  const appendRow = document.querySelector('.append-row');
  const appendColumn = document.querySelector('.append-column');
  const removeRow = document.querySelector('.remove-row');
  const removeColumn = document.querySelector('.remove-column');

  const table = document.querySelector('.field tbody');
  const row = document.querySelector('.field tr');

  if (e.target === appendRow && table.childElementCount <= 9) {
    table.appendChild(row.cloneNode(true));

    if (table.childElementCount > 9) {
      appendRow.disabled = true;
    }
  } else {
    appendRow.disabled = false;
  }

  if (e.target === removeRow) {
    row.remove();
  }

  if (e.target === appendColumn && row.childElementCount <= 9) {
    for (let i = 0; i < table.childElementCount; i++) {
      const cell = row.cells[0].cloneNode(true);

      table.rows[i].insertAdjacentElement('beforeend', cell);

      if (row.childElementCount > 9) {
        appendColumn.disabled = true;
      } else {
        appendColumn.disabled = false;
      }
    }
  }

  if (e.target === removeColumn) {
    for (let j = 0; j < table.children.length; j++) {
      table.rows[j].cells[0].remove();
    }
  }

  if (table.childElementCount < 3) {
    removeRow.disabled = true;
  } else {
    removeRow.disabled = false;
  }

  if (row.childElementCount < 3) {
    removeColumn.disabled = true;
  } else {
    removeColumn.disabled = false;
  }
});
