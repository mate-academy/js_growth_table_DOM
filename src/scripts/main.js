'use strict';

const docField = document.body;

docField.addEventListener('click', (e) => {
  const tableField = document.querySelector('table');
  const tableRows = document.querySelectorAll('tr');

  const appendRow = document.querySelector('.append-row.button');
  const removeRow = document.querySelector('.remove-row.button');
  const appendCol = document.querySelector('.append-column.button');
  const removeCol = document.querySelector('.remove-column.button');

  const maxCount = 10;
  const minCount = 2;

  let rowsNumber = tableRows.length;
  let columnsNumber = tableRows[0].children.length;

  const target = e.target;

  switch (target) {
    case appendRow:
      tableField.insertAdjacentHTML('beforeend', tableRows[0].outerHTML);
      rowsNumber++;
      break;

    case removeRow:
      tableRows[tableRows.length - 1].remove();
      rowsNumber--;
      break;

    case appendCol:
      for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].insertAdjacentHTML('beforeend', `<td></td>`);
      }
      columnsNumber++;
      break;

    case removeCol:
      for (let i = 0; i < tableRows.length; i++) {
        tableRows[i].lastElementChild.remove();
      }
      columnsNumber--;
      break;
  }

  appendRow.disabled = rowsNumber === maxCount;
  removeRow.disabled = rowsNumber === minCount;
  appendCol.disabled = columnsNumber === maxCount;
  removeCol.disabled = columnsNumber === minCount;
});
