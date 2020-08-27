'use strict';

(function() {
  const table = document.querySelector('.field tbody');
  const appendRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const appendColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');

  const maxTable = 9;
  const minTable = 3;
  let currentSizeColumn = table.firstChild.querySelectorAll('td').length;
  let currentSizeRow = table.querySelectorAll('tr').length;

  appendRow.addEventListener('click', addRow);
  appendColumn.addEventListener('click', addColumn);
  removeRow.addEventListener('click', remRow);
  removeColumn.addEventListener('click', remColumn);

  function addRow() {
    removeRow.disabled = false;

    if (currentSizeRow === maxTable) {
      appendRow.disabled = true;
    }

    table.appendChild(table.lastElementChild.cloneNode(true));
    currentSizeRow++;
  }

  function addColumn() {
    removeColumn.disabled = false;

    if (currentSizeColumn === maxTable) {
      appendColumn.disabled = true;
    }

    [...table.children].forEach(tr => {
      tr.append(tr.lastElementChild.cloneNode(true));
    });
    currentSizeColumn++;
  }

  function remRow() {
    appendRow.disabled = false;

    if (currentSizeRow <= minTable) {
      removeRow.disabled = true;
    }

    table.removeChild(table.querySelector('tr'));
    currentSizeRow--;
  }

  function remColumn() {
    appendColumn.disabled = false;

    if (currentSizeColumn <= minTable) {
      removeColumn.disabled = true;
    }

    [...table.children].forEach(tr => {
      tr.removeChild(tr.querySelector('td'));
    });

    currentSizeColumn--;
  }
}());
