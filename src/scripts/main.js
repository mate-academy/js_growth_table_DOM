'use strict';

document.addEventListener('click', e => {
  const clickedButton = e.target;
  const tableBody = document.querySelector('tbody');
  const trs = document.querySelectorAll('tr');
  const column = document.querySelector('tr');
  const td = document.createElement('td');
  const buttonAddRow = document.querySelector('.append-row');
  const buttonRemoveRow = document.querySelector('.remove-row');
  const buttonAddColumn = document.querySelector('.append-column');
  const buttonRemoveColumn = document.querySelector('.remove-column');
  let rowCounter = tableBody.children.length;
  let columnCounter = column.children.length;

  if (clickedButton.className === 'append-row button' && rowCounter < 10) {
    tableBody.append(tableBody.children[0].cloneNode(true));
    rowCounter = tableBody.children.length;
  };

  if (clickedButton.className === 'remove-row button' && rowCounter > 2) {
    tableBody.children[0].remove();
    rowCounter = tableBody.children.length;
  };

  if (clickedButton.className === 'append-column button') {
    if (columnCounter < 10) {
      for (const tr of trs) {
        tr.append(td.cloneNode(true));
      };
    };
    columnCounter = column.children.length;
  };

  if (clickedButton.className === 'remove-column button') {
    if (columnCounter > 2) {
      for (const tr of trs) {
        tr.children[0].remove();
      };
    };
    columnCounter = column.children.length;
  };

  buttonAddRow.disabled = rowCounter === 10;
  buttonRemoveRow.disabled = rowCounter === 2;
  buttonAddColumn.disabled = columnCounter === 10;
  buttonRemoveColumn.disabled = columnCounter === 2;
});
