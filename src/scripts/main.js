'use strict';

// write code here

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tBody');
const rows = table.children;

const rowColChange = (button1, button2, childEl, parentEl) => {
  const item = childEl[childEl.length - 1];

  if (button1 === removeRow || button1 === removeColumn) {
    item.remove();

    if (childEl.length !== 2) {
      button2.disabled = false;
    } else {
      button1.disabled = true;
    }

    return;
  }

  if (button1 === appendRow || button1 === appendColumn) {
    parentEl.append(item.cloneNode(true));

    if (childEl.length !== 10) {
      button2.disabled = false;
    } else {
      button1.disabled = true;
    }
  }
};

appendRow.addEventListener('click', () => {
  rowColChange(appendRow, removeRow, rows, table);
});

removeRow.addEventListener('click', () => {
  rowColChange(removeRow, appendRow, rows, table);
});

appendColumn.addEventListener('click', () => {
  [...rows].forEach(row => rowColChange(appendColumn,
    removeColumn, row.children, row));
});

removeColumn.addEventListener('click', () => {
  [...rows].forEach(row => rowColChange(removeColumn,
    appendColumn, row.children, row));
});
