'use strict';

const table = document.querySelector('.field');
const addRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const addColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const maxCells = 10;
const minCells = 2;

document.addEventListener('click', function(e) {
  const targClass = e.target.classList[0];
  const rowList = table.children[0].children;

  switch (targClass) {
    case 'append-column':
      for (let i = 0; i < rowList.length; i++) {
        const elem = document.createElement('td');

        rowList[i].append(elem);
        removeColumn.disabled = false;

        if (rowList[rowList.length - 1].children.length === maxCells) {
          addColumn.disabled = true;

          return;
        };
      };
      break;

    case 'remove-column':
      for (let i = rowList.length - 1; i >= 0; i--) {
        addColumn.disabled = false;
        rowList[i].children[0].remove();

        if (rowList[0].children.length === minCells) {
          removeColumn.disabled = true;

          return;
        };
      };
      break;

    case 'append-row':
      const newTr = document.createElement('tr');

      table.children[0].append(newTr);
      removeRow.disabled = false;

      for (let i = 0; i < rowList[0].children.length; i++) {
        const newTd = document.createElement('td');

        newTr.append(newTd);
      };

      if (rowList.length === maxCells) {
        addRow.disabled = true;

        return;
      };
      break;

    case 'remove-row':
      addRow.disabled = false;
      rowList[rowList.length - 1].remove();

      if (rowList.length === minCells) {
        removeRow.disabled = true;

        return;
      };
  }
});
