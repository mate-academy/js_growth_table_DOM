'use strict';

// write code here
const button = document.querySelectorAll('.button');
const table = document.querySelector('.field');

button.forEach((btn) => {
  btn.addEventListener('click', () => {
    const action = btn.classList;
    let actionName = '';

    switch (true) {
      case action.contains('append-row'):
        actionName = 'append-row';
        break;
      case action.contains('remove-row'):
        actionName = 'remove-row';
        break;
      case action.contains('append-column'):
        actionName = 'append-column';
        break;
      case action.contains('remove-column'):
        actionName = 'remove-column';
        break;
    }

    if (actionName === 'append-row') {
      const newRow = document.createElement('tr');
      const columnCount = table.rows[0].cells.length;

      for (let i = 0; i < columnCount; i++) {
        const newCell = document.createElement('td');

        newRow.appendChild(newCell);
      }
      table.appendChild(newRow);
    }

    if (actionName === 'remove-row') {
      const rowCount = table.rows.length;

      if (rowCount > 1) {
        table.deleteRow(rowCount - 1);
      }
    }

    if (actionName === 'append-column') {
      for (let i = 0; i < table.rows.length; i++) {
        const newCell = document.createElement('td');

        table.rows[i].appendChild(newCell);
      }
    }

    if (actionName === 'remove-column') {
      const columnCount = table.rows[0].cells.length;

      if (columnCount > 1) {
        for (let i = 0; i < table.rows.length; i++) {
          table.rows[i].deleteCell(columnCount - 1);
        }
      }
    }
  });
});
