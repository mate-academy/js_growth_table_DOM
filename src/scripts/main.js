'use strict';

// write code here
document.addEventListener('click', (e) => {
  const table = document.querySelector('.field').firstElementChild;
  let trs = document.querySelectorAll('tr');

  const removeColumn = document.querySelector('.remove-column');
  const removeRow = document.querySelector('.remove-row');
  const addRow = document.querySelector('.append-column');
  const addColumn = document.querySelector('.append-row');

  if (![removeColumn, removeRow, addColumn, addRow].includes(e.target)) {
    return;
  }

  if (e.target === removeRow && trs.length > 2) {
    table.children[0].remove();

    trs = table.querySelectorAll('tr');
    removeRow.disabled = trs.length === 2;
    addRow.disabled = false;
  }

  if (e.target === removeColumn && trs[0].children.length > 2) {
    trs.forEach((tr) => {
      tr.children[0].remove();
    });

    trs = table.querySelectorAll('tr');
    removeColumn.disabled = trs[0].children.length === 2;
    addColumn.disabled = false;
  }

  if (e.target === addColumn && trs[0].children.length < 10) {
    trs.forEach((tr) => {
      tr.append(tr.firstElementChild.cloneNode(true));
    });

    trs = table.querySelectorAll('tr');
    addColumn.disabled = trs[0].children.length === 10;
    removeColumn.disabled = false;
  }

  if (e.target === addRow && trs.length < 10) {
    table.append(trs[0].cloneNode(true));

    trs = table.querySelectorAll('tr');
    addRow.disabled = trs.length === 10;
    removeRow.disabled = false;
  }
});
