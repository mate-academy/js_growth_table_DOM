'use strict';

(function() {
  const table = document.querySelector('.field tbody');
  const appendRow = document.querySelector('.append-row');
  const removeRow = document.querySelector('.remove-row');
  const appendColumn = document.querySelector('.append-column');
  const removeColumn = document.querySelector('.remove-column');
  const allTr = document.querySelector('tr');

  const maxTable = 10;
  const minTable = 2;
  let currentSizeColumn = table.firstChild.querySelectorAll('td').length;
  let currentSizeRow = table.querySelectorAll('tr').length;

  appendRow.addEventListener('click', addRow);
  appendColumn.addEventListener('click', addColumn);
  removeRow.addEventListener('click', remRow);
  removeColumn.addEventListener('click', remColumn);

  function addRow() {
    const tr = document.createElement('tr');

    if (currentSizeRow >= maxTable) {
      return;
    }

    tr.innerHTML = allTr.innerHTML;
    table.appendChild(tr);
    currentSizeRow++;
  }

  function addColumn() {
    if (currentSizeColumn >= maxTable) {
      return;
    }

    [...table.children].forEach(tr => {
      const td = document.createElement('td');

      tr.append(td);
    });
    currentSizeColumn++;
  }

  function remRow() {
    if (currentSizeRow <= minTable) {
      return;
    }

    table.removeChild(table.querySelector('tr'));
    currentSizeRow--;
  }

  function remColumn() {
    if (currentSizeColumn <= minTable) {
      return;
    }

    [...table.children].forEach(tr => {
      tr.removeChild(tr.querySelector('td'));
    });

    currentSizeColumn--;
  }
}());
