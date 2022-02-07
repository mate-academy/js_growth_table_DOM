'use strict';

// write code here
const container = document.querySelector('.container');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const table = document.querySelector('tbody');
let trRows = [...table.querySelectorAll('tr')];

const growthTable = (button) => {
  switch (button) {
    case appendRow:
      table.append(table.lastElementChild.cloneNode(true));
      trRows = [...table.querySelectorAll('tr')];
      break;
    case removeRow:
      table.lastElementChild.remove();
      trRows = [...table.querySelectorAll('tr')];
      break;
    case appendColumn:
      trRows.forEach(tr => {
        tr.append(tr.lastElementChild.cloneNode(true));
      });
      break;
    case removeColumn:
      trRows.forEach(tr => {
        tr.lastElementChild.remove();
      });
      break;
    default:
      break;
  }

  const rowsLimit = trRows.length;
  const columnsLimit = trRows[0].children.length;

  appendRow.disabled = rowsLimit > 9;
  removeRow.disabled = rowsLimit < 3;
  appendColumn.disabled = columnsLimit > 9;
  removeColumn.disabled = columnsLimit < 3;
};

container.addEventListener('click', (e) => {
  const button = e.target.closest('button');

  if (!button || !container.contains(button)) {
    return;
  }

  growthTable(button);
});
