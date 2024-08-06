'use strict';

const table = document.querySelector('table tbody');
let rowsQuantaty = table.rows.length;
let cellsQuantaty = table.rows[0].cells.length;

updateButtonsStatus();

const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const action = e.target.className.replace('button', '').trim();

    switch (action) {
      case 'append-row':
        changeTable('add', 'row');
        break;
      case 'remove-row':
        changeTable('remove', 'row');
        break;

      case 'append-column':
        changeTable('add', 'column');
        break;
      case 'remove-column':
        changeTable('remove', 'column');
        break;
    }

    updateButtonsStatus();
  }
});

function changeTable(todo, type) {
  switch (type) {
    case 'row':
      if (todo === 'add') {
        const tr = document.createElement('tr');

        for (let i = 0; i < cellsQuantaty; i++) {
          const td = document.createElement('td');

          tr.append(td);
        }

        table.append(tr);
        rowsQuantaty++;
      } else {
        table.rows[rowsQuantaty - 1].remove();
        rowsQuantaty--;
      }

      break;

    case 'column':
      if (todo === 'add') {
        for (let j = 0; j < rowsQuantaty; j++) {
          const tr = table.rows[j];
          const td = document.createElement('td');

          tr.append(td);
        }

        cellsQuantaty++;
      } else {
        for (let k = 0; k < rowsQuantaty; k++) {
          table.rows[k].cells[cellsQuantaty - 1].remove();
        }
        cellsQuantaty--;
      }

      break;
  }
}

function updateButtonsStatus() {
  document.querySelector('.append-row').disabled = rowsQuantaty >= 10;
  document.querySelector('.remove-row').disabled = rowsQuantaty <= 2;
  document.querySelector('.append-column').disabled = cellsQuantaty >= 10;
  document.querySelector('.remove-column').disabled = cellsQuantaty <= 2;
}
