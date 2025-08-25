'use strict';

const container = document.querySelector('.container');
const table = document.querySelector('table');
const firstRow = document.querySelector('tbody tr');

const removeRow = document.querySelector('.remove-row');
const removeCol = document.querySelector('.remove-column');
const appendRow = document.querySelector('.append-row');
const appendCol = document.querySelector('.append-column');

let columCount = table.querySelectorAll('tbody tr').length;

let rowCount = firstRow.querySelectorAll('td').length;

function buttonDisabled() {
  removeCol.disabled = columCount <= 2;
  removeRow.disabled = rowCount <= 2;
  appendCol.disabled = columCount >= 10;
  appendRow.disabled = rowCount >= 10;
}

buttonDisabled();

container.addEventListener('click', (ave) => {
  if (ave.target.classList[0] === 'button') {
    go(ave.target.classList[1]);
    buttonDisabled();
  }

  go(ave.target.classList[0]);
  buttonDisabled();
});

function go(clasName) {
  switch (clasName) {
    case 'append-column':
      if (columCount >= 10) {
        return;
      }

      table.querySelectorAll('tr').forEach((element) => {
        const td = document.createElement('td');

        element.append(td);
      });

      columCount++;

      break;

    case 'append-row':
      if (rowCount >= 10) {
        return;
      }

      const tr = document.createElement('tr');

      firstRow.querySelectorAll('td').forEach(() => {
        const td = document.createElement('td');

        tr.append(td);
      });

      table.querySelector('tbody').append(tr);

      rowCount++;
      break;

    case 'remove-row':
      if (rowCount <= 2) {
        return;
      }

      table.querySelector('tbody').lastElementChild.remove();
      rowCount--;
      break;

    case 'remove-column':
      if (columCount <= 2) {
        return;
      }

      table.querySelectorAll('tr').forEach((row) => {
        row.lastElementChild.remove();
      });

      columCount--;
      break;
    default:
      break;
  }
}
